import { useEffect,useState } from "react";
import { getGifs } from "../helpers/getGifs";


export const useFetchGifs = (category) => {//un hook es una funcion que regresa algo, en este caso un objeto
  
  
    const [images, setImages] = useState([]);
    const [isLoading, setIsloading]=useState(true)
    const getImages= async()=>{
      const newImages= await getGifs(category);
      setImages(newImages)
      setIsloading(false)
    }
      useEffect( () =>{
    getImages()
      }, [] );
  
  
    return{
    images,//esto es lo que regresa el custom hook
    isLoading//esto es lo que regresa el custom hook

  }
}
