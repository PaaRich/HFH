import { defineType, defineField } from "sanity";

export default defineType({
    name: 'event',
    title: 'Event',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: Rule => Rule.min(4).max(20).error("Title must be between 4 and 20 characters."),
        }),
        defineField({
            name: 'start',
            title: 'Start',
            type: 'datetime',
            validation: Rule => Rule.custom(date => {
                if (!date) return "Start date is required.";
                return new Date(date) >= new Date() ? true : "Start date must be today or in the future.";
            })
        }),
        defineField({
            name: 'end',
            title: 'End',
            type: 'datetime',
            validation: Rule => Rule.custom(date => {
                if (!date) return "End date is required.";
                return new Date(date) >= new Date() ? true : "End date must be today or in the future.";
            })
        }),
        defineField({
            name: 'allday',
            title: 'Allday',
            type: 'boolean'
        })
    ]
});
