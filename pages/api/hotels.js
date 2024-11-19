// pages/api/hotels.js
import axios from 'axios';

export default async function handler(req, res) {
    const url = process.env.WORLDOTA_API_URL;
    const username = process.env.WORLDOTA_USERNAME;
    const password = process.env.WORLDOTA_PASSWORD;

    try {
        const response = await axios.get(url, {
            auth: {
                username,
                password,
            },
        });
         res.status(200).json(response.data);
    } 
    catch (error) {
        console.error('Error fetching data:', error.message);
        res.status(error.response?.status || 500).json({
            message: 'Failed to fetch hotel data.',
        });
    }
}
