const db = require('../db/connection');
const questions = require('../questions');

const department = () => {
    const sql = `SELECT * FROM department;`;
    db.query(sql, (err, rows) => {
        if (err) throw err;
        console.table(rows);
    });
}
//questions();

module.exports = department;