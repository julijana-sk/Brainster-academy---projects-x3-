import { ProductType } from "@/types/types"; import Link from "next/link"; import { useEffect, useState } from "react";

interface Props { products: ProductType[]; }

const Pagination: React.FC = ({ products }) => { 
    
    const [displayAllPages, setDisplayAllPages] = useState(false); 
    const [currentPage, setCurrentPage] = useState(1); 
    const [productsForPage, setProductsForPage] = useState([]); 
    const totalPages = Math.ceil(products.length / 10);

useEffect(() => { const indexOfLastProduct = currentPage * 10; const indexOfFirstProduct = indexOfLastProduct - 10; const currentProducts = products.slice( indexOfFirstProduct, indexOfLastProduct );

setProductsForPage(currentProducts); }, [currentPage]);

const handleArrowClick = (direction: string, clickedPage: number) => { 
    if (direction === "previous") { setCurrentPage((prevPage) => prevPage - 1); 
    } else { setCurrentPage((prevPage) => prevPage + 1); 
    } 
    handleClick(clickedPage);
 };

const handleClick = (pageNumber: number) => { if (pageNumber === currentPage) { return; } setCurrentPage(pageNumber); };

const handleDotsClick = () => { setDisplayAllPages((prevState) => !prevState); };

const displayPageNumbers = () => { let pageNumbers = []; for (let i = 1; i <= totalPages; i++) { if (currentPage === i) { pageNumbers.push( {i} ); } else { if (i === 1 || i === 2 || i === 3 || i === 4) { pageNumbers.push( handleClick(i)}> {i} ); } else if (i === totalPages) { pageNumbers.push( handleClick(i)}> ••• {i} ); } } } return pageNumbers; };

return (
{displayPageNumbers()}
);

export default Pagination;