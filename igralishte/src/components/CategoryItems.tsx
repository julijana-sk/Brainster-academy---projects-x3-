import React, { useContext } from 'react';
import { UserContext } from '@/context/UserContext';
import { Category } from '@/types/types';

interface Props {
  category: Category
}


const CategoryItems: React.FC<Props> = ({category}) => {
  
  return (
      <div>
        <h3>{category.category}</h3>
      </div>
  )
};

export default CategoryItems;