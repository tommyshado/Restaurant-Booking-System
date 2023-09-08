import assert from "assert"
import Resturent_booking_table  from "../service/rastaurant.js";
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
        let resturent_booking_table = Resturent_booking_table(db);
        
      
        assert.deepEqual(true, false);
    });

    it("It should check if the booking has a valid name.", async function () {
        let resturent_booking_table = Resturent_booking_table(db);
        
      
        assert.deepEqual(true, true);
    });

    it(" It should check if the capacity is greater than the available seats.", async function () {
        let resturent_booking_table = Resturent_booking_table(db);
        
      
        assert.deepEqual(true, false);
    });

    it("Check if there are available seats for a booking.", async function () {
        let resturent_booking_table = Resturent_booking_table(db);
        
      
        assert.deepEqual(true, false);
    });

    it("Check if the booking has a user name provided.", async function () {
        let resturent_booking_table = Resturent_booking_table(db);
        
      
        assert.deepEqual(true, false);
    });

    it("Create a test case to attempt booking a table with an invalid table name.", async function () {
        let resturent_booking_table = Resturent_booking_table(db);
        
      
        assert.deepEqual(true, false);
    });

    it("Create a test case to retrieve a list of all tables and their booking statuses.", async function () {
        let resturent_booking_table = Resturent_booking_table(db);
        
      
        assert.deepEqual(true, false);
    });

    it("Create a test case to retrieve a list of available tables.", async function () {
        let resturent_booking_table = Resturent_booking_table(db);
        
      
        assert.deepEqual(true, fasle);
    });

    it("It should list all booked tables.", async function () {
        let resturent_booking_table = Resturent_booking_table(db);
        
      
        assert.deepEqual(true, false);
    });

    
    it("It should list all booked tables.", async function () {
        let resturent_booking_table = Resturent_booking_table(db);
        
      
        assert.deepEqual(true, false);
    });

    it("it should test if there are correct number of people booking", async function (){
        let resturent_booking_table = Resturent_booking_table(db);
        
      
        assert.deepEqual(true, false);
    })


    after(function () {
        db.$pool.end;
    });
})