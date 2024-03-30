import styles from '../page.module.css';
import Link from 'next/link';
import useFetch from '../useFetch';

function CarList() {

    const { data: cars, isPending, error } = useFetch('http://localhost:3000/cars');


    return (

        <div className={styles.container}>
            <section className={styles.section}>
                <section className={styles.carName}>
                    <h1>Car List</h1>
                </section>
                <section className={styles.container}>
                    <div className={styles.cards}>
                        {cars && cars.map((car, index) => (
                            <div key={index} className={styles.cardWrapper}>
                                <img className={styles.carImg} src={car.photo} alt="" />
                                <div className={styles.cardInfo}>
                                    <h2>Brand: {car.brand}</h2>
                                    <div className={styles.colorWrapper}>
                                        <h4>Color: </h4>
                                        <span className={styles.carColor} style={{ backgroundColor: `${car.color}` }}></span>
                                    </div>
                                    <h4>Year: {car.year}</h4>
                                    <Link href={`/details/${car.id}`}>
                                        <button className={styles.button}>More about</button>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </section>
        </div>
    );
}

export default CarList;
