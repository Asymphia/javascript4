'use strict';

const express = require('express');
const app = express();

// define endpoint for exercise 1 here
app.get('/math/circle/:r', (req, res) => {
    const r = parseFloat(req.params.r)

    const area = Math.PI * r * r
    const circumference = 2 * Math.PI * r

    res.json({
        area: area,
        circumference: circumference
    })
});

app.get('/math/rectangle/:width/:height', (req, res) => {
    const width = parseFloat(req.params.width)
    const height = parseFloat(req.params.height)

    const area = width * height
    const perimeter = (2 * height) + (2 * width)

    res.json({
        area: area,
        perimeter: perimeter
    })
})

app.get('/math/power/:base/:exponent', (req, res) => {
    const base = parseFloat(req.params.base)
    const exponent = parseFloat(req.params.exponent)

    if (Number.isNaN(base) || Number.isNaN(exponent)) {
        return res.status(400).json({ error: 'Invalid input' });
    }

    const result = Math.pow(base, exponent)

    const response = { result: result }

    if (req.query.root === 'true') {
        response.root = Math.sqrt(base)
    }

    res.json(response)
})

//TODO2


//TODO3


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});