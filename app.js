const express = require('express');
const app = express();
const path = require("path");
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const server_conf = require("./configs/server.json")

global.baseDir = path.resolve(__dirname) + "\\";

const { init } = require("./methods/database/init")
const { UserLogin } = require("./methods/database/user")
const { GetCoockiesDataByName } = require("./methods/cookies");
const { log } = require('console');


app.set('trust proxy', true)
app.set("view engine", "ejs");
app.use(express.static(path.join(global.baseDir, "public")));
console.log('global.baseDir :>> ', global.baseDir);
app.use(cookieParser());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ 
    extended: false 
}));

init()
    .catch((error) => {
        console.error('Error seeding data:', error);
    });

app.get('/', (req, res) => {
    res.render('index')
})

app.post("/user/login", async (req, res) => {
    let cookie = GetCoockiesDataByName(req, "session")

    var login = req.body.login
    var password = req.body.password

    const user_session = await UserLogin(cookie, login, password)

    if(!user_session) // not loggined 

    if (typeof user_session != "boolean") {
        res.cookie("session", user_session, {
            httpOnly: false
        });
    }
})

app.listen(server_conf.port, () => {
    console.log("On port: " + server_conf.port)
})