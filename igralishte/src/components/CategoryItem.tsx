import Link from 'next/link';
import React from 'react'

interface Props {
  category: string;

}

const CategoryItem: React.FC<Props> = ({category}) => {
      return (
    <div >
      <h3>{category}</h3>
      <div className="dropdown w-100 mr-auto ml-auto">
        <button
          className="btn btn-secondary dropdown-toggle text-white"
          type="button"
          data-toggle="dropdown"
          aria-expanded="false"
          >
            {category}
          </button>
          <div className="dropdown-menu">
            <Link href={`/category/${type}`} className="dropdown-item">
              <p>{category.type}</p>
            </Link>
          </div>
      </div>
    </div>
  );  
}

export default CategoryItem;