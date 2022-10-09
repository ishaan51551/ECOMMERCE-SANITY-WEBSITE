import React from 'react'
import { client } from '../lib/client';
import { Product, FooterBanner, HeroBanner } from '../components'

const Home = ({products,bannerData}) => {
  return (
    <>
      <HeroBanner  heroBanner={bannerData.length && bannerData[0]}/>       {/* herobabber will check if the bannerData has a length and it will start from 0th element */}
         {/* {console.log(bannerData)}             its array with 0 elements */}
      <div className='products-heading'>
        <h2>Beset Selling Products</h2>
        <p>Speakers of many varaities</p>
      </div>
      <div className='products-container'>
        {products?.map((product) => <Product key={product._id} product={product}/>)
        }
      </div>

      <FooterBanner footerBanner={bannerData && bannerData[0]}/>
    </>
  )
}

export const getServerSideProps = async () => { //it is asynchronous function
  const query = '*[_type=="product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type=="banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props:{products,bannerData}
  }
}

export default Home