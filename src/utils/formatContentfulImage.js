const formatContentfulImages = (images) => {
    console.log(images)
    if (images == undefined || images.length == 0) return []

    return images.map((image) => {
      return {
        src: image.fields.file.url,
        alt: image.fields.title,
      }
    })
  }

export default formatContentfulImages;