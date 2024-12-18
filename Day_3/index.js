const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/contact', (req, res) => {
    res.render('contact', { error: null });
});

app.post('/contact', (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        const error = "All fields are required.";
        return res.render('contact', { error });
    }

    res.render('thank_you', { name, email, message });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
