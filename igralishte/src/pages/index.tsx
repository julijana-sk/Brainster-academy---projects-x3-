import { GetStaticProps, NextPage } from 'next'
import Banner from '../components/Banner';
import { DataType } from '@/types/types';
import Header from '@/components/Header';
// import MenuList from '@/components/MenuList';

interface Props {
  data: DataType[],
}

const Home: NextPage<Props> = ({data}) => {


  return (
    <div>
        <Banner /> 
        {/* <MenuList data={data}/> */}
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