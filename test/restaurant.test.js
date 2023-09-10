import assert from "assert"
import RestaurantTableBooking from "../services/restaurant.js";
import pgPromise from 'pg-promise';

const DATABASE_URL = '';

const connectionString = process.env.DATABASE_URL || DATABASE_URL;
const db = pgPromise()(connectionString);

describe("The restaurant booking table", function () {
    beforeEach(async function () {
        try {
            // clean the tables before each test run
            // await db.none("TRUNCATE TABLE table_booking RESTART IDENTITY CASCADE;");
        } catch (err) {
            console.log(err);
            throw err;
        }
    });

    it("Get all the available able", async function () {
        const restaurantTableBooking = await RestaurantTableBooking(db);

        assert.deepEqual(await restaurantTableBooking.getTables(), [{}, {}, {}, {}, {}]);
    });

    // it("It should check if the booking has a valid name.", async function () {
    //     const restaurantTableBooking = await RestaurantTableBooking(db);

    //     assert.deepEqual(false, true);
    // });

    it("It should check if the capacity is not greater than the available seats.", async function () {
        const restaurantTableBooking = await RestaurantTableBooking(db);


        assert.deepEqual(await restaurantTableBooking.bookTable(), "capacity greater than the table seats");
    });

    it("should check if there are available seats for a booking.", async function () {
        const restaurantTableBooking = await RestaurantTableBooking(db);

        assert.deepEqual(true, false);
    });

    it("Check if the booking has a user name provided.", async function () {
        const restaurantTableBooking = await RestaurantTableBooking(db);


        assert.deepEqual(await restaurantTableBooking.bookTable(), "please enter username");
    });

    it("Check if the booking has a contact number provided.", async function () {
        const restaurantTableBooking = await RestaurantTableBooking(db);


        assert.deepEqual(await restaurantTableBooking.bookTable(), "please enter contact number");
    });

    it("should not be able to book a table with an invalid table name.", async function () {
        const restaurantTableBooking = await RestaurantTableBooking(db);

        assert.deepEqual(true, false);
    });

    it("should be able to book a table.", async function () {
        let resRaurantTableBooking = await RestaurantTableBooking(db);

        await resRaurantTableBooking.bookTable({});

        assert.deepEqual(await resRaurantTableBooking.getBookedTables(), [{}, {booked: true}, {}, {}]);
    });

    // it("should list of all the tables and their booking statuses.", async function () {
    //     const restaurantTableBooking = await RestaurantTableBooking(db);

    //     assert.deepEqual(true, false);
    // });



    it("should list all booked tables.", async function () {
        let resRaurantTableBooking = await RestaurantTableBooking(db);


        assert.deepEqual(true, false);
    });

    it("should show a table booking made by user", async function () {
        let resRaurantTableBooking = await RestaurantTableBooking(db);

        

        assert.deepEqual(await resRaurantTableBooking.getBookedTablesForUser('username'), [{}]);
    });

    it("should be able to cancel a table booking", async function () {
        let resRaurantTableBooking = await RestaurantTableBooking(db);

        await resRaurantTableBooking.bookTable("table one");

        let bookedTables = await resRaurantTableBooking.getTables();

        assert.deepEqual(bookedTables, [{}, {}, { booked: true }, {}, {}]);

        await resRaurantTableBooking.cancelTableBooking("table one");

        assert.deepEqual(bookedTables, [{}, {}, {}, {}, {}]);
    });

    after(function () {
        db.$pool.end;
    });
})
