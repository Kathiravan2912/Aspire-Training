const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');

const app = express();
const PORT = 3001;

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Kathir@2912',
    database: 'testing'
});

db.connect(err => {
    if (err) {
        console.error('Database connection failed: ' + err.stack);
        return;
    }
    console.log('Connected to database.');
});

app.use(bodyParser.json());
app.use(express.static('Customers'));


app.post('/save-data/higher', (req, res) => {
    const { name, email } = req.body;
    if (name && email) {
        const query = 'INSERT INTO Account_Holders (name, email) VALUES (?, ?)';
        db.query(query, [name, email], (error, results) => {
            if (error) {
                console.error('Error saving data: ', error);
                res.json({ success: false });
            } else {
                res.json({ success: true });
            }
        });
    } else {
        res.json({ success: false });
    }
});

// Get data for higher employees
app.get('/get-users/higher', (req, res) => {
    db.query('SELECT * FROM Account_Holders', (error, results) => {
        if (error) {
            console.error('Error fetching data: ', error);
            res.json({ success: false, data: [] });
        } else {
            res.json(results);
        }
    });
});

// Save data for normal employees
app.post('/save-data/normal', (req, res) => {
    const { name, email } = req.body;
    if (name && email) {
        const query = 'INSERT INTO Loan_Purchased_Customers (name, email) VALUES (?, ?)';
        db.query(query, [name, email], (error, results) => {
            if (error) {
                console.error('Error saving data: ', error);
                res.json({ success: false });
            } else {
                res.json({ success: true });
            }
        });
    } else {
        res.json({ success: false });
    }
});

// Get data for normal employees
app.get('/get-users/normal', (req, res) => {
    db.query('SELECT * FROM Loan_Purchased_Customers', (error, results) => {
        if (error) {
            console.error('Error fetching data: ', error);
            res.json({ success: false, data: [] });
        } else {
            res.json(results);
        }
    });
});

// Save data for non-tech employees
app.post('/save-data/nonTech', (req, res) => {
    const { name, email } = req.body;
    if (name && email) {
        const query = 'INSERT INTO Saving_Account_Holders (name, email) VALUES (?, ?)';
        db.query(query, [name, email], (error, results) => {
            if (error) {
                console.error('Error saving data: ', error);
                res.json({ success: false });
            } else {
                res.json({ success: true });
            }
        });
    } else {
        res.json({ success: false });
    }
});

// Get data for non-tech employees
app.get('/get-users/nonTech', (req, res) => {
    db.query('SELECT * FROM Saving_Account_Holders', (error, results) => {
        if (error) {
            console.error('Error fetching data: ', error);
            res.json({ success: false, data: [] });
        } else {
            res.json(results);
        }
    });
});

// Update data for higher employees
app.put('/update-user/higher/:id', (req, res) => {
    const { id } = req.params;
    const { name, email } = req.body;
    const query = 'UPDATE Account_Holders SET name = ?, email = ? WHERE id = ?';
    db.query(query, [name, email, id], (error, results) => {
        if (error) {
            console.error('Error updating data: ', error);
            res.json({ success: false });
        } else {
            res.json({ success: true });
        }
    });
});

// Update data for normal employees
app.put('/update-user/normal/:id', (req, res) => {
    const { id } = req.params;
    const { name, email } = req.body;
    const query = 'UPDATE Loan_Purchased_Customers SET name = ?, email = ? WHERE id = ?';
    db.query(query, [name, email, id], (error, results) => {
        if (error) {
            console.error('Error updating data: ', error);
            res.json({ success: false });
        } else {
            res.json({ success: true });
        }
    });
});

// Update data for non-tech employees
app.put('/update-user/nonTech/:id', (req, res) => {
    const { id } = req.params;
    const { name, email } = req.body;
    const query = 'UPDATE Saving_Account_Holders SET name = ?, email = ? WHERE id = ?';
    db.query(query, [name, email, id], (error, results) => {
        if (error) {
            console.error('Error updating data: ', error);
            res.json({ success: false });
        } else {
            res.json({ success: true });
        }
    });
});

// Delete data for higher employees
app.delete('/delete-user/higher/:id', (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM Account_Holders WHERE id = ?';
    db.query(query, [id], (error, results) => {
        if (error) {
            console.error('Error deleting data: ', error);
            res.json({ success: false });
        } else {
            res.json({ success: true });
        }
    });
});

// Delete data for normal employees
app.delete('/delete-user/normal/:id', (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM Loan_Purchased_Customers WHERE id = ?';
    db.query(query, [id], (error, results) => {
        if (error) {
            console.error('Error deleting data: ', error);
            res.json({ success: false });
        } else {
            res.json({ success: true });
        }
    });
});

// Delete data for non-tech employees
app.delete('/delete-user/nonTech/:id', (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM Saving_Account_Holders WHERE id = ?';
    db.query(query, [id], (error, results) => {
        if (error) {
            console.error('Error deleting data: ', error);
            res.json({ success: false });
        } else {
            res.json({ success: true });
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});