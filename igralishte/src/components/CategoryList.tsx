import React, { useContext } from 'react';
import { UserContext } from '@/context/UserContext';
import Link from 'next/link';
import CategoryItem from './CategoryItem';



const CategoryList: React.FC = () => {
  const { data } = useContext(UserContext);


return (
    <div className="container">
    {data.length > 0 ? (
        <div>
            {data.map((category, index) => {
                return (
                    <CategoryItem key={index} category={category.vintageClothes}/>
                )
            }        
            
            )}
        </div>
    ) : ( 
    <div>Data not found...</div>
    )}
    </div>
  );
}

export default CategoryList;