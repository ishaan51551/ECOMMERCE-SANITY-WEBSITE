export default {
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
        {
            name: 'image',
            title: 'Image',
            type: 'array',
            of: [{ type: 'image' }],
            option: {
                hotspot: true, //to fix the image
            }
        },
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            //slug -its a unique string or a url.
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            option: {
                source: 'name',
                maxLength: 90,
            }
        },
        {
            name: 'price',
            title: 'Price',
            type: 'number',
        },
        {
            name: 'details',
            title: 'Details',
            type: 'string',
        },
    ],
}