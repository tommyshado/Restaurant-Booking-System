import rastaurant from "../services/restaurent.js";
import assert from "assert";
import pgp from "pg-promise";



describe("The basic database web app", function () {
    beforeEach(async function () {
        try {
            // clean the tables before each test run
            // await db.none("TRUNCATE TABLE categories RESTART IDENTITY CASCADE;");
        } catch (err) {
            console.log(err);
        }
    });

    it("should able to add a category", async function () {
        
        assert.equal(2, 2);
    });

    after(function () {
        db.$pool.end;
    });
});