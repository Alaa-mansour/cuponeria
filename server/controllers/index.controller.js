const db = require("../config/db");

const getShops = async(req, res) => {
    const response = await db.query('SELECT * FROM shops');
    res.status(200).json(response.rows);
}


const getMalls = async(req, res) => {
    const response = await db.query('SELECT * FROM malls');
    res.status(200).json(response.rows);
}

module.exports = {
    getShops,
    getMalls
}