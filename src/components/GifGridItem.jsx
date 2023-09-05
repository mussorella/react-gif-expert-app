
//Cre esto para sacar el url y el title de la imagen y ponerlo en als categorys del gif grid
export const GifGridItem = ({title, url}) => {
  
    return (
    <div className="card">
        <img src={url} alt={title} />
        <p>{title}</p>
    </div>
  )
}
