

import {GifGridItem} from './components/GifGridItem'
import {useFetchGifs} from './hooks/useFetchGifs'

export const GifGrid=({category})=>{

const {images,isLoading}=useFetchGifs(category)


  
    return (
    <>
    
    <h3>{category}</h3>
    {
    isLoading
    && (<h2>cargando...</h2>)
    

    }
    
    <div className='card-grid'>
      {images.map((image)=>(
      <GifGridItem key={image.id}
      {...image}/>//esto hace que todas las props de la imagen del gif se envien a cada gif item
      )
      )}
    
    </div>
    
    
    </>
  )
}
