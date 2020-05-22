const express = require('express');
const app = express();
const pool = require('./db')

app.use(express.json()) //=> res.body

//ROUTES

//get all users
app.get("/users", async (req, res) => {
    try {
        const allUsers = await pool.query("SELECT * FROM users")

        res.json(allUsers.rows)
    } catch (err) {
        console.error(err.message)
    }
});

//get a user
app.get("/users/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const name = await pool.query("SELECT * FROM users WHERE name_id = $1", [id]);

        res.json(name.rows[0])
    } catch (err) {
        console.error(err.message)
    }
});

//create a user
app.get("/users", async(req, res) => {
    try {
        const { name } = req.body;
        const newUsers = await pool.query("INSERT INTO users (name) VALUES($1) RETURNING *", [name])
        res.json(newUsers.rows[0])
    } catch (err) {
        console.error(err.message)
    }
});

//update a user
app.put("/users/:id", async (req, res) => {
    try {
        const { id } = req.params;//WHERE
        const { name } = req.body;//SET

        const updateUser = await pool.query("UPDATE users SET name = $1 WHERE  name_id = $2",
            [name, id]
        );
        
        res.json("User was updated")
    } catch (err) {
        console.error(err.message)
    }
})

// delete a user
app.delete("/users/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deleteUser = await pool.query("DELETE FROM users WHERE name_id = $1", [id]);

        res.json('User has been Deleted')
    } catch (err) {
        console.error(err.message)
    }
})

app.listen(5000, () => {
    console.log('server is listening on port 5000');
})