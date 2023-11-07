import { GetStaticProps, NextPage } from 'next'
import Banner from '../components/Banner';
import { ProductType } from '@/types/types';
import MenuDropdowns from '@/components/MenuList';

interface Props {
  products: ProductType[],
}

const Home: NextPage<Props> = ({products}) => {


  return (
    <div>
        <Banner />  
        {/* <ProductsList /> */}
        <MenuDropdowns products={products}/>

    </div>
  )
}

export default Home;

export const getStaticProps: GetStaticProps = async () => {

 const resProduct = await fetch("http://localhost:5001/products");
 const products: ProductType[] = await resProduct.json();

 return {
    props: {
      products,
    },
 };
}