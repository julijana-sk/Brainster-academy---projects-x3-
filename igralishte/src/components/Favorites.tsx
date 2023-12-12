import { ProductType } from '@/types/types';
import React from 'react'
import ProductItem from './ProductItem';

interface Props {
    products: ProductType[];
    onClick?: () => void;
}
const Favorites: React.FC<Props> = ({products, onClick}) => {
    
  return (
    <div className="container-fluid mb-5">
           <div className="row flex-column">
             <div className="col-11 mr-auto ml-auto"> 
                  {products?.map((product) => {
                    return (
                      <div >
                        <ProductItem key={product.id} {...product} />
                        <div onClick={onClick}  className='btn-delete'>
                          <img src="../../pictures/icons/Basket.png" alt="empty" /> 
                        </div>
                      </div>
                    )
                })}
             </div> 
        </div>
     </div>
  )
}

export default Favorites