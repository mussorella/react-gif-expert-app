

export const getGifs=async(category)=>{
    const url =`https://api.giphy.com/v1/gifs/search?api_key=eDdEsrxbrX0ubCZMR1TrqdaoER6WMN3B&q=${category}&limit=10`
  const resp = await fetch(url);//el await dice de esperar q se envie el url, si pongo await arriba debe de ponerse como funcion async
  const {data}=await  resp.json()//llamó la data que tira el url, que tira el url del api key 
  
  const gifs= data.map(img=>({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url//esto esta en la pagina vite cuando hacemos el console.log de la data y buscamos el url de una imagen para q se ponga pero q no sea ni muy grande ni muy chica
  
     
  }))
  
  return gifs
  }