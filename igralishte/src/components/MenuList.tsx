import React, { useContext } from 'react';
import MenuItem from './MenuItem';
import Link from 'next/link';
import { UserContext } from '@/context/UserContext';



const MenuList: React.FC = () => {
  const { data } = useContext(UserContext);
//   console.log("MenuList", Object.entries(data))


return (
        <div className="container">
        {data.length > 0 ? (
        <div>
            {Object.entries(data).map((product, index) => (
            <div key={index} className="dropdown w-100 mr-auto ml-auto">
                {product.Products.map((item, itemIndex) => (
                <div key={itemIndex}>
                <button
                    className="btn btn-secondary dropdown-toggle text-white"
                    type="button"
                    data-toggle="dropdown"
                    aria-expanded="false"
                    >
                    {item.type} 
                    </button>
                    <div className="dropdown-menu">
                      <Link href={"/products"} className="dropdown-item">
                        <MenuItem product={item}/>
                      </Link>
                    </div>
                  </div>
                  )
              )}
            </div>
            )
            )}
        </div>
        ) : ( 
        <div>Data not found...</div>
        )}
    </div>
  );
}

export default MenuList;