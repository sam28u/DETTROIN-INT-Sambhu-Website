import React from 'react'
import ArticlePage from '../../components/ArticlePage'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const page = () => {
  return (
    <div>
      <Navbar/>
        <ArticlePage/>
        <Footer/>
    </div>
  )
}

export default page