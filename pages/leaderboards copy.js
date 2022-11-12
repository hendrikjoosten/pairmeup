import Link from 'next/link';
import Navbar from '../components/Navbar';

async function getCurrentTime() {
  const result_variable = await fetch(
      'http://worldtimeapi.org/api/timezone/Europe/Berlin',{
          cache: "no-store",
      },
  );
  return await result_variable.json();;   
}

export default async function Leaderboards() {
  const variable_t = await getCurrentTime();
  return (
    <>
    <Navbar/>
      <h1>First Post</h1>
      <h2><Link href="/">Back to home</Link></h2>
      {variable_t.map(t => <p>{t.datetime}</p>)}
    </>
  );
}





