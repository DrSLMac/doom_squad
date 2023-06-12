const about = {
  name: "about",
  title: "About Page",
  type: "document",
  fields: [
    {
        name: "title",
        title: "Title",
        type: "string",
    },
    {
        name: "about",
        title: "About Info",
        type: "array",
        of: [{ type: 'block'}],
    },
    {
        name: 'image',
        title: 'Image',
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
  ],
};

export default about;