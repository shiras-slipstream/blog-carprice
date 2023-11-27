import React from 'react'
import cardImage from '../../../public/assets/images/post-news-thumb-2.png'
import Image from 'next/image'
import Link from 'next/link'

export default function BusinessNews() {
  return (
<div className='container mt-3'>
      <h2>Business News</h2>
      <div className="row">

        {/* First column */}
        <div className="col-lg-8">
          <div className="row">
            <div className="col-12 mb-3">
              <div className="card">
                <div className="card-body d-flex gap-3">
                  <div className="image-container">
                           <Image src={cardImage} alt="business image" width={150} height={150} />
                  </div>
                  <div>
                    <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h5>
                    <div className='d-flex justify-content-between'>
                      <span>April 26, 2020</span>
                      <div>
                        <button>1</button>
                        <button>2</button>
                      </div>
                     
                    </div>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam sunt placeat quasi magni quae quidem.</p>
                    <Link href="">LEARN MORE</Link>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

    {/* second column */}
        <div className="col-lg-4">
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-body">
             
                  Second Column Content
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    
    </div>
  )
}
