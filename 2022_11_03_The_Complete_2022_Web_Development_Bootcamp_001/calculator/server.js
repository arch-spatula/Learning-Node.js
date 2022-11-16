const bodyParser = require('body-parser');
const express = require('express');
const app = express();
app.use(bodyParser.urlencoded({extended: true}))

const port = 3000;

app.get('/bmiCalculator', (req, res) => {
    res.sendFile(__dirname + '/bmiCalculator.html')
});

app.post('/bmiCalculator', (req, res) => {
    const { weight, height } = req.body;
    res.send(`Your BMI is ${(weight / Math.pow(height / 100, 2)).toFixed(2)}`)
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})