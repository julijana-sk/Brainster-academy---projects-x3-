import { GetStaticProps, NextPage } from 'next'
import Banner from '../components/Banner';
import { DataType } from '@/types/types';


interface Props {
  data: DataType[],
}

const Home: NextPage<Props> = ({data}) => {


  return (
    <div>
        <Banner /> 
        {/* <img src="../pictures/icons/gold-star.png" alt="" />
            <span className="text-danger font-weight-bold">Ново</span>
                <img src="../pictures/icons/gold-star-small.png" alt="" /> */}
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