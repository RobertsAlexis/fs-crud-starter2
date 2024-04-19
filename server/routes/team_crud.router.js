const express = require('express');
const pool = require('../modules/pool.js');

const router = express.Router();


// GET /things - - - - - - - Respond with all the things.
router.get('/', (req, res) => {
    console.log('router is online');
    pool.query('SELECT * FROM team_crud')
    .then((dbResult) => {
        res.send(dbResult.rows);
        console.log('checking...')
    }
    )
});

// GET /things/:id - - - - - Respond with one thing.

// POST /things - - - - - -  Create one thing.

// DELETE /things/:id - - -  Delete one thing.

// PUT /things/:id - - - - - Update one thing.


module.exports = router;
