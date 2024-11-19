import Head from "next/head";
import Image from "next/image";
import localFont from "next/font/local";
import styles from "@/styles/Home.module.css";
import { useEffect, useState } from 'react';
import axios from 'axios';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {

  const [hotels, setHotels] = useState([]);
  const [error, setError] = useState(null);

  async function fetchHotels() {
    try {
      const response = await fetch('/api/hotels');
        if (!response.ok) throw new Error('Failed to fetch data');
        const data = await response.json();
        setHotels(data);
        console.log("data=>",data)
        

    } catch (err) {
        setError(err.message);
    }
}

// console.log("hotels from outside=>",hotels.data.beddings)

  useEffect(() => {
    fetchHotels();
}, []);

if (error) return <div>Error: {error}</div>;
// if (!hotels.length) return <div>Loading...</div>;

  return (
    <div>
            <h1>Beds</h1>
            <ul>
              
                { hotels.data && hotels.data.beddings.map((hotel, index) => (
                    <li key={index}>{hotel.name}</li>
                ))}
            </ul>
            <h1>meals</h1>
            <ul>
              
                { hotels.data && hotels.data.meals.map((hotel, index) => (
                    <li key={index}>{hotel.name}</li>
                ))}
            </ul>
            <h1> room_amenities </h1>
            <ul>
              
                { hotels.data && hotels.data.room_amenities.map((hotel, index) => (
                    <li key={index}>{hotel.name}</li>
                ))}
            </ul>
        </div>
  );
}
