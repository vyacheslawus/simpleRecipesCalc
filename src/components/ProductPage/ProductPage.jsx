import { Link, useParams } from 'react-router-dom'
import './ProductPage.css'
import { products } from '../../data'
import { useEffect, useReducer, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../Header/Header'
import Button from '../Button/Button'
import { RefreshCcw, Calculator, LockOpen, CircleChevronLeft } from 'lucide-react'
import { RenderCard } from '../RenderCard'
import { Carousel } from 'antd'
import { Alerted } from '../Alert/Alerted'
import AntModal from '../AntModal/AntModal'
import AntRate from '../AntRate/AntRate'
import AntCar from '../AntCarousel/AntCarousel'

// const newData = products.flatMap(item => item.ingredients).filter(Boolean)


const contentStyle = {
  margin: 0,
  height: '160px',
  color: '#281d1d',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

export const ProductPage = () => {
  const { id } = useParams()

  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  // console.log("PRODUCT ID:", { id })




   

  const [product, setProduct] = useState(products[id])
  const initialIngredients = product.ingredients
  const additionalIngredients = product.addIngredients

console.log(additionalIngredients)
  let newTOTAL = 0
  let total = 0;

  let newTOTAL_ADD = 0
  let total_ADD = 0


  initialIngredients.map((ing) => {

    if (ing.amount) {
      total += +ing.amount
  
    }

    return total
  }

  )

  additionalIngredients?.map((ing) => {

    if (ing.amount) {
      total_ADD += +ing.amount
  
    }

    return total_ADD
  }

  )


  const [addCounter, setAddCounter] = useState(additionalIngredients)
  const [counter, setCounter] = useState(initialIngredients)
  const [colored, setColored] = useState(false)
  const [newCount, setNewCount] = useState(1)
  const [greenBtn, setGreenBtn] = useState(false)


  const [totalCounter, setTotalCounter] = useState(total)
  const [totalCounterAdd, setTotalCounterAdd] = useState(total_ADD)





  const nav = useNavigate()

  const changeColor = {
    color: colored ? "red" : "rgb(97, 144, 183)",
    marginRight: "7px",
    fontWeight: "bold",
  }

  const changeColorTitles = {
    color: colored ? "green" : "grey",
    fontWeight: "bold",
    textAlign: "center",
    margin: "5px"
  }

  //pizda
  const x2 = useRef()
  const x3 = useRef()
  const x5 = useRef()
  const x10 = useRef()
  const x15 = useRef()
  const x20 = useRef()




  const count = useRef();
  const urlImg = product.image


  const handleOnChange = (val) => {
    if (val === '' || isNaN(val)) {
      setGreenBtn(false)
      return
    } else {
      setGreenBtn(true)
      clearGreenTabs()
    }
  }

  


  const handleClickCount = (e, val) => {

    if (val === '' || isNaN(val)) {

      setGreenBtn(false)
      // alert('sorry that string cannot be empty or having some symbols except number')

     

 
      
    } else {
      
      

      const totalFunc = () => {
        initialIngredients?.forEach((item) => {

          if (item.addIng) {
            return
          }

          if (item.amount) {
           newTOTAL += Number(item.amount * val) 
          //  console.log(newTOTAL);
          console.log(item.addIng)

         
          }

        }

        
      )
      return newTOTAL   
    
    }

    const totalFuncAdd = () => {
      additionalIngredients?.forEach((item) => {

        // if (item.addIng) {
        //   return
        // }

        if (item.amount) {
         newTOTAL_ADD += Number(item.amount * val) 
        }

      }
    )
    return newTOTAL_ADD  
  
  }

      setTotalCounter(totalFunc())
      setTotalCounterAdd(totalFuncAdd())
      setCounter(initialIngredients?.map((ingerdient) => ({ ...ingerdient, amount: ingerdient.amount * val })))
      setAddCounter(additionalIngredients?.map((ingerdient) => ({ ...ingerdient, amount: ingerdient.amount * val })))
      setColored(true)
      count.current.value = ''
      setNewCount(val)
      setGreenBtn(false)
     
     
     
    }

    if (product.category === "bread" || product.category === "croissants") {
      val === 10 ? x10.current.className = "active" : x10.current.className = "product-page-hot-btn"
      val === 15 ? x15.current.className = "active" : x15.current.className = "product-page-hot-btn"
      val === 20 ? x20.current.className = "active" : x20.current.className = "product-page-hot-btn"
    } else if (product.category === "pie") {
      val === 2 ? x2.current.className = "active" : x2.current.className = "product-page-hot-btn"
      val === 3 ? x3.current.className = "active" : x3.current.className = "product-page-hot-btn"
      val === 5 ? x5.current.className = "active" : x5.current.className = "product-page-hot-btn"
    }



  }

  const clearValue = () => {
    setCounter(initialIngredients)
    setAddCounter(additionalIngredients)
    setColored(false)
    count.current.value = ''
    setNewCount(1)
    setGreenBtn(false)
    setTotalCounter(total)

    if (product.category === 'bread') {
      clearGreenTabs()
      console.log('hleb')
    } else if (product.category === "pie") {
      clearGreenTabs()
      console.log('pie')
    }




  };



  const clearGreenTabs = () => {

    if (product.category === "bread") {
      x10.current.className = "product-page-hot-btn"
      x15.current.className = "product-page-hot-btn"
      x20.current.className = "product-page-hot-btn"
    } else if (product.category === "pie") {
      x2.current.className = "product-page-hot-btn"
      x3.current.className = "product-page-hot-btn"
      x5.current.className = "product-page-hot-btn"
    }

  }


  return (
    <>



      <Header />
 

     



      {/* <AntCar></AntCar> */}
     
       <div className="product-page-wrapper">


       <img className="product-page-img" src={product.image} alt=""/>

      

      



          <h2 className="product-page-name">{product.itemName} </h2>

          <p className="product-page-description">{product.description}</p>

          <p style={{
            display: "flex",
            flexDirection: "column",
          }}>ниже приведена таблица ингредиентов по расчету на <span style={changeColor}> {" "} {newCount}  {product.category === "bread" ? "шт." : newCount === 1 ? "порция" : newCount > 1 && newCount < 5 ? "порции" : "порций" } </span></p>

          <p className='total' style={{marginBottom: "10px"}}> выход теста: <span style={{
            marginLeft: "40px",
            marginRight: "5px",
            color: "green",
            backgroundColor: "#8080804f",
            fontWeight: "bolder",
            padding: "5px",
            
          }}>{totalCounter}</span> <span>гр.</span>  </p>

          {product.addIngredients && 
            <p className='total'> {product.itemName === "Ромовая баба" ? "выход сиропа:" : "выход начинки:"}  <span style={{
              marginLeft: "40px",
              marginRight: "5px",
              color: "#579857",
              backgroundColor: "#8080804f",
              fontWeight: "bolder",
              padding: "5px"
            }}>{totalCounterAdd}</span> гр. </p>
        }


  
          <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            marginBottom: "0.5rem"
          }}>

            <input type="text"
              ref={count}
              onChange={() => { handleOnChange(count.current.value) }}
              style={{ width: "100%", lineHeight: "20px", marginTop: "5px" }} />

            <div className="product-page-buttons" style={{ width: "100%", paddingBottom: "20px" }}>
              <button style={{
                color: greenBtn ? "white" : "grey",
                borderRadius: "8px",
                border: "1px solid transparent",
                padding: "0.6em 1.2em",
                fontSize: "1rem",
                fontWeight: "500",
                fontFamily: "inherit",
                backgroundColor: greenBtn ? "green" : "#bdb3b3",
                cursor: "pointer",
                transition: "border-color 0.25s",
                marginLeft: "0px",
                marginRight: "5px",
                display: "flex"
              }

              } onClick={(e) => { handleClickCount(e, count.current.value) }}>посчитать
                <Calculator
                  size={20}
                  style={{
                    marginLeft: "7px"
                  }}
                  strokeWidth={2} /></button>
              <Button
                style={"btn btn-refresh"}
                click={() => { clearValue() }}

              > обновить   <RefreshCcw size={20} style={{ marginLeft: "7px" }} strokeWidth={2} /></Button>
            </div>

          </div>

          <ul className="product-page-list" >
            {console.log('log on 207 string')}


            <RenderCard product={counter} addProduct={addCounter} changeColor={changeColor} changeColorTitles={changeColorTitles} />

            {/* output to self component */}

          </ul>


          <div className="product-page-hot-buttons">

            {/* output to self component */}
            {product.category === 'pie' ?
              <>
                <button ref={x2} onClick={(e) => { handleClickCount(e, 2) }} className="product-page-hot-btn">x2</button>
                <button ref={x3} onClick={(e) => { handleClickCount(e, 3) }} className="product-page-hot-btn">x3</button>
                <button ref={x5} onClick={(e) => { handleClickCount(e, 5) }} className="product-page-hot-btn">x5</button>
              </>
              :
              <>
                <button ref={x10} onClick={(e) => { handleClickCount(e, 10) }} className=" product-page-hot-btn">x10</button>
                <button ref={x15} onClick={(e) => { handleClickCount(e, 15) }} className=" product-page-hot-btn">x15</button>
                <button ref={x20} onClick={(e) => { handleClickCount(e, 20) }} className=" product-page-hot-btn">x20</button>
              </>
            }


          </div>

        
        </div>
        
        {/* <AntRate></AntRate> */}

        <AntModal data={product}></AntModal>

   

      {/* !!! КНОПКА КОТОРАЯ ЗАМЕНЯЛА МОДАЛКУ <Button
        style={"btn btn-with-margin "}
        click={() => { nav(`/product/${id}/details`) }}
      >
        <LockOpen
          size={25}
          style={{
            marginRight: "5px",
            marginTop: "5px"
          }} /> Описание процесса производства
      </Button> */}

      <Link
        to={'/'}
        style={{
          padding: "20px",
          border: "1px solid black",
          margin: "1rem",
          marginBottom: "10px",
          borderRadius: "10px",
          backgroundColor: "grey",
          color: "white",
          textAlign: "center"
        }}
      >
        Назад к списку</Link>


    </>
  )

}