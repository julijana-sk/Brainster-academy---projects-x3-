import React, { useCallback, useEffect, useState } from 'react'
import Head from 'next/head';
import { useRouter } from 'next/router';
import { GetServerSideProps, NextPage } from 'next';
import BoxComponent from '@/components/BoxComponent';
import RelatedProducts from '@/components/RelatedProducts';
import { BoxComponentType, ProductType } from '@/types/types';
import PrimaryBtn from '@/components/PrimaryBtn';
import { ToggleBtn } from '@/components/ToggleBtn';
import Favorites from '@/components/Favorites';
import PaginationId from '@/components/PaginationId';
import ProductItem from '@/components/ProductItem';


interface Props {
  products: ProductType[];
  randomProducts: ProductType[];
  boxItemsData: BoxComponentType[];
}

type ActiveView = "addToCard" | "favorites";

const OrderPage: NextPage<Props> = ({ products, boxItemsData, randomProducts }) => {

  const [view, setView] = useState<ActiveView>("addToCard");


  const router = useRouter();  
  const [expandedBox, setExpandedBox] = useState(null);
  const [favorites, setFavorites] = useState<ProductType[]>([]);
  const [addToCardProducts, setAddToCardProducts] = useState<ProductType[]>([]);  
  const [productAmounts, setProductAmounts] = useState({});
  const [orderProducts, setOrderProducts] = useState<ProductType[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);


  useEffect(() => {

      const savedFavorites = localStorage.getItem('favorites');
      const savedAddToCardProducts = localStorage.getItem('addToCardProducts');
      const savedProductAmounts = localStorage.getItem('productAmounts');
      
        if (savedFavorites) {
          setFavorites(JSON.parse(savedFavorites));
        }
        
        // if (savedProductAmounts) {
        //   // tuka moze da pravi problem koi produkti gi stavam za render, dali so amount ili samo addToCard ??
        //    const addToCardProductIds = (JSON.parse(savedProductAmounts));
        //    const orderedProducts = products.filter((product) => addToCardProductIds.includes(product.id));
           
        //    setOrderProducts(orderedProducts);
        // }

      if (savedAddToCardProducts) {
          const addToCardProductIds = JSON.parse(savedAddToCardProducts);
          const orderedProducts = products.filter((product) => addToCardProductIds.includes(product.id));

          setAddToCardProducts(orderedProducts);
          setOrderProducts(orderedProducts);

        }
}, []);



  
  const calcPrice = () => {
    let price = 0;
    addToCardProducts.forEach((p) => {
      price += p.price * p.amount;
    });

    setTotalPrice(price);
  };

  const calcDiscount = () => {
    let totalDiscount = 0;
      addToCardProducts.forEach((orderedProduct) => {
      if(orderedProduct.discount) {
          totalDiscount += orderedProduct.price * orderedProduct.discount - orderedProduct.price;
      }
      });
  }

  useEffect(() => {
    calcPrice();
  }, [addToCardProducts]);


//    const renderDiscount = useCallback((discount: any, orderedProducts: any) => {
//     let productsWithDiscounts = 0;
//     let totalDiscountedPrice = 0;

//     orderedProducts.forEach((orderedProduct: any) => {
//         if (orderedProduct.discount === discount) {
//             productsWithDiscounts++;
//             totalDiscountedPrice += ((orderedProduct.price * orderedProduct.discount) / 100);
//         }
//     });

//     return (
//         <div className="flex-row justify-content-between address-text mr-auto ml-auto mb-2 text-danger">
//             <p>{productsWithDiscounts} x - {discount} % попуст</p>
//             <p>- {totalDiscountedPrice} ден.</p>
//         </div>
//     )
// }, []);

 

//   const addToCard = (prod: ProductType) => {
//     console.log("you clicked ADD TO CARD")
//     const updatedAllProducts = products.map((p) => {
//       if (p.id === prod.id) {
//         return {
//           ...p,
//           selected: !p.selected,
//           amount: p.selected ? 0 : 1,
//         };
//       }
//       return p;
//     });
//     setSelectedProducts(updatedAllProducts);
//   };

//    const placeOrder = () => {
//     const updatedState = products.map((p) => {
//       return {
//         ...p,
//         selected: false,
//         amount: 0,
//       };
//     });
//     setProducts(updatedState);
//   };

    // const emptyBasket = (product: any, amount: number) => {

    //   const updatedAddToCardProducts = addToCardProducts.filter((item) => item !== product);
    //   const updatedProductAmounts = {
    //     ...productAmounts,
    //     [product]: 0,
    //   };

    //   setAddToCardProducts(updatedAddToCardProducts);
    //   setProductAmounts(updatedProductAmounts);
    //   setOrderProducts([]);
    //     localStorage.setItem('addToCardProducts', JSON.stringify(updatedAddToCardProducts));
    //     localStorage.setItem('productAmounts', JSON.stringify(updatedProductAmounts));
    // }
        
    const handleBoxClick = (box: any) => {
      setExpandedBox(box === expandedBox ? null : box);
    }

    

//     const renderDiscount = (discount: any, orderedProducts: any) => {
//  let productsWithDiscounts = 0;
//  let totalDiscountedPrice = 0;

//  orderedProducts.forEach((orderedProduct: any) => {
//     if (orderedProduct.discount === discount) {
//       productsWithDiscounts++;
//       totalDiscountedPrice += ((orderedProduct.price * orderedProduct.discount) / 100);
//     }
//  });

//  return (
//     <div className="flex-row justify-content-between address-text mr-auto ml-auto mb-2 text-danger">
//       <p>{productsWithDiscounts} x - {discount} % попуст</p>
//       <p>- {totalDiscountedPrice} ден.</p>
//     </div>
//  )
// }
  
  
  return (
    <>
      <Head>
        <title>Igralishte-Order</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className="container">
          <div className="row d-flex flex-column justify-content-center mr-auto ml-auto">
            <div className="col-11 p-0  mr-auto ml-auto">
          <div className="row d-flex flex-row justify-content-center mt-5 mb-3">
              <div className="col-12 p-0 flex-row">
                <div className='col-5 align-items-center p-0 text-center mr-2'><img src="../pictures/icons/shopping vehicle.png" /><ToggleBtn title="Кошничка" onClick={() => setView("addToCard")} /></div>
                <div className='col-5 align-items-center text-center p-0'><img src="../pictures/icons/heart-straight-thin.png" /><ToggleBtn title="Омилени" onClick={() => setView("favorites")} /></div>
              </div>
          </div>
          {view === "addToCard" ? 

          <div className="container p-0 mr-auto ml-auto">
              <div className="col-11">
               {addToCardProducts.map((orderedProduct) => (
                  <div key={orderedProduct.id}>
                    <ProductItem {...orderedProduct} />
                  </div>
                ))}
              </div>

              {/* kopcinjata za dodavanje/odzemanje quantity, presmetka i sumiranje vkupna suma   */}
              <div className="col-11"> 
                {/* <button className="btn btn-outline-primary" onClick={goBack}>
                Go To Product List
              </button>  */}
                 {addToCardProducts.map((orderedProduct) => (
                  <div key={orderedProduct.id} className='flex-row justify-content-between address-text mr-auto ml-auto mb-3' style={{color: 'darkgrey'}}>
                    <p className='mb-2'>{orderedProduct.title}</p>
                      <p>{orderedProduct.price} ден.</p>
                  </div>
                ))}
                
                <div className='flex-row justify-content-between address-text mr-auto ml-auto mb-2'style={{color:'#8a8328'}}>
                    <p>+  достава до адреса</p>
                    <p>150 ден.</p>
                </div>
                {addToCardProducts.map((orderedProduct) => {

                  const renderDiscount = (discount: any, orderedProducts: any) => {
                        let productsWithDiscounts = 0;
                        let totalDiscountedPrice = 0;

                        orderedProducts.forEach((orderedProduct: any) => {
                            if (orderedProduct.discount === discount) {
                              productsWithDiscounts++;
                              totalDiscountedPrice += ((orderedProduct.price * orderedProduct.discount) / 100);
                            }
                        });

                        return (
                            <div className="flex-row justify-content-between address-text mr-auto ml-auto mb-2 text-danger">
                              <p>{productsWithDiscounts} x - {discount} % попуст</p>
                              <p>- {totalDiscountedPrice} ден.</p>
                            </div>
                        )
                        }
                    let discounts: any = [];

                    addToCardProducts.forEach((item) => {
                        if (!discounts.includes(item.discount) && item.discount !== 0) {
                          discounts.push(item.discount);
                        }
                    });

                    return discounts.map((discount: any) => {
                        return renderDiscount(discount, addToCardProducts);
                    });
                    })}


                {/* {addToCardProducts.map((item) => {
                      let discounts: any = [];
                      let productsWithDiscounts = 0;
                      let totalDiscountedPrice = 0;

                      if (!discounts.includes(item.discount) && item.discount !== 0) {
                          discounts.push(item.discount);
                      }

                      if (item.discount !== 0) {
                          productsWithDiscounts++;
                          totalDiscountedPrice += (item.price * item.discount) / 100;
                      }
                        
                      return (
                          <div key={item.discount}>
                            {productsWithDiscounts} x - {item.discount}% попуст - {totalDiscountedPrice} ден.
                          </div>
                      );
                })} */}


                <div className='flex-row justify-content-between mr-auto ml-auto my-4'>
                    <h2 className='title'>Вкупно: </h2>
                    <h2><strong>{totalPrice} ден.</strong></h2>
                </div>
              <div>
                {/* <PrimaryBtn onClick={placeOrder} title="Продолжи" btnClass={"PrimaryBtn w-75"} backgroundColor={"btn-gold"} color='black' height={"41px"} border='1.8px solid #C2C2C2'/> */}
                <PrimaryBtn title="Продолжи" btnClass={"PrimaryBtn w-75"} backgroundColor={"btn-gold"} color='black' height={"41px"} border='1.8px solid #C2C2C2'/>
                {/* <div onClick={() => emptyBasket(orderProducts, 0)}>
                   <img src="../../pictures/icons/Basket.png" alt="empty" /> 
                </div> */}
                
                {addToCardProducts.length === 0 && (
                  <p>EMPTY BASKET</p>
                  )}   
              </div> 

              {/* Box Component Item   */}
              {boxItemsData.map((boxItem, index) => {
                  return (
                    <BoxComponent key={index} boxItem={boxItem} onClick={() => handleBoxClick(boxItem)} expanded={boxItem === expandedBox}/>
                  )
                })} 

          </div>
          </div>  : null }

          {view === "favorites" ? <Favorites products={products}/> : null}
            
          {/* Other Related Product Items  */}
          <RelatedProducts products={randomProducts}/>
          <PaginationId id='' products={randomProducts}/>
          
        </div>
        </div>
      </div>
   </>
   );
 };


export default OrderPage;


export const getServerSideProps: GetServerSideProps = async ({query}) => { 
     
    const page = parseInt(query.page as string, 10) || 1;
    let randomNo: number | undefined;
     
    const response = await fetch(`http://localhost:5001/products?_page=${page}`); 
    const products: ProductType[] = await response.json();
   
    const resBoxItems = await fetch('http://localhost:5001/boxComponents');
    const boxItemsData: BoxComponentType[] = await resBoxItems.json(); 
    

    products.map(() => {
      if (products.length > 6) {
        randomNo = Math.floor(Math.random() * (products.length - 6));
      }
    });
    

    const resRandomProducts = await fetch(`http://localhost:5001/products?_start=${randomNo}&_limit=6`);
    const randomProducts: ProductType[] = await resRandomProducts.json();


    return { 
        props: { 
            products,
            randomProducts,
            boxItemsData,
            }
        }
}