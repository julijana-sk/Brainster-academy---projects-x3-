import React from 'react'
import Link from 'next/link';
import { SubCategory } from '@/types/types';

interface Props {
  subcategory: string
}

const CategorySubItem: React.FC<Props> = ({subcategory}) => {
  
  return (
      <Link href={`/category/${subcategory}`}>
        {/* {subcategory.map((sub, index) => {
          return (
            <p>
            {sub.type}
            </p>
          )
        })} */}
        <p>{subcategory}</p>
      </Link>
  );  
}

export default CategorySubItem;