export const searchList = [
    {id:1,text:"dog"},
    {id:2,text:"beach"},
    {id:3,text:"coding"},
    {id:4,text:"bitcoin"},
    {id:5,text:"happy"},
    {id:6,text:"cake"},
]

export const gifStoreData = (newData)=>{
    return newData.map((item) => {
      const { id, title, images } = item;
      const {
        original: { url: image },
      } = images;
      return { id, title, image };
    });
  }

  export const  photoStoreData=(data)=>{
    return data.map((item) => {
      const { id, alt_description: description, urls } = item;
      const { regular: image } = urls;
      return { id, image, description };
    });
  }