import Link from 'next/link';
import styles from '../styles/Home.module.css';
import React, { useEffect, useState } from 'react';

export default function Home() {
	const [data, getData] = useState(0);
	useEffect(() => {
		callAPI();
	}, []);

	const callAPI = async () => {
		try {
			const res = await fetch(
				`http://worldtimeapi.org/api/timezone/Europe/Berlin`
			);
			const data = await res.json();
			console.log(data);
			console.log(data.datetime);
			getData(data);
		} catch (err) {
			console.log(err);
		}
	};
	return (
		<div className={styles.container}>
			<main className={styles.main}>
				<button onClick={callAPI}>Make API Call</button>
				{data && <p>{data.datetime}</p>}
			</main>
			
		</div>
	);
}