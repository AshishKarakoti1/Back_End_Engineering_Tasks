const express = require('express');
const app = express();

app.set('view engine', 'ejs');

const userData = {
    Ashish: { age: 21, skills: 'Typing' },
    Daksh: { age: 21, skills: 'Coding' },
    Avikam: { age: 21, skills: 'Sleeping' },
    Devesh: { age: 21, skills: 'Arsenal Fan' }
};

app.get('/profile/:username', (req, res) => {
    const username = req.params.username;
    const user = userData[username];

    if (user) {
        res.render('profile', { username, age: user.age, skills: user.skills });
    } else {
        res.send('User not found');
    }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});