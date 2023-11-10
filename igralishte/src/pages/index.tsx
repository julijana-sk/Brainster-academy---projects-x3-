import { GetStaticProps, NextPage } from 'next'
import Banner from '../components/Banner';
import { Category, DataType, SubCategory } from '@/types/types';
// import CategoryItems from '@/components/CategoryItems';
import Header from '@/components/Header';

interface Props {
  data: DataType[],
}

const Home: NextPage<Props> = ({data}) => {


  return (
    <div>
        <Banner /> 
        {/* <Header data={data}/> */}
       
        {/* <CategoryItems data={data} category={item} subcategory={item.category}/> */}
        
    </div>
  )
}

export default Home;

export const getStaticProps: GetStaticProps = async () => {

 const resData = await fetch("http://localhost:5001/data");
 const data: DataType[] = await resData.json();

 return {
    props: {
      data,
    },
 };
}