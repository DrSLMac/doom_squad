const coach = {
    name: 'coach',
    title: 'Coaches',
    type: 'document',
    fields: [
        {
            name: 'id',
            title: 'ID',
            type: 'number'
        },
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: { source: 'name' },
        },
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'image',
            title: 'Headshot',
            type: 'image',
            options: { hotspot: true },
            fields: [
                {
                    name: 'alt',
                    title: 'Alt',
                    type: 'string',
                }
            ]
        },
        {
            name: 'content',
            title: 'Bio Content',
            type: 'array',
            of: [{ type: 'block' }]
        },
    ]
};

export default coach;