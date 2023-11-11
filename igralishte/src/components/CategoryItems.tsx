import React, { useContext } from 'react';
import { Category, DataType, SubCategory } from '@/types/types';
import CategorySubItem from './CategorySubItem';
import { UserContext } from '@/context/UserContext';

interface Props {
  category: string
}


const CategoryItems: React.FC<Props> = ({ category }) => {
  
  return (
    
      <div>
        {category}
    </div>
  )
};

export default CategoryItems;