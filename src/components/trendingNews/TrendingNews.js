import Image from 'next/image'
import React from 'react'
import cardImage from '../../../public/assets/images/post-news-thumb-2.png'
import Carousel from '../Carousel/Carousel'



export default function TrendingNews() {

  return (
    // <div className='p-5' style={{ backgroundColor: 'lightgray' }}>
    //   <div class="container d-flex justify-content-between  gap-2" >
    //     <div class=" rounded" style={{ backgroundColor: 'white' }}>
    //       <div className='p-5'>
    //         <div className='d-flex gap-4 flex-fill' >
    //           <div className='mb-4 '>
    //             <h4 >Trending News</h4>
    //             <Image src={cardImage} className='imageFullWidth' />
    //             <h5 className='mt-3'>
    //             There may be no consoles in the future ea exec says
    //             </h5>
    //             <p>
    //             The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy shower…
    //             </p>
    //             <span>TECHNOLOGY</span>
    //             <span className='mx-4'>|</span>
    //             <span>April 26, 2020</span>
    //           </div>
    //           <div className='flex-fill'>
    //             <div className='carouselWidth'>
    //               <Carousel  />
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     <div class="carouselRight p-3 bd-highlight rounded pt-5" style={{ backgroundColor: 'white' }}>
    //     <div className='flex-fill'>
    //             <div className='carouselWidth'>
    //               <Carousel  />
    //             </div>
    //           </div>
    //     </div>
    //   </div>
    // </div>

<div className="container mt-4 ">
      <div className="row">

        <div className="col-lg-8">
          <div className="row">
            
            <div className="col-md-6">
   
              <div className="border rounded p-3 mb-3">
              <div className='mb-4 '>
                 <h4 >Trending News</h4>
                 <div className=''><Image src={cardImage} className='imageFullWidth' /></div>
                 <h5 className='mt-3'>
                 There may be no consoles in the future ea exec says
                 </h5>
                 <p>
                 The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy shower…
                 </p>
                 <span>TECHNOLOGY</span>
                 <span className='mx-4'>|</span>
                 <span>April 26, 2020</span>
               </div>
              </div>
            </div>
         
            <div className="col-md-6">
   
              <div className="border rounded p-3 mb-3">
              <div className='carouselWidth'>
                   <Carousel  />
                 </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4">
      
          <div className="border  p-3 mb-3">
          <div className='carouselWidth'>
                   <Carousel  />
                 </div>
          </div>
        </div>
      </div>
    </div>







  )
}
