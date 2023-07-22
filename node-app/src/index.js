const express = require('express');  /// hena b3ml import lel package eli esmha express
/// const keyword di cannot be reassigned l2n hydeeny error kda 
/// init app 

// const mongoose = require('mongoose'); 

/// hena b call el mongoose package mn el modules eli 3ndy,, a5ly baly mn eni msbsh
// space bein ' '

const redis = require('redis'); // importing redis package mn el module eli 3ndy

const { Client }= require('pg');

const os = require('os');



const PORT =process.env.PORT || 4000; ///
const app = express(); /// hena 3mlt create new app instance using express framework 
// connect to redis

const REDIS_PORT= 6379;
const REDIS_HOST= 'redis';

const redisClient= redis.createClient({ url: `redis://${REDIS_HOST}:${REDIS_PORT}`});

redisClient.on('error', (err) => console.log('error to connect to redis', err));
redisClient.on('connect', () => console.log('connected to redis'));
redisClient.connect();

// connect to mongo db

// const DB_USER= 'root';
// const DB_PASSWORD= 'example';
// const DB_PORT= 27017;
// const DB_HOST= 'mongo';

// const URI= `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}`;
// mongoose.connect(URI).then(() => console.log('connected to mongodb')).catch((err) >= console.log('failed to connect', err));


const DB_USER= 'root';
const DB_PASSWORD= 'example';
const DB_PORT= 5432;
const DB_HOST= 'postgres';

const URI= `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}`;
const client=new Client({
  connectionString: URI,
});

client
.connect()
.then(() => console.log('connected to postgres-db'))
.catch((err) => console.log('failed to connect',err));




// ay haga value bta3tha string a7otha bein ' '

app.get('/', (req, res) => {
redisClient.set('products','products...');      
res.send('<h1> hello gendy from docker_hub!!!</h1>')}
);
/// hena ana 3mlt est5dam lel root url eli haygely 3n tari2 get request w h3ml response bel message di as html

app.get('/data', async (req, res) => {
    const products= await redisClient.get('products'); 
    console.log(`traffic from ${os.hostname}`);     
    res.send(`<h1> hello gendy!!!</h1> <h2>${products}</h2>`)}
    );


app.listen(PORT, ()=> console.log(`app is up and running on port: ${PORT}`)); /// hena ana b2ool lel app eno
/// y listen 3la port eli medholo + ytl3 log messg eli 3mlha awl ma y run 



