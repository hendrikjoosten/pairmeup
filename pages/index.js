import Head from 'next/head';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <div>
      <Head>
      </Head>
      <Navbar/>
      <Hero/> 
    </div>
  );
}
