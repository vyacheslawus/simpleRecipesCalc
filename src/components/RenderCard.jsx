

export const RenderCard = ({ product, addProduct, changeColor, changeColorTitles }) => {
  let total = 0;
console.log(product); 
console.log(addProduct);
return (
    <>
      {product?.map((item, index) => {

           total += item.amount
        if (item.addIng) {
          return <p key={index} style={changeColorTitles}>{item.addIng}</p>;
        } else if (item.doughTitle) {
          return <p key={index} style={changeColorTitles}>{item.doughTitle}</p>;
        }

        

        else {
          return (
            
            <li className="product-page-item" key={index}>
           
              <div className="product-page">
              

                {item.addIng && (
                  <p style={{ color: "red", fontWeight: "bold" }}>{item.addIng}</p>
                )}

                {item.name && <p style={{marginLeft: "10px"}} >{item.name}</p>}

                <div style={{ display: "flex", marginRight: "15px" }}>
                  {item.amount && (
                    <p style={changeColor}>{item.amount} </p>
                  )}
                  <span> гр.</span>
                </div>
              </div>
            </li>
          );
        }
      })}


{addProduct?.map((item, index) => {

total += item.amount
if (item.addIng) {
return <p key={index} style={changeColorTitles}>{item.addIng}</p>;
} else if (item.doughTitle) {
return <p key={index} style={changeColorTitles}>{item.doughTitle}</p>;
}



else {
return (
 
 <li className="product-page-item" key={index}>

   <div className="product-page">
   

     {item.addIng && (
       <p style={{ color: "red", fontWeight: "bold" }}>{item.addIng}</p>
     )}

     {item.name && <p style={{marginLeft: "10px"}} >{item.name}</p>}

     <div style={{ display: "flex", marginRight: "15px" }}>
       {item.amount && (
         <p style={changeColor}>{item.amount} </p>
       )}
       <span> гр.</span>
     </div>
   </div>
 </li>
);
}
})}
    </>

      
    
  );

  
};

