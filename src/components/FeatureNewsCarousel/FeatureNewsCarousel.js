import React, { useEffect, useRef, useState } from 'react'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import cardImage from '../../../public/assets/images/post-news-thumb-2.png'
import ad from '../../../public/assets/images/ad/ad-2.jpg'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


// Import Swiper styles
import 'swiper/css';
import Image from 'next/image';


const Card = ({ src, description }) => {
    return (
        <div className=" card">
            <div className="image-container">
                <Image src={cardImage} alt="Image" className='imageFullWidthWithTrans' />
                <span className="tag">Technology</span>
            </div>
            <div className="description fw-bolder"><p >{description}</p></div>

        </div>
    );
};
export default function FeatureNewsCarousel() {
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
        { id: 1, imageUrl: 'image-url-1.jpg', description: '1The worried doctors stood together after their rounds, weighing the risks. ' },
        { id: 2, imageUrl: 'image-url-2.jpg', description: '2The worried doctors stood together after their rounds, weighing the risks. ' },
        { id: 3, imageUrl: 'image-url-2.jpg', description: '3The worried doctors stood together after their rounds, weighing the risks. ' },
        { id: 4, imageUrl: 'image-url-2.jpg', description: '4The worried doctors stood together after their rounds, weighing the risks. ' },
        { id: 5, imageUrl: 'image-url-2.jpg', description: '5The worried doctors stood together after their rounds, weighing the risks. ' },
        { id: 6, imageUrl: 'image-url-2.jpg', description: '6The worried doctors stood together after their rounds, weighing the risks. ' },
        // ... Add more image data objects
      ]);
    //   const [slides, setSlides] = useState([]);
    
    //   useEffect(() => {
    //     // Function to chunk the imageData array into groups of four
    //     const chunkArray = (arr, chunkSize) => {
    //       const chunkedArr = [];
    //       for (let i = 0; i < arr.length; i += chunkSize) {
    //         chunkedArr.push(arr.slice(i, i + chunkSize));
    //       }
    //       return chunkedArr;
    //     };
    
    //     const chunkedSlides = chunkArray(imageData, 3); // Chunk the imageData array into groups of four
    //     setSlides(chunkedSlides); // Set the slides state with the chunked data
    //   }, [imageData]);
    return (
        //     <div >
        //     {/* Custom navigation buttons */}

        //     <div className='pb-4'>
        //        <div className='d-flex justify-content-between p-2'>
        //             <h2 className='' style={{backgroundColor:'  '}}>Feature News</h2>
        //         <div className=''>
        //             {/* {!disablePrev && ( */}
        //                 <button className='bg-transparent border-1 outline-0' onClick={handlePrev}>
        //               <i class="bi bi-caret-left-fill"></i>
        //                 </button>
        //             {/* )} */}
        //             {/* {!disableNext && ( */}
        //                 <button className='bg-transparent border-1 outline-0 ' onClick={handleNext}>
        //             <i class="bi bi-caret-right-fill"></i>
        //                 </button>
        //           {/* )} */}
        //        </div>
        //     </div>
        //     </div>
        //         <Swiper
        //             onSlideChange={handleSlideChange}
        //             onReachEnd={() => setDisableNext(true)}
        //             ref={swiperRef}
        //             spaceBetween={0}
        //             slidesPerView={3}
        //             autoplay={{
        //                 delay: 2500,
        //                 disableOnInteraction: false,
        //             }}
        //             navigation={false}
        //         >
        //             <SwiperSlide>
        //                 <div>
        //                     <div className='position-relative '>

        //                         <Image className='position-absolute ' width={500} height={'100%'} src={cardImage} style={{objectFit:'contain'}} alt='feature image' />
        //                         <h1 className='position-absolute top-0 left-0'>Technology</h1>
        //                         </div>


        //                 </div>
        //             </SwiperSlide>
        //             <SwiperSlide>
        //                 slide 2
        //             </SwiperSlide>
        //             <SwiperSlide>
        //                 slide 3
        //             </SwiperSlide>


        //         </Swiper>



        // </div>
        <div className="container mt-4">

            <div className="row">

                {/* First column */}
                <div className="col-md-8">
                    <div className='d-flex justify-content-between'>
                        <h3>Featured</h3>
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
                    <div className="container row">
                        <Swiper
                            onSlideChange={handleSlideChange}
                            onReachEnd={() => setDisableNext(true)}
                            ref={swiperRef}
                            spaceBetween={40}
                          
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                             breakpoints={{
                        640: {
                          slidesPerView: 1,
                          spaceBetween: 15,
                        },
                        768: {
                          slidesPerView: 2,
                          spaceBetween: 30,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                          }
                      }}
                            navigation={false}
                        >
                              {imageData.map((slide, index) => (
                            <SwiperSlide key={''}>
                              
                        
                                    
                                        <Card
                                            src={cardImage} // Replace with your image path
                                            description={slide.description}
                                        />
                          
                     
                           
                            </SwiperSlide>
                              ))}
                        </Swiper>
                    </div>
                </div>
                {/* Second column */}
                <div className="position-relative container col-md-4">
                    <Image src={ad} alt="ad" width={600} height={400} className='imageFullWidth' />
                </div>
            </div>
        </div>
    )
}
