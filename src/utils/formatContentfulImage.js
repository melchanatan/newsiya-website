const formatContentfulImages = (images) => {
  if (images == undefined || images.length == 0) return []

  return images.map((image) => {
    return formatContentfulImage(image)
  })
}

export const formatContentfulImage = (image) => {
  return {
    src: "https:" + image.fields.file.url,
    alt: image.fields.title,
    description: image.fields.description,
  }
}

export default formatContentfulImages;