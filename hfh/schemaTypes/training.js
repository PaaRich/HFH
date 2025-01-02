import {defineType, defineField} from 'sanity'
//import {CalenderIcon} from 'sanity/icons'

export default defineType({
  name: 'training',
  title: 'Training',
  type: 'document',
  //icon: CalenderIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'video',
      title: 'Video',
      type: 'file',
      options: {
        accept: 'video',
      },
      //   fields: [
      //     {name: 'videoFile', type: 'file', title: 'Video File'},
      //     // { name: 'title', type: 'string', title: 'Title' },
      //     {name: 'description', type: 'string', title: 'Description'},
      //   ],
    }),
    defineField({
      name: 'rate',
      title: 'Rate',
      type: 'string',
      options: {
        list: ['Good', 'Bad'],
        layout: 'radio',
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
