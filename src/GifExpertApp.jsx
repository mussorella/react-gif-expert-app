import { useState } from "react"
import { AddCategory } from './components'
import { GifGrid } from "./GifGrid"


export const GifExpertApp=()=>{

 const [categories, setCategories] = useState([])
 const onAddCategory=(newCategory)=>{
//no usar push para insertar arreglos
//usamos set categories
if (categories.includes(newCategory))return;
setCategories([newCategory, ...categories])//SI LO PONEMOS AL INICIO, SE AGREGA AL INICIO DEL ARREGLO
 }
    

 return (
    <>
    
    <h1>GifExpertApp</h1>
    
<AddCategory 

onNewCategory={(event) => onAddCategory(event)}
/>

    
    
    
        {
        categories.map((category) =>
             (
                <GifGrid 
                key={category} 
                category={category}
                />
             )
        
        )
        }
        
    
    
    
    </>
)




}