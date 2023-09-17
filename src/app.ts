import express from 'express';
import axios from "axios";

const app = express();

app.use(express.json());

app.get('/order', async (req, res) => {
    const orderID = req.query.orderID;

    try {
        const delay = Math.floor(Math.random() * 1000) + 1000;

        setTimeout(() => {}, delay)

        const {data} = await axios.get(`${process.env.CUSTOMER_API_HOST}/api/customer?customerID=abc1234`);

        res.json({
            orderID,
            orderStatus: 'IN TRANSIT',
            customer: data
        });
    } catch (error) {
        res.status(500).send('an error occurred while making the API request :(');
    }
});

const port = 8081;
app.listen(port, () => {
    console.log(`server is running on port: ${port}`);
});