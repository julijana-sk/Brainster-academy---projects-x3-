import React, { useEffect, useState } from 'react'
import Head from 'next/head';
import { useRouter } from 'next/router';
import { GetServerSideProps, GetStaticProps, NextPage } from 'next';
import PageTitle from '@/components/PageTitle';
import RelatedProducts from '@/components/RelatedProducts';
import { BoxComponentType, DataType, ProductType } from '@/types/types';
import ProductItem from '@/components/ProductItem';


// interface Props {
//   products: ProductType[];
//   randomProducts: ProductType[];

// }

// const FavoritesPage: NextPage<Props> = ({ products, randomProducts }) => {

//     const [favorites, setFavorites] = useState<ProductType[]>(JSON.parse(localStorage.getItem('favorites') || '[]'));
//     const [addToCardProducts, setAddToCardProducts] = useState<ProductType[]>(JSON.parse(localStorage.getItem('addToCardProducts') || '[]')); 
//     const [currentPage, setCurrentPage] = useState<number>(1);


//     const totalPages = Math.ceil(searchedProductsData.length / 10);

//     const start = (currentPage - 1) * 10;
//     const end = start + 10;
//     const paginationProductsForDisplaying = searchedProductsData.slice(start, end);

//     const handlePageChange = (page: number) => {
//         if (page < 1 || page > totalPages) return;
//         setCurrentPage(page);
//     };

//     const renderPages = () => {
//         return Array.from({ length: totalPages }, (_, index) => (
//               <a
//                 key={index}
//                 className={`flex-c-m how-pagination1 trans-04 m-all-7 pointer font-weight-bold ${
//                   currentPage === index + 1
//                     ? "active-pagination1 text-danger"
//                     : ""
//                 }`}
//                 onClick={() => handlePageChange(index + 1)}>
//                 {index + 1}
//               </a>
//         ));
//     };



    
//     useEffect(() => {
//         const updatedFavoriteProducts = products.filter((prod) => favorites.includes(prod));
//         setFavorites(updatedFavoriteProducts);
//         const updatedAddToCardProducts = products.filter((prod) => addToCardProducts.includes(prod));
//         setAddToCardProducts(updatedAddToCardProducts);
//     }, [favorites, addToCardProducts]);


//   return (
//     <>
//       <Head>
//         <title>Igralishte-Favorites</title>
//         <meta name="description" content="Generated by create next app" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//         <div className="container-fluid my-5">
//           <div className="row d-flex flex-column justify-content-center">
//             <div className="col-11 mb-5">
//                 {/* renderiraj gi stavenite vo card to shop produkti */}
//                 {favorites.map((product: ProductType) => (
//                 <ProductItem key={product.id} {...product}  />
//                 ))}
//             </div>

//             {/* Other Related Product Items  */}
//             <RelatedProducts products={randomProducts}/>

//             {/* pagination  */}
//             <div className="flex-l-m flex-w w-full p-t-10 m-lr--7" style={{ letterSpacing: "5px" }}>
//                 <button onClick={() => handlePageChange(currentPage - 1)} className='bg-transparent border-0 mr-1'>
//                     {"<"}
//                 </button>
//                 {renderPages()}
//                 <button onClick={() => handlePageChange(currentPage + 1)} className='bg-transparent border-0 ml-1'>
//                     {">"}
//                 </button>
//             </div>

//       </div>
//     </div>
//   </>
//   );
// };


// export default FavoritesPage;




//  export const getServerSideProps: GetServerSideProps = async ({query}) => { 
     
//      const page = parseInt(query.page as string, 10) || 1;
//      let randomNo: number | undefined;
     
//      const response = await fetch(`http://localhost:5001/products?_page=${page}`); 
//      const products: ProductType[] = await response.json();

//     products.map(() => {
//       if (products.length > 6) {
//         randomNo = Math.floor(Math.random() * (products.length - 6));
//       }
//     });
    

//     const resRandomProducts = await fetch(`http://localhost:5001/products?_start=${randomNo}&_limit=6`);
//     const randomProducts: ProductType[] = await resRandomProducts.json();


// return { 
//     props: { 
//         products,
//         randomProducts,
//     },
//     }
//  }