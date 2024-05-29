const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');

const app = express();
const PORT = 3000;

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

// Middleware to serve static files from the 'Employees' directory
app.use(express.static('Employees'));
app.get('/Employees', (req, res) => {
    res.sendFile(__dirname + '/Employees/index.html');
});

// app.use(bodyParser.json());
// app.use(express.static('Employees/customers.html'));

// app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/Employees/customers.html');
// });
// Save data for higher employees
app.post('/save-data/higher', (req, res) => {
    const { name, email } = req.body;
    if (name && email) {
        const query = 'INSERT INTO higher_employees (name, email) VALUES (?, ?)';
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
    db.query('SELECT * FROM higher_employees', (error, results) => {
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
        const query = 'INSERT INTO normal_employees (name, email) VALUES (?, ?)';
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
    db.query('SELECT * FROM normal_employees', (error, results) => {
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
        const query = 'INSERT INTO non_tech_employees (name, email) VALUES (?, ?)';
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
    db.query('SELECT * FROM non_tech_employees', (error, results) => {
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
    const query = 'UPDATE higher_employees SET name = ?, email = ? WHERE id = ?';
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
    const query = 'UPDATE normal_employees SET name = ?, email = ? WHERE id = ?';
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
    const query = 'UPDATE non_tech_employees SET name = ?, email = ? WHERE id = ?';
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
    const query = 'DELETE FROM higher_employees WHERE id = ?';
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
    const query = 'DELETE FROM normal_employees WHERE id = ?';
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
    const query = 'DELETE FROM non_tech_employees WHERE id = ?';
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