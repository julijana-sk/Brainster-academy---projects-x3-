import React from 'react';
import { DataType } from '@/types/types';
import MenuItem from './MenuItem';

interface Props {
    data: DataType[],
}

const MenuList: React.FC<Props> = ({ data }) => {

 return (
    <div className="container">
          {data ? (
            <div>

    {data.map((item, index) => {
      return (
        <div key={index} className='dropdown w-100 mr-auto ml-auto'>
            <button className="btn btn-secondary dropdown-toggle text-white" type="button" data-toggle="dropdown" aria-expanded="false">
              {/* {category.map((product, index) => {
                return (
                    <div key={index}>
                    {...product}  
                    </div>
                    );
                })} */}
            </button>
            <div className="dropdown-menu">
                <a className="dropdown-item">
                    {/* <MenuItem /> */}
                    <h2>Hello</h2>
                </a>
            </div>
        </div>
        );
    })}
    </div>
    ) : ( 
              <div>Data not found...</div>
            )}
</div>
);
};

export default MenuList;