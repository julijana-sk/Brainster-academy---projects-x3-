import React from 'react'

// interface Props {

// }

// const Order: React.FC<Props> = () => {

//   return (
//     <div className="container-fluid my-5">
//            <div className="row d-flex flex-column justify-content-center">
//              <div className="col-11 mb-5"> 
//                   {/* renderiraj gi stavenite vo card to shop produkti  */}
//               </div> 

//             {/* kopcinjata za dodavanje/odzemanje quantity, presmetka i sumiranje vkupna suma   */}
//               <div className="col-11"> 
//                 <button className="btn btn-outline-primary" onClick={goBack}>
//                  {/* Go To Product List */}
//                </button> 
//                 <div style={{ textAlign: "center" }}>
//                  <div className="basket"> 
//                     {selectedProducts?.map((prod, i) => (
//                      <AmountOfProduct
//                        key={i}
//                        product={prod}
//                        onMinusClick={onRemoveItem}
//                        onPlusClick={onAddItem}
//                      />
//                    ))} 
//                   </div>
//                  <p>Вкупно: {totalPrice} ден.</p>
              
//                  <PrimaryBtn onClick={placeOrder} title="Продолжи" btnClass={"PrimaryBtn w-75"} backgroundColor={"btn-gold"} color='black' height={"41px"} border='1.8px solid #C2C2C2'/>
                 
//                   {/* dodadi funcija so koja dokolku se klikne na ova slikicka, da se isprazni seta niza od produkti !!!   */}
//                   <img src="../../pictures/icons/Basket.png" alt="empty" /> 
//                   {selectedProducts.length === 0 && (
//                    <p>EMPTY BASKET</p>
//                    )} 
                
//                 </div>
//              </div> 

//             {/* Box Component Item   */}
//             {boxItemsData.map((boxItem, index) => {
//              return (
//                <BoxComponent key={index} boxItem={boxItem} onClick={() => handleBoxClick(boxItem)} expanded={boxItem === expandedBox}/>
//              )
//            })} 

//              {/* Other Related Product Items   */}
//                 <RelatedProducts  products={randomProducts}/> 

//              {/* pagination   */}
//                 <div className="flex-l-m flex-w w-full p-t-10 m-lr--7" style={{ letterSpacing: "5px" }}>
//                    <button onClick={() => handlePageChange(currentPage - 1)} className='bg-transparent border-0 mr-1'>
//                        {"<"}
//                    </button>
//                    {renderPages()}
//                    <button onClick={() => handlePageChange(currentPage + 1)} className='bg-transparent border-0 ml-1'>
//                        {">"}
//                    </button>
//                </div> 
//         </div>
//      </div>
//   )
// }

// export default Order