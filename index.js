const jsonServer = require("json-server");
require("dotenv").config();
const cors = require("cors");
const path = require("path");

const app = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, "db.json"));
const middlewares = jsonServer.defaults();

app.use(jsonServer.bodyParser);
app.use(cors());
app.use(middlewares);
app.use(router);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`JSON server is running on http://localhost:${PORT}`);
});
