const formatContentfulImages = (images) => {
  if (images == undefined || images.length == 0) return []

  return images.map((image) => {
    return formatContentfulImage(image)
  })
}

export const formatContentfulImage = (image) => {
  console.log(image)
  return {
    src: "https:" + image.fields.file.url,
    alt: image.fields.title,
  }
}

export default formatContentfulImages;