const app = require('./app');
const port = 3000;


// Start server
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})