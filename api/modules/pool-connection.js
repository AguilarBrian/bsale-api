import mysql from 'mysql';
import dotenv from 'dotenv';
dotenv.config();

const config = {
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DB,
};

export { connectionPing, pool };

const pool = mysql.createPool(config);

const connectionPing = () => {
    pool.getConnection((err, connection) => {
        if (err) { throw err; }
        // console.log(`Connected as ID: ${connection.threadId}`);
        connection.ping();
        connection.release();
    });
}
