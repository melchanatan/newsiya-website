import * as contentful from "contentful";
import { cache } from 'react'

const entryIdHero = "6nVvZP2GObxuQXLEf6xBgm"
const entryIdAbout = "1fswxyxIb0PhjQXJfebeT2"
const entryIdServices = "3hlrDsCxw3NsQkskwEH48e"

const client = contentful.createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export const revalidate = 3600; 

export const getContentHero = cache(async () => {
  const result = await client.getEntry(entryIdHero)
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


export const getContentAbout = cache(async () => {
  const result = await client.getEntry(entryIdAbout)
  return {
    image: result.fields.image,
    text: result.fields.text,
  }
})

export const getContentServices = cache(async () => {
  const result = await client.getEntry(entryIdServices)
  console.log(result.fields.serviceImages)
  return {
    serviceImages: result.fields.serviceImages
  }
})