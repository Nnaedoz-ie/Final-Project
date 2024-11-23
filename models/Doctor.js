const db = require('../config');

// Create Doctor Model
const Doctor = {
    create: (doctorData, callback) => {
        const { user_id, specialization, availability } = doctorData;

        const sql = 'INSERT INTO doctors SET ?';
        const doctor = { user_id, specialization, availability };

        db.query(sql, doctor, (err, result) => {
            if (err) throw err;
            callback(result);
        });
    },

    findByUserId: (userId, callback) => {
        const sql = 'SELECT * FROM doctors WHERE user_id = ?';

        db.query(sql, [userId], (err, result) => {
            if (err) throw err;
            callback(result[0]);
        });
    },

    updateAvailability: (userId, availability, callback) => {
        const sql = 'UPDATE doctors SET availability = ? WHERE user_id = ?';

        db.query(sql, [availability, userId], (err, result) => {
            if (err) throw err;
            callback(result);
        });
    },

    getAllDoctors: (callback) => {
        const sql = 'SELECT users.name, doctors.specialization, doctors.availability FROM doctors JOIN users ON doctors.user_id = users.id';

        db.query(sql, (err, results) => {
            if (err) throw err;
            callback(results);
        });
    }
};

module.exports = Doctor;
