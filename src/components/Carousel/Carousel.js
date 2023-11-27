import React, { useEffect, useRef, useState } from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import sampleImage from '../../../public/assets/images/business-2.jpg'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


// Import Swiper styles
import 'swiper/css';
import Image from 'next/image';



export default function Carousel() {
    const [disablePrev, setDisablePrev] = useState(true);
    const [disableNext, setDisableNext] = useState(false);
    const swiperRef = useRef(null);

    const handleNext = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideNext();
        }
    };

    const handlePrev = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slidePrev();
        }
    };

    const handleSlideChange = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            setDisablePrev(swiperRef.current.swiper.isBeginning);
            setDisableNext(swiperRef.current.swiper.isEnd);
        }
    };
    const [imageData, setImageData] = useState([
        // Array containing your image data (adjust this based on your actual data structure)
        { id: 1, imageUrl: 'image-url-1.jpg', description: 'Miami woman deliver her powerful winds kept help from nuture…' },
        { id: 2, imageUrl: 'image-url-2.jpg', description: 'Lorem ipsum 2' },
        { id: 3, imageUrl: 'image-url-2.jpg', description: 'Lorem ipsum 2' },
        { id: 4, imageUrl: 'image-url-2.jpg', description: 'Lorem ipsum 2' },
        { id: 5, imageUrl: 'image-url-2.jpg', description: 'Lorem ipsum 2' },
        { id: 6, imageUrl: 'image-url-2.jpg', description: 'Lorem ipsum 2' },
        { id: 7, imageUrl: 'image-url-2.jpg', description: 'Lorem ipsum 2' },
        { id: 8, imageUrl: 'image-url-2.jpg', description: 'Lorem ipsum 2' },
        { id: 9, imageUrl: 'image-url-2.jpg', description: 'Lorem ipsum 2' },
        { id: 10, imageUrl: 'image-url-2.jpg', description: 'Lorem ipsum 2' },
        { id: 11, imageUrl: 'image-url-2.jpg', description: 'Lorem ipsum 2' },
        { id: 12, imageUrl: 'image-url-2.jpg', description: 'Lorem ipsum 2' },
        // ... Add more image data objects
      ]);
    
      const [slides, setSlides] = useState([]);
    
      useEffect(() => {
        // Function to chunk the imageData array into groups of four
        const chunkArray = (arr, chunkSize) => {
          const chunkedArr = [];
          for (let i = 0; i < arr.length; i += chunkSize) {
            chunkedArr.push(arr.slice(i, i + chunkSize));
          }
          return chunkedArr;
        };
    
        const chunkedSlides = chunkArray(imageData, 4); // Chunk the imageData array into groups of four
        setSlides(chunkedSlides); // Set the slides state with the chunked data
      }, [imageData]);
    
    return (
        <div >
     
           
            <div >
               <div className='d-flex justify-content-between'>
                    <p></p>
                <div className=' mx-4'>
                    {/* {!disablePrev && ( */}
                        <button className='bg-transparent border-1 outline-0' onClick={handlePrev}>
                      <i class="bi bi-caret-left-fill"></i>
                        </button>
                    {/* )} */}
                    {/* {!disableNext && ( */}
                        <button className='bg-transparent border-1 outline-0 ' onClick={handleNext}>
                    <i class="bi bi-caret-right-fill"></i>
                        </button>
                  {/* )} */}
               </div>
            </div>
                <Swiper
                    onSlideChange={handleSlideChange}
                    onReachEnd={() => setDisableNext(true)}
                    ref={swiperRef}
                    spaceBetween={0}
                    slidesPerView={1}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    navigation={false}
                >
                 {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            {slide.map((item) => (
              <div key={item.id} className='d-flex align-items-center border-dotted gap-2 mb-2 pb-2'>
                <Image src={sampleImage} width={150} height={110} alt={`Slide ${index + 1}`} />
                <div>
                  <p className='fw-bolder'>{item.description}</p>
                  <span className='m-2'>TECHNOLOGY</span>
                  <span className='ml-2'>| April 26, 2020</span>
                </div>
              </div>
            ))}
          </SwiperSlide>
        ))}
                </Swiper>
            </div>

                
        </div>
    )
}
