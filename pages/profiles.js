import Link from 'next/link';
import Navbar from '../components/Navbar';
import useSWR from 'swr';

async function fetcher(...arg) {
  const res = await fetch(...arg);

  return res.json();
}

export default function Profiles() {
  const { data } = useSWR('/api/github', fetcher);
  return (
    <>
    <Navbar/>
    
            <h1>
              <p>
               Github followers
              </p>
              <p>
                {data ? data.followers : "Loading"}</p>
            </h1>
          

    </>
  );
}