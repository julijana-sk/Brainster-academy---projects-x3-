import { GetStaticProps, NextPage } from 'next'
import Banner from '../components/Banner';
import { VintageClothes } from '@/types/types';
import AnnouncementBar from '@/components/AnnouncementBar';
import Carousel from '@/components/Carousel';

interface Props {
  vintageClothes: VintageClothes[]
}

const Home: NextPage<Props> = ({vintageClothes}) => {
  
  return (
      <div className='banner-bcg'>
        <AnnouncementBar />      
          <Banner classOfPicture='banner-picture1' offset={"offset-1 col-11"} imageBanner='../pictures/banner.png' bgColor='btn-pink-circle btn-circle1' img="../pictures/icons/sparks-elements-rose.png" title='Valentines gal Kолекција' description='Погледни ги свежите љубовни парчиња'>  
            <div className='banner-span'>
              <img className="img1" src="../pictures/icons/Star-big.png" alt="golden star" />
              <span>Ново</span><img className="img2" src="../pictures/icons/Star-small.png" alt="golden star mini" />
            </div>
          </Banner>
          <Carousel vintageClothes={vintageClothes}/>
          <Banner classOfPicture='banner-picture2' offset={"col-11"} imageBanner='../pictures/product-banner.png' bgColor='btn-pink-circle btn-circle2' img="../pictures/icons/sparks-elements-rose.png" title='Козметика & аксесоари' description='Погледни ги свежите љубовни парчиња'/>
          <div className='relative'>
            <img src="../pictures/Rectangle-gift-banner.png" alt="star" className='rectangle-gift-banner'/>
            <img src="../pictures/icons/Star.png" alt="star" className='star-banner' />
          <Banner classOfPicture='gift-banner' offset={"offset-1 col-11"} imageBanner='../pictures/gift-banner.png' bgColor='btn-white-circle btn-circle1' img="../pictures/icons/sparks-elements.png" title='GIFT CARDS' description='Избери уникатен подарок за твоите најблиски со нашиот избор на ultra fancy картички за подарок.'/>  
          </div>
      </div>
  );
}

export default Home;

export const getStaticProps: GetStaticProps = async () => {

const resProductClothes = await fetch("http://localhost:5001/vintageClothes");
const vintageClothes: VintageClothes[] = await resProductClothes.json();


 return {
    props: {
      vintageClothes
    },
 };
}