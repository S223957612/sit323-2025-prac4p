const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Addition
app.get('/add/:num1/:num2', (req, res) => {
    try {
        const num1 = parseFloat(req.params.num1);
        const num2 = parseFloat(req.params.num2);
        
        if(isNaN(num1)) throw new Error("Invalid number: num1");
        if(isNaN(num2)) throw new Error("Invalid number: num2");
        
        res.json({
            operation: "add",
            num1,
            num2,
            result: num1 + num2
        });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Subtraction
app.get('/subtract/:num1/:num2', (req, res) => {
    try {
        const num1 = parseFloat(req.params.num1);
        const num2 = parseFloat(req.params.num2);
        
        if(isNaN(num1)) throw new Error("Invalid number: num1");
        if(isNaN(num2)) throw new Error("Invalid number: num2");
        
        res.json({
            operation: "subtract",
            num1,
            num2,
            result: num1 - num2
        });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Multiplication
app.get('/multiply/:num1/:num2', (req, res) => {
    try {
        const num1 = parseFloat(req.params.num1);
        const num2 = parseFloat(req.params.num2);
        
        if(isNaN(num1)) throw new Error("Invalid number: num1");
        if(isNaN(num2)) throw new Error("Invalid number: num2");
        
        res.json({
            operation: "multiply",
            num1,
            num2,
            result: num1 * num2
        });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Division 
app.get('/divide/:num1/:num2', (req, res) => {
    try {
        const num1 = parseFloat(req.params.num1);
        const num2 = parseFloat(req.params.num2);
        
        if(isNaN(num1)) throw new Error("Invalid number: num1");
        if(isNaN(num2)) throw new Error("Invalid number: num2");
        if(num2 === 0) throw new Error("Cannot divide by zero");
        
        res.json({
            operation: "divide",
            num1,
            num2,
            result: num1 / num2
        });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Calculator service running on http://localhost:${PORT}`);
});