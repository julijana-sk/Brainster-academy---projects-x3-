import { ProductType } from '@/types/types';
import React from 'react'
import ProductItem from './ProductItem';

interface Props {
    products: ProductType[];
}
const Favorites: React.FC<Props> = ({products}) => {
    
  return (
    <div className="container-fluid my-5">
           <div className="row d-flex flex-column justify-content-center">
             <div className="col-11 mb-5"> 
                  {products?.map((product) => {
                    return (
                        <ProductItem key={product.id} {...product} />
                    )
                })}
             </div> 
        </div>
     </div>
  )
}

export default Favorites