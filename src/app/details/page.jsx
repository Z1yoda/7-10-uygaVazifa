'use client'

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import useFetch from '../useFetch';
import styles from './style.module.css';

function Details() {
    const router = useRouter();
    const { id } = router.query;

    const { data: cars, isPending, error } = useFetch('http://localhost:3000/cars');

    const filteredCar = cars.filter((car) => car.id === id);

    return (
        <section>
            {error && <p>{error}</p>}
            {isPending && <p>Loading cars...</p>}
            {filteredCar && filteredCar.map((car, index) => (
                <div key={index} className={styles.cardWrapper}>
                    <img className={styles.carImg} src={car.photo} alt="" />
                    <div className={styles.cardInfo}>
                        <h2>Brand: {car.brand}</h2>
                        <div className={styles.colorWrapper}>
                            <h4>Color: </h4>
                            <span className={styles.carColor} style={{ backgroundColor: `${car.color}` }}></span>
                        </div>
                        <h4>Year: {car.year}</h4>
                        <h4>Model:{car.model} </h4>
                        <h4>Car body: {car.carbody} </h4>
                        <h4>Price: {car.price}</h4>
                        <Link href={`/}`} passHref>
                            <button className={styles.button}>Back</button>
                        </Link>
                    </div>
                </div>
            ))}
        </section>
    );
}

export default Details;
