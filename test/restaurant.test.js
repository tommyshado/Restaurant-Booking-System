import assert from "assert"
import resturent_booking_table  from "../service/rastaurant.js";
import pgPromise from 'pg-promise';

const connectionString = process.env.DATABASE_URL || dbstring

const db = pgPromise()(connectionString);


describe("The restaurant booking table", function () {
    beforeEach(async function () {
        try {
            // clean the tables before each test run
            await db.none("TRUNCATE TABLE restuarant_table_booking RESTART IDENTITY CASCADE;");
        } catch (err) {
            console.log(err);
            throw err;
        }
    });

    it("It should check if the status changes after the booking.", async function () {
        let Resturent_booking_table = resturent_booking_table(db);
        
      
        assert.deepEqual(true, false);
    });

    it("", async function () {
        let Resturent_booking_table = resturent_booking_table(db);
        
      
        assert.deepEqual(true, false);
    });

    it("It should check if the booking has a valid name.", async function () {
        let Resturent_booking_table = resturent_booking_table(db);
        
      
        assert.deepEqual(true, true);
    });

    it(" It should check if the capacity is greater than the available seats.", async function () {
        let Resturent_booking_table = resturent_booking_table(db);
        
      
        assert.deepEqual(true, false);
    });

    it("should check if there are available seats for a booking.", async function () {
        let Resturent_booking_table = resturent_booking_table(db);
        
        assert.deepEqual(true, false);
    });

    it("Check if the booking has a user name provided.", async function () {
        let Resturent_booking_table = resturent_booking_table(db);
        
      
        assert.deepEqual(true, false);
    });

    it("should attempt booking a table with an invalid table name.", async function () {
        let Resturent_booking_table = resturent_booking_table(db);
        
      
        assert.deepEqual(true, false);
    });

    it("should list of all the tables and their booking statuses.", async function () {
        let Resturent_booking_table = resturent_booking_table(db);
        
      
        assert.deepEqual(true, false);
    });

    it("should list all the available bookings", async function () {
        let Resturent_booking_table = resturent_booking_table(db);
        
      
        assert.deepEqual(true, fasle);
    });

    it("should list all booked tables.", async function () {
        let Resturent_booking_table = resturent_booking_table(db);
        
      
        assert.deepEqual(true, false);
    });

    
    it("should list all booked tables.", async function () {
        let Resturent_booking_table = resturent_booking_table(db);
        
      
        assert.deepEqual(true, false);
    });

    it("should test if there are correct number of people booking", async function (){
        let Resturent_booking_table = resturent_booking_table(db);
        
      
        assert.deepEqual(true, false);
    })


    after(function () {
        db.$pool.end;
    });
})