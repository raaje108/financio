const db = require('../config/db');

// Get all shops for a specific user (assuming user ID 1 for now)
exports.getShops = async (req, res) => {
    try {
        const userId = req.user.id; // Hardcoded until auth is implemented
        const [rows] = await db.query('SELECT * FROM shops WHERE user_id = ?', [userId]);
        res.json(rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error retrieving shops' });
    }
};

// Create a new shop
exports.createShop = async (req, res) => {
    try {
        const { shop_name, shop_owner, phone_no, shop_address } = req.body;
        const userId = req.user.id; // Hardcoded until auth is implemented

        const query = `
            INSERT INTO shops (user_id, shop_name, shop_owner, phone_no, shop_address) 
            VALUES (?, ?, ?, ?, ?)
        `;
        const [result] = await db.query(query, [userId, shop_name, shop_owner, phone_no, shop_address]);
        
        res.status(201).json({ message: 'Shop created successfully', shopId: result.insertId });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error creating shop' });
    }
};