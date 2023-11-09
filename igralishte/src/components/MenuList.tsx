import React, { useContext } from 'react';
import { UserContext } from '@/context/UserContext';
import MenuItem from './MenuItem';
import { DataType } from '@/types/types';

interface Props {
  data: DataType[];
}

const MenuList: React.FC<Props> = ({data}) => {
  // const { data } = useContext(UserContext);


return (
        <div className="container">
        {data.length > 0 ? (
        <div>
            {data.map((product, index) => (
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
                      <a className="dropdown-item">
                        <MenuItem product={item}/>
                      </a>
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