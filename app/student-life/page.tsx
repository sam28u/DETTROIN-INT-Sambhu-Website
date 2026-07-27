import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import Hero from "@/components/school-life/Hero"
import SchoolGallery from "@/components/school-life/SchoolGallery"


const page = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <SchoolGallery/>
        <Footer/>
    </div>
  )
}

export default page