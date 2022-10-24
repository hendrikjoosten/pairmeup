import Link from 'next/link';
import Navbar from '../components/Navbar';

export default function Profiles() {
  return (
    <>
    <Navbar/>
      <h1>First Post</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </>
  );
}