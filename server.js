const http = require('http')
const app = require('./app')

/* const port = process.env.PORT || 8080 */

const server =  http.createServer()

app.listen(8080, () => {
    console.log("Server is running on port 8080.");
  });

