const express = require('express');
const app = express();
const cors = require('cors');

// Middleware to parse incoming requests with JSON or URL-encoded payloads
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Enable CORS if frontend and backend are on different origins
app.use(cors());

// Handle user registration (this route matches the form action in register.html)
app.post('/register', (req, res) => {
    const { username, email, password } = req.body;

    // Simulate registration logic (e.g., save to the database)
    console.log(`User registered with Username: ${username}, Email: ${email}`);

    // Send response (you can replace this with a redirect or response page)
    res.send('Registration successful!');
});

// Handle root URL (optional if needed)
app.get('/', (req, res) => {
    res.send('Welcome to the TeleMed Application!');
});

// Set the server to listen on port 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
