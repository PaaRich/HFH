import {defineType, defineField} from 'sanity'
//import {CalenderIcon} from 'sanity/icons'

export default defineType({
  name: 'training',
  title: 'Training',
  type: 'document',
  //icon: CalenderIcon,
  fields: [
    defineField({
      name: 'id',
      title: 'ID',
      type: 'string',
      initialValue: () => `id-${Math.random().toString(36).substr(2, 9)}`, // Auto-generated unique string
      readOnly: true, // Makes it read-only in the Studio
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: {type: 'author'},
    }),
    defineField({
      name: 'videoFile',
      title: 'Video File',
      type: 'file',
      options: {
        accept: 'video/*', // This restricts the accepted files to video formats
      },
    }),
    defineField({
      name: 'thumbnail',
      title: 'Thumbnail',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'slug',
      title: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 50,
      },
      hidden: ({document}) => !document?.name,
    }),
    defineField({
      name: 'PublishedAt',
      title: 'Published at',
      type: 'datetime',
    }),
  ],
  //   preview: {
  //     select: {
  //       title: 'title',
  //       author: 'author.name',
  //       media: 'video',
  //     },
  //     prepare(selection) {
  //       const {author} = selection
  //       return {...selection, subtitle: author && `by ${author}`}
  //     },
  //   },
})
