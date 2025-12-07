
import Head from 'next/head';
import Header from '@/component/header';
import HeroSection from '@/component/herosection'; 
import Introsection from '@/component/introsection';
import Strategy from '@/component/strategies';
import Contact from '@/component/contact';
import Footerend from '@/component/footerend';
import Footer from '@/component/footer';
const HomePage = () => {
  return (
    <>
      
      
      <Header /> 
      
      <main className="bg-black" > 
       
      <HeroSection/>
        <Introsection/>
        <Strategy/>
        <Contact/>
        <Footer/>
        <Footerend/>
       
      </main>
    </>
  );
};

export default HomePage;
