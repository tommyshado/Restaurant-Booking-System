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

    it("It should check if the status changes after the booking.", async function () {
        const restaurantTableBooking = RestaurantTableBooking(db);
      
        assert.deepEqual(true, false);
    });

    it("It should check if the booking has a valid name.", async function () {
        const restaurantTableBooking = RestaurantTableBooking(db);
    
        assert.deepEqual(true, true);
    });

    it(" It should check if the capacity is greater than the available seats.", async function () {
        const restaurantTableBooking = RestaurantTableBooking(db);
        
      
        assert.deepEqual(true, false);
    });

    it("should check if there are available seats for a booking.", async function () {
        const restaurantTableBooking = RestaurantTableBooking(db);
        
        assert.deepEqual(true, false);
    });

    it("Check if the booking has a user name provided.", async function () {
        const restaurantTableBooking = RestaurantTableBooking(db);
        
      
        assert.deepEqual(true, false);
    });

    it("should not be able to book a table with an invalid table name.", async function () {
        const restaurantTableBooking = RestaurantTableBooking(db);
      
        assert.deepEqual(true, false);
    });

    it("should list of all the tables and their booking statuses.", async function () {
        const restaurantTableBooking = RestaurantTableBooking(db);
        
        assert.deepEqual(true, false);
    });

    it("should list all the bookings made", async function () {
        const restaurantTableBooking = RestaurantTableBooking(db);
        
        assert.deepEqual(true, fasle);
    });

    it("should list all booked tables.", async function () {
        let resRaurantTableBooking = RestaurantTableBooking(db);
        
      
        assert.deepEqual(true, false);
    });

    
    it("should not be able to book a booked table.", async function () {
        let resRaurantTableBooking = RestaurantTableBooking(db);
      
        assert.deepEqual(true, false);
    });

    it("should be able to book a table.", async function () {
        let resRaurantTableBooking = RestaurantTableBooking(db);
        
      
        assert.deepEqual(true, false);
    });

    it("should not be able to people over the table capacity", async function (){
        let resRaurantTableBooking = RestaurantTableBooking(db);
        
        assert.deepEqual(true, false);
    })


    after(function () {
        db.$pool.end;
    });
})
