import * as contentful from "contentful";
import { cache } from 'react'

const client = contentful.createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export const revalidate = 3600; 

export const getContentHero = cache(async () => {
  const result = await client.getEntry(process.env.CONTENTFUL_ENTRY_ID)
  return {
    images: result.fields.images,
    title: result.fields.title,
    subtitle: result.fields.subtitle,
    agodaReviewsCount: result.fields.agodaReviewsCount,
    agodaRating: result.fields.agodaRating,
    reviews: result.fields.reviews,
    promotionImages: result.fields.promotionImages,
  }
})