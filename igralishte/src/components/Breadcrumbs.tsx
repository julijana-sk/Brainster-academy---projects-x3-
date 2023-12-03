import Link from 'next/link';
import React from 'react'


interface Props {
    links: string[];
    // currentPage: string;
}
const Breadcrumbs: React.FC<Props> = ({links}) => {

  return (
     <div className="col-11 breadcrumbs">
            {links.map((link, index) => (
                <React.Fragment key={link}>
                    <Link href={link}>
                        <p>{link}</p>
                    </Link>
                    {index < links.length - 1 && <img src='../pictures/icons/arrow-small.png' className='p-1' alt='..'/>}
                </React.Fragment>
            ))}
            {/* <span>{currentPage}</span> */}
        </div>
    
  );
}

export default Breadcrumbs;


