import express from "express";
import pgPromise from "pg-promise";
import exphbs from "express-handlebars";
import bodyParser from "body-parser";
// import flash from "flash-express";
import "dotenv/config";
// service import
import restaurant from "./services/restaurant.js";

const app = express();

const databaseURL = process.env.DATABASE_URL;

// configure ssl/ tls required

const config = {
    connectionString: databaseURL
};

if (process.env.NODE_ENV === "production") {
    config.ssl = {
        rejectUnauthorized: false
    };
};

// pgp promise instance
const pgp = pgPromise();

// db instance
const db = pgp(config);

// factory function instance
const Restaurant = restaurant(db);

app.use(express.static('public'));
// app.use(flash());

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const handlebarSetup = exphbs.engine({
    partialsDir: "./views/partials",
    viewPath: './views',
    layoutsDir: './views/layouts'
});

app.engine('handlebars', handlebarSetup);
app.set('view engine', 'handlebars');

app.get("/", async (req, res) => {
    // GET tables data
    const tables = await Restaurant.getTables();

    res.render('index', { tables : tables})
});

app.post("/book", async (req, res) => {
    // GET the username, phone number and booking size
    const { username, phone_number, booking_size, tableId } = req.body;

    // INSERT booking details into the factory function
    await Restaurant.bookTable({
        tableId,
        username,
        phone_number,
        booking_size
    });
    // GET back to the home route
    res.redirect("/");
});


app.get("/bookings", async (req, res) => {
    // STORE the bookings made by the user as an array that contains objects
    const bookings = await Restaurant.getBookedTables();
    res.render('bookings', { tables : bookings});
});

app.get("/booking:username", async (req, res) => {
    // get the username from the params and...
    const name = req.params.username;
    // pass the username into the factory function
    const bookedTableUser = await Restaurant.getBookedTablesForUser(name);
    // Get back to the home route
    res.redirect("bookings", {
        tables: bookedTableUser,
    });
});

app.post("/cancel:tableName", async (req, res) => {
    const tableName = req.params.tableName;
    // get the table name from the params
    await Restaurant.cancelTableBooking(tableName);
    res.redirect("/bookings")
});


var portNumber = process.env.PORT || 3000;

//start everything up
app.listen(portNumber, function () {
    console.log('🚀  server listening on:', portNumber);
});