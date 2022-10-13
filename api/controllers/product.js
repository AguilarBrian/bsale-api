import { pool } from '../modules/pool-connection.js';

export { getProducts, getProduct };

const getProducts = (req, res) => {
    const { search } = req.query;
    try {
        if (search) {
            pool.query(`SELECT * FROM product WHERE name LIKE '%${search}%'`, (err, data) => {
                try {
                    return res.status(200).json(data);
                } catch (err) { throw err }
            });
        } else {
            pool.query('SELECT * FROM product', (err, data) => {
                try {
                    return res.status(200).json(data);
                } catch (err) { throw err }
            });
        }
    } catch (err) { throw err }
}

const getProduct = (req, res) => {
    try {
        const { id } = req.params;
        pool.query('SELECT * FROM product WHERE id = ?', [id], (err, data) => {
            try {
                return res.status(200).json(data);
            } catch (err) { throw err }
        });
    } catch (err) { throw err }
}
