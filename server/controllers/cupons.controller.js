const db = require("../config/db");

const getCupons = async(req, res) => {
    const response = await db.query("SELECT * FROM cupons");
    res.status(200).json(response.rows);
}

const createCupons = async(req, res) => {
    try {
        const { cupon_title,
                start_date,
                end_date,
                description,
                observation,
                mall_id,
                shop_id,
                cupon_photo,
                cupon_type,
                } = req.body;

        const response =
        await db.query('INSERT INTO cupons(title, shop_id, mall_id, start_date, end_date, description, observation, photo) VALUES ($1, $2, $3, $4,$5, $6, $7, $8)',
            [cupon_title,
            shop_id,
            mall_id,
            start_date,
            end_date,
            description,
            observation,
            cupon_photo,
            ])

        console.log("CREATING _ USER", response);

        res.status(200).json({
            message: "User added successfully!",
            body:{
                cupon: {cupon_title, start_date, end_date}
            }
        });
    }
    catch(error) {
        console.log(error);
    }
}

module.exports = {
    getCupons,
    createCupons
}



