import { pool } from '../modules/pool-connection.js';

export { getCategories, getCategory };

const getCategories = (req, res) => {
    try {
        pool.query('SELECT * FROM category', (err, data) => {
            try {
                return res.status(200).json(data);
            } catch (err) { throw err }
        });
    } catch (err) { throw err }
}

const getCategory = (req, res) => {
    try {
        const { id } = req.params;
        pool.query('SELECT * FROM category WHERE id = ?', [id], (err, data) => {
            try {
                return res.status(200).json(data);
            } catch (err) { throw err }
        });
    } catch (err) { throw err }
}
