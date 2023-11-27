import React, { useState } from 'react'
import logo from '../../../public/assets/images/fabicon.png'
import ad from '../../../public/assets/images/ad/ad-1.png'
import Image from 'next/image'

export default function Navbar() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };
  return (
    <>
      <div className='border border-bottom'>
        <div className='container d-flex align-items-center justify-content-between '>
          <span className='bg-danger bg-gradient p-2 px-3 text-white'>Trending</span>
          <div>Top 10 Best Movies of 2018 So far: Great Movies To Watch Now</div>
          <div>Thursday,March 26,2020</div>
          <span>|</span>
          <div className='d-flex align-items-center gap-3'>
            <i class="bi bi-facebook"></i>
            <i class="bi bi-twitter"></i>
            <i class="bi bi-youtube"></i>
            <i class="bi bi-instagram"></i>
          </div>
        </div>
      </div>
      <div className='container p-2 mx-auto '>
        <div className='d-flex align-items-center gap-5'>
          <div className='d-flex align-items-center gap-3'>
            <Image src={logo} width={40} height={40} alt="logo" />
            <h2 className='fw-bolder '>Carservice</h2>
          </div>
          <div>
            <Image src={ad} className="img-fluid" style={{ objectFit: 'contain' }} alt="ad" />
          </div>
        </div>

        {/* links */}

        <nav className='sticky-top'>
          <ul className='navContents'>
            {/* Home Dropdown */}
            <li className="dropdown">
              <a href="#" className='d-flex justify-content-between' >
                <span>Home</span>
                <span>&#9662;</span>
              </a>
              {/* Dropdown menu */}
              <ul className={`dropdown-menu `}>
                {/* Nested Home 1 */}
                <li className="nested-dropdown">
                  <a href="#" className='d-flex justify-content-between'>
                    <span>Home1</span>
                    <span>&#9656;</span>
                  </a>
                  <ul className="nested-dropdown-menu">
                    <li><a href="#">Version 1</a></li>
                    <li><a href="#">Version 2</a></li>
                  </ul>
                </li>
                {/* Home 2 */}
                <li><a href="#">Home2</a></li>
              </ul>
            </li>

            {/* Pages Dropdown */}
            <li className="dropdown">
              <a href="#">Pages &#9662;</a>
              <ul className="dropdown-menu">
                <li><a href="#">About US</a></li>
                <li><a href="#">Archive</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">404</a></li>
              </ul>
            </li>

            {/* Posts Dropdown */}
            <li className="dropdown">
              <a href="#" className='d-flex justify-content-between'>
                <span>Post</span>
                <span>&#9662;</span>
              </a>
              {/* Dropdown menu */}
              <ul className="dropdown-menu">
                {/* Nested General Posts */}
                <li className="nested-dropdown">
                  <a href="#" className='d-flex justify-content-between'>
                    <span>General Posts</span>
                    <span>&#9656;</span>
                  </a>
                  <ul className="nested-dropdown-menu">
                    <li><a href="#">Version 1</a></li>
                    <li><a href="#">Version 2</a></li>
                  </ul>
                </li>
                {/* More nested General Posts */}
                <li className="nested-dropdown">
                  <a href="#" className='d-flex justify-content-between'>
                    <span>General Posts</span>
                    <span>&#9656;</span>
                  </a>
                  <ul className="nested-dropdown-menu">
                    <li><a href="#">Version 1</a></li>
                    <li><a href="#">Version 2</a></li>
                  </ul>
                </li>
              </ul>
            </li>

            {/* Categories Dropdown */}
            <li className="dropdown">
              <a href="#">Categories &#9662;</a>
              <ul className="dropdown-menu">
                <li><a href="#">categories 1</a></li>
                <li><a href="#">categories 2</a></li>
                <li><a href="#">categories 3</a></li>
              </ul>
            </li>

            {/* Without Dropdown */}
            <li><a href="#">World</a></li>
            <li><a href="#">Sports</a></li>
            <li><a href="#">Contact</a></li>
          </ul>

          <div className='date'>Thursday, March 26, 2020</div>
        </nav>

      </div>

    </>

  )
}
