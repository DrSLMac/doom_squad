const pageInfo = {
    name: 'pageInfo',
    title: 'Page Info',
    type: 'document',
    fields: [
      {
        name: 'aboutImage',
        title: 'About Page Image',
        type: 'image',
        options: { hotspot: true },
        fields: [
            {
                name: 'alt',
                title: 'Alt',
                type:'string'
            }
        ]
      },
      {
        name: 'coachImage',
        title: 'Coaches Page Image',
        type: 'image',
        options: { hotspot: true },
        fields: [
            {
                name: 'alt',
                title: 'Alt',
                type:'string'
            }
        ]
      },
    ],
}

export default pageInfo;