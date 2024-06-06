// javascript

const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());
const companyProfile = {
 name: "Kos Mbah",
 description: "Sedyo JAYA JAYA JAYA",
 services: ["Menyebarkan kebaikan", "Menyebarkan kesehatan"]
};
app.get('/', (req, res) => {
 res.send('Welcome to Company Profile API');
});
app.get('/profile', (req, res) => {
 res.json(companyProfile);
});
app.listen(port, () => {
 console.log(`Server is running on http://localhost:${port}`);
});