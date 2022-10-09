import sanityClient from '@sanity/client';  //this helps to connect sanity with our project
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId:'cw24wgkh',
    dataset:'production',
    apiVersion:'2022-10-05',
    useCdn:'true',
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN
});

const builder = imageUrlBuilder(client); //for sanity images

export const urlFor = (source) => builder.image(source);