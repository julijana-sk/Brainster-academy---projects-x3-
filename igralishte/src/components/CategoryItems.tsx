import React, { useContext } from 'react';
import { Category, DataType, SubCategory } from '@/types/types';
import CategorySubItem from './CategorySubItem';
import { UserContext } from '@/context/UserContext';

interface Props {
  category: string
  // subcategory: SubCategory
  // data: DataType[]
}


const CategoryItems: React.FC<Props> = ({ category }) => {
  
  return (
    
      <div>
        {category}
    </div>
  )
};

export default CategoryItems;