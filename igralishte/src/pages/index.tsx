import { GetStaticProps, NextPage } from 'next'
import Banner from '../components/Banner';
import AnnouncementBar from '@/components/AnnouncementBar';
import Carousel from '@/components/Carousel';
import { useContext } from 'react';
import { UserContext } from '@/context/UserContext';
import { DataType } from '@/types/types';



interface Props {
  products: DataType["products"]
}

const HomePage: NextPage<Props> = ({products}) => {


  const { user} = useContext(UserContext);


  return (
      <div className='banner-bcg'>
        <AnnouncementBar />      
          <Banner classOfPicture='banner-picture1' offset={"offset-1 col-11"} imageBanner='../pictures/banner.png' bgColor='btn-pink-circle btn-circle1' img="../pictures/icons/sparks-elements-rose.png" title='Valentines gal Kолекција' description='Погледни ги свежите љубовни парчиња'>  
            <div className='banner-span'>
              <img className="img1" src="../pictures/icons/Star-big.png" alt="golden star" />
              <span>Ново</span><img className="img2" src="../pictures/icons/Star-small.png" alt="golden star mini" />
            </div>
          </Banner>
          <Carousel vintageClothes={products.vintageClothes}/>
          <Banner classOfPicture='banner-picture2' offset={"col-11"} imageBanner='../pictures/product-banner.png' bgColor='btn-pink-circle btn-circle2' img="../pictures/icons/sparks-elements-rose.png" title='Козметика & аксесоари' description='Погледни ги свежите љубовни парчиња'/>
          <div className='relative'>
            <img src="../pictures/Rectangle-gift-banner.png" alt="star" className='rectangle-gift-banner'/>
            <img src="../pictures/icons/Star.png" alt="star" className='star-banner' />
          <Banner classOfPicture='gift-banner' offset={"offset-1 col-11"} imageBanner='../pictures/gift-banner.png' bgColor='btn-white-circle btn-circle1' img="../pictures/icons/sparks-elements.png" title='GIFT CARDS' description='Избери уникатен подарок за твоите најблиски со нашиот избор на ultra fancy картички за подарок.'/>  
          </div>
      </div>
  );
}

export default HomePage;



export const getStaticProps: GetStaticProps = async () => {

  const resProducts = await fetch("http://localhost:5001/products");
  const products: DataType["products"] = await resProducts.json();

 return {
    props: {
      products,  
      // {username}
    },
 };
};

