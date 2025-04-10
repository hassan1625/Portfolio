import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Autoplay,FreeMode } from 'swiper/modules';

export default function Projects() {
    const [swiperRef, setSwiperRef] = useState(null);
    const slideImages =[
        {title:"Ethnc", image:"/assets/Ethnc.jpg",alt:"https://ethnc.com/",type:'Shopify'},
        {title:"Images1993", image:"/assets/images1993.jpg",alt:"https://image1993.com/",type:'Shopify'},
        {title:"Outfitters", image:"/assets/outfitter.webp",alt:"https://outfitters.com.pk/",type:'Shopify'},
        {title:"Nuriyaa", image:"/assets/nuriyaa.jpg",alt:"https://www.nuriyaa.com/",type:'Shopify'},
        {title:"Vyntage Horology", image:"/assets/vyntage horology.jpg",alt:"https://vyntage.com/",type:'Shopify'},
        {title:"Maryam N Maria UAE", image:"/assets/maryamnmariauae.jpg",alt:"https://maryumnmariauae.com/",type:'Shopify'},
        {title:"Sparx Mobile", image:"/assets/sparx.jpg",alt:"https://sparx.pk/",type:'Shopify'},
        {title:"Pathner Tires", image:"/assets/panther tires.jpeg",alt:"https://shop.panthertyres.com/",type:'Shopify'},
        {title:"Mobi CMS", image:"/assets/mobi cms.jpg",alt:"",type:'Vue'},
    ]
  return (
      <>
      <div className='project-container'>
        <div className='project-heading text-start'>
            <h5>Case Studies</h5>
            <h2>Projects</h2>
        </div>
        <div className='project-swiper-container'>
            <Swiper
                modules={[Autoplay, FreeMode]}
                slidesPerView={4.2}
                spaceBetween={20}
                freeMode={true} // ✅ Enables smooth scrolling
                loop={true} // ✅ Makes it infinite
                autoplay={{
                    delay: 0, // ✅ No delay, continuous scroll
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true, // ✅ Keeps autoplay even if user interacts
                }}
                speed={2000}
                className="mySwiper"
            >
                {slideImages.map ((slide , index) => (
                    <SwiperSlide className='swiper-slide ' >
                        <div className='project-card pos-relative' >
                            <a className='project-link' href={slide.alt} target="_blank" aria-label={slide.title}>
                                <img className='project-image' src={slide.image} alt={slide.title} />
                                <span className='type-badge'>{slide.type}</span>
                                <p className='project-title'>{slide.title}</p>
                            </a>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
        </div>
    </>
  );
}
