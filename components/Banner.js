import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import Container from './Container';
import 'swiper/css' ;


const Banner = ({ title, content, image, bannerSize, bannerServices, }) => {
  console.log(bannerSize);
  let bgImage = `http://13.38.32.150/wp-content/uploads/${image.mediaDetails.file}`
  const myLoader = () => {
    return `${process.env.NEXT_PUBLIC_WORDPRESS_API_NEXT}/wp-content/uploads/${image.mediaDetails.file}`;
  }
  return (
    <div className={`banner ${bannerSize}`} style={{ backgroundImage: `url(${image?.mediaItemUrl})` }}>
      <Container>
        <div className="banner-content">
          <h1>{title}</h1>
          <p dangerouslySetInnerHTML={{ __html: content }}></p>
        </div>
        <div className="banner-services">
          <Swiper
          breakpoints={{
            640:{
              width: 640,
              slidesPerView: 1,
            },
            768: {
              width: 768,
              slidesPerView: 2,
            },
            1200: {
              width: 1200,
              slidesPerView: 3,
            },
            
          }}
          autoHeight= "true"
          spaceBetween={20}
          >
            {
              bannerServices?.map((service, index) =>
                <SwiperSlide key={index}>
                    <div className="service-content">
                      <h3>{service.title}</h3>
                      <div className="icon" dangerouslySetInnerHTML={{__html: service.icon }}></div>
                      <p>{service.content}</p>
                    </div>
                </SwiperSlide>
              )
            }
          </Swiper>
        </div>
      </Container>
    </div>
  )
}

export default Banner
