import './Product.css'
import Button from '../Button/Button'
import { useNavigate } from 'react-router-dom'
import { ExternalLink } from 'lucide-react'



export const Product = ({ item, index, recipe, setRecipe }) => {

  function truncate(str, maxlength) {
    if (str.length > maxlength) {
        return str.slice(0, maxlength) + '...';
    } else {
      return str
    }
}

  const nav = useNavigate()

  return (


    <div key={index} className="card">



      <div id={item.id} className="card-body" onClick={() => { nav(`/product/${item.id}`)}}>


<img
          style={{

            marginRight: "5px"
          }}
          
          src={item.image || item.image2}
          alt="itemImage"
          width="130"
          height="100" />
          

         {/* <div style={{
          dispaly: "flex",
          flexDirection: "column"
         }}>

    </div> */}
    <div style={{
      dispaly: "flex",
      flexDirection: "column",
      justifyContent: "flex-start"
      // paddingLeft: "20px"
      
    }}>
        <h2 className="card-name">{item.itemName}</h2>

       
        <div className="card-description"> <span className='card-desc' >{truncate(item.description, 35) }</span></div>
        </div>
      </div>

      {/* <Button
        style={"btn-card card-open"}
        click={() => { nav(`/product/${item.id}`) }}
        id={item.id}
        ingredients={item.ingredients}

      >
        открыть карточку <p> <ExternalLink size={25} style={{
          paddingTop: "5px"
        }} /></p>

      </Button> */}

      {/* <Button style={"btn-card btn-delete"} click={() => {
        setRecipe(recipe.filter(chunk => {
         return (chunk.id !== item.id)
        }))
       
      }}>X</Button> */}

      


<span
        className="delete-button"
        onClick={() => {
          setRecipe(recipe.filter(chunk => {
            return (chunk.id !== item.id)
          }))
        }}
      >x</span>

    </div>
  
    
  )
}