import Head from 'next/head'
import { NextPage } from 'next'
import Banner from '../components/Banner';
import PageTitle from '../components/PageTitle';

// interface Props {
//   bannerData: BannerType,
//   featuredProductData: ProductType[],
//   featuredBlogsData: BlogType[],
// }

const Home: NextPage = () => {


  return (
    <div>
      <Head>
        <PageTitle title="HOMEPAGE" />  
      </Head>
        <Banner />  
    </div>
  )
}

export default Home;


// export const getStaticProps: GetStaticProps = async () => {

//  const resBanner = await fetch("http://localhost:5001/banner_content");
//  const bannerData: BannerType= await resBanner.json();

//  const resFeaturedProduct = await fetch("http://localhost:5001/products/?_limit=4");
//  const featuredProductData: ProductType[] = await resFeaturedProduct.json();

//  const resFeaturedBlogs = await fetch("http://localhost:5001/blogs/?_limit=3");
//  const featuredBlogsData: BlogType[] = await resFeaturedBlogs.json();

//  return {
//     props: {
//       bannerData,
//       featuredProductData,
//       featuredBlogsData,
//     },
//  };
// };