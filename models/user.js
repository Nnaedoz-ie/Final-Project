const db = require('../config');
const bcrypt = require('bcryptjs');

// Create User Model
const User = {
    create: async (userData, callback) => {
        const { name, email, password, role } = userData;

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Insert the user data into the database
        const sql = 'INSERT INTO users SET ?';
        const user = { name, email, password: hashedPassword, role };

        db.query(sql, user, (err, result) => {
            if (err) throw err;
            callback(result);
        });
    },

    findByEmail: (email, callback) => {
        const sql = 'SELECT * FROM users WHERE email = ?';

        db.query(sql, [email], (err, result) => {
            if (err) throw err;
            callback(result);
        });
    },

    findById: (id, callback) => {
        const sql = 'SELECT * FROM users WHERE id = ?';

        db.query(sql, [id], (err, result) => {
            if (err) throw err;
            callback(result[0]);
        });
    },

    updateProfile: (id, updatedData, callback) => {
        const { name, email } = updatedData;
        const sql = 'UPDATE users SET name = ?, email = ? WHERE id = ?';

        db.query(sql, [name, email, id], (err, result) => {
            if (err) throw err;
            callback(result);
        });
    },

    deleteUser: (id, callback) => {
        const sql = 'DELETE FROM users WHERE id = ?';

        db.query(sql, [id], (err, result) => {
            if (err) throw err;
            callback(result);
        });
    }
};

module.exports = User;
