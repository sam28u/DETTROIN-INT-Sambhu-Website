import AcademicFramework from "@/components/Home/AcademicFramework";
import AcademicStages from "@/components/Home/AcademicStages";
import Awards from "@/components/Home/Awards";
import ContactNewsletter from "@/components/Home/ContactNewsletter";
import Faculty from "@/components/Home/Faculty";
import FAQ from "@/components/Home/FAQ";
import Footer from "@/components/Footer";
import HeroSection from "@/components/Home/HeroSection";
import Navbar from "@/components/Navbar";
import Testimonials from "@/components/Home/Testimonials";
import UpcomingEvents from "@/components/Home/UpcomingEvents";
import ValueBasedEducation from "@/components/Home/ValueBasedEducation";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <Navbar/>
    <HeroSection/>
    <AcademicStages/>
    <Awards/>
    <Faculty/>
    <UpcomingEvents/>
    <AcademicFramework/>
    <ValueBasedEducation/>
    <Testimonials/>
    <FAQ/>
    <ContactNewsletter/>
    <Footer/>
    </>
  );
}
