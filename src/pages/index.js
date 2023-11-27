import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar/Navbar'
import TrendingNews from '@/components/trendingNews/TrendingNews'
import Carousel from '@/components/Carousel/Carousel'
import FeatureNewsCarousel from '@/components/FeatureNewsCarousel/FeatureNewsCarousel'
import BusinessNews from '@/components/BusinessNews/BusinessNews'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {


  return (
    <>
 <div className=''>
   <Navbar />
    <TrendingNews />
    <FeatureNewsCarousel />
    <BusinessNews />
 </div>
    </>
  )
}
