import express from 'express';
import axios from "axios";
import winston from "winston";

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
});

const app = express();

app.use(express.json());

app.get('/order', async (req, res) => {
    const orderID = req.query.orderID;
    logger.info(process.env.CUSTOMER_API_HOST);

    try {
        await new Promise(resolve => setTimeout(resolve, 500));

        const {data} = await axios.get(`${process.env.CUSTOMER_API_HOST}/api/customer?customerID=abc1234`);

        res.json({
            orderID,
            orderStatus: 'en camino',
            customer: data
        });
    } catch (error) {
        logger.error(`error with request: ${error}`);
        res.status(500).send('an error occurred while making the API request');
    }
});

const port = 8081;
app.listen(port, () => {
    console.log(`server is running on port: ${port}`);
});