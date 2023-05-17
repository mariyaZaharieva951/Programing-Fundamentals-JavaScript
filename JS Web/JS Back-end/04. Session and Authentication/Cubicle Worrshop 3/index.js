// instalize express app
// setup handlebars
// setup static files
// setup storage middleware
// set route handlers (controller actions)


const express = require('express');
const expressConfig = require('./config/express');
const dataBaseConfig = require('./config/database')
const routesConfig = require('./config/routes')

const storage = require('./middlewares/storage'); 



starts();

async function starts() {

const port = 3000;
const app = express();

expressConfig(app);
await dataBaseConfig(app);
app.use(await storage());
routesConfig(app);



app.listen(port, () => console.log(`Server listening on port ${port}`))

}