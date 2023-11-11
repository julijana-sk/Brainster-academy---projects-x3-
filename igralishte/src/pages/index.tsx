import { GetStaticProps, NextPage } from 'next'
import Banner from '../components/Banner';
import { DataType } from '@/types/types';
import NewArrivals from '@/components/NewArrivals';
import AnnouncementBar from '@/components/AnnouncementBar';


interface Props {
  data: DataType[],
}

const Home: NextPage<Props> = ({data}) => {


  return (
      <div>
        <AnnouncementBar />        
          <Banner>
            <NewArrivals bgColor='btn-pink-circle' title='Valentines gal Kолекција' description='Погледни ги свежите љубовни парчиња'>
            <div className='banner-span'>
              <img className="img1-span" src="../pictures/icons/gold-star.png" alt="golden star" />
              <span>Ново</span><img className="img2-span" src="../pictures/icons/gold-star-small.png" alt="golden star mini" />
            </div>
            </NewArrivals>
          </Banner>

      </div>
  );
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