"use client"

import { useEffect, useState } from 'react';
import CarList from './carList/page.jsx'
import useFetch from './useFetch.jsx';

function Home() {
  const { data: cars, isPending, error } = useFetch('http://localhost:3000/cars');

  return (
    <section>
      {error && <p>{error}</p>}
      {isPending && <p>Loading cars...</p>}
      {cars && <CarList cars={cars} />}
    </section>
  );
};

export default Home;


// useEffect(() => {
//   fetch('http://localhost:3000/cars')
//     .then(response => response.json())
//     .then(data => {
//       console.log(data);
//       setCars(data)
//     });

//   fetch('http://localhost:3000/cars/1')
//     .then(response => response.json())
//     .then(data => {
//       console.log(data);
//       setSelectedCar(data)
//     });
// }, []);


