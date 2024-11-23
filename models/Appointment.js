const db = require('../config');

// Create Appointment Model
const Appointment = {
    create: (appointmentData, callback) => {
        const { patient_id, doctor_id, appointment_date } = appointmentData;

        const sql = 'INSERT INTO appointments SET ?';
        const appointment = { patient_id, doctor_id, appointment_date };

        db.query(sql, appointment, (err, result) => {
            if (err) throw err;
            callback(result);
        });
    },

    findByPatientId: (patientId, callback) => {
        const sql = `
            SELECT appointments.id, appointments.appointment_date, users.name AS doctor_name 
            FROM appointments 
            JOIN users ON appointments.doctor_id = users.id 
            WHERE appointments.patient_id = ?`;

        db.query(sql, [patientId], (err, results) => {
            if (err) throw err;
            callback(results);
        });
    },

    findByDoctorId: (doctorId, callback) => {
        const sql = `
            SELECT appointments.id, appointments.appointment_date, users.name AS patient_name 
            FROM appointments 
            JOIN users ON appointments.patient_id = users.id 
            WHERE appointments.doctor_id = ?`;

        db.query(sql, [doctorId], (err, results) => {
            if (err) throw err;
            callback(results);
        });
    },

    updateAppointment: (appointmentId, newDate, callback) => {
        const sql = 'UPDATE appointments SET appointment_date = ? WHERE id = ?';

        db.query(sql, [newDate, appointmentId], (err, result) => {
            if (err) throw err;
            callback(result);
        });
    },

    deleteAppointment: (appointmentId, callback) => {
        const sql = 'DELETE FROM appointments WHERE id = ?';

        db.query(sql, [appointmentId], (err, result) => {
            if (err) throw err;
            callback(result);
        });
    }
};

module.exports = Appointment;
