import { GetStaticProps, NextPage } from 'next'
import Banner from '../components/Banner';
import { DataType, ProductType, VintageClothes } from '@/types/types';
import AnnouncementBar from '@/components/AnnouncementBar';
import Carousel from '@/components/Carousel';
import ProductItem from '@/components/ProductItem';

interface Props {
  data: DataType[],
  vintageClothes: VintageClothes[]
}

const Home: NextPage<Props> = ({data, vintageClothes}) => {
  
  return (
      <div className='banner-bcg'>
        <AnnouncementBar />      
          <Banner classOfPicture='banner-picture1' imageBanner='../pictures/banner.png' bgColor='btn-pink-circle btn-circle1' img="../pictures/icons/sparks-elements-rose.png" title='Valentines gal Kолекција' description='Погледни ги свежите љубовни парчиња'>  
            <div className='banner-span'>
              <img className="img1" src="../pictures/icons/Star-big.png" alt="golden star" />
              <span>Ново</span><img className="img2" src="../pictures/icons/Star-small.png" alt="golden star mini" />
            </div>
          </Banner>

          <Carousel vintageClothes={vintageClothes}/>

          <Banner classOfPicture='banner-picture2' imageBanner='../pictures/product-banner.png' bgColor='btn-pink-circle btn-circle2' img="../pictures/icons/sparks-elements-rose.png" title='Козметика & аксесоари' description='Погледни ги свежите љубовни парчиња'/>
          
            <img src="../pictures/Rectangle-gift-banner.png" alt="star" className='rectangle-gift-banner'/>
            <img src="../pictures/icons/Star.png" alt="star" className='star-banner' />
          <Banner classOfPicture='gift-banner relative' imageBanner='../pictures/gift-banner.png' bgColor='btn-white-circle btn-circle1' img="../pictures/icons/sparks-elements.png" title='GIFT CARDS' description='Избери уникатен подарок за твоите најблиски со нашиот избор на ultra fancy картички за подарок.'>  
          </Banner>
      </div>
  );
}

export default Home;

export const getStaticProps: GetStaticProps = async () => {

 const resData = await fetch("http://localhost:5001/");
 const data: DataType[] = await resData.json();

const resProductClothes = await fetch("http://localhost:5001/vintageClothes");
 const vintageClothes: VintageClothes[] = await resProductClothes.json();


 return {
    props: {
      data,
      vintageClothes
    },
 };
}