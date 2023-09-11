const restaurant = (db) => {

    async function getTables() {
        // get all the available tables
        // CHECK if all of the six tables are not booked THEN...
        const tables = db.manyOrNone("select * from table_booking");
        // GET all the tables with the false booked records
        return tables;
    }

    const tables = async (tableName) => {
        const checksBooked = await db.oneOrNone(`select booked from table_booking where table_name = '${tableName}'`);
        return checksBooked.booked;
    }

    async function bookTable(booking) {
        // book a table by name
        // CHECK the table name THEN...
        // COMPARE the seats in the table_booking, 
        // if it matches with the seats booking we get from the user
        const bookingSize = booking.booking_size;
        const tableName = booking.tableId;
        const name = booking.username;
        const number = Number(booking.phone_number);
        const capacity = db.oneOrNone(`select capacity from table_booking where table_name = '${tableName}'`);


        // CHECK if number of the people booking is less than the capacity for a table THEN...
        if (bookingSize <= capacity.capacity && await tables(tableName) === false && name && number) {
            // update table booking and set the booked record to true
            await db.none(`UPDATE table_booking SET booked = '${TRUE}', username = '${name}', number_of_people = '${bookingSize}', contact_number = ${number} where table_name = '${tableName}'`);
        }
        else if (!name) return "Please enter a username";
        else if (!number) return "Please enter a contact number";
        else if (!tables(tableName)) return "Invalid table name provided";
        else {
            return 'capacity greater than the table seats';
        };
    };

    async function getBookedTables() {
        // get all the booked tables
        // GET and return all the tables their records for booked = true
        return await db.manyOrNone("select table_name, capacity, number_of_people, username, contact_number from table_booking where booked = $1", true);
    };

    async function isTableBooked(tableName) {
        // get booked table by name
        // SELECT booked boolean then get booked boolean value
        return await db.manyOrNone(`select booked from table_booking where table_name = '${tableName}'`).booked;
    };

    async function cancelTableBooking(tableName) {
        // cancel a table by name
        // set the table for a table to default
        await db.none(`UPDATE table_booking SET booked = ${false}, SET username = ${""}, SET number_of_people = '${null}', SET contact_number = '${null}' WHERE table_name= '${tableName}'`);
    }

    async function getBookedTablesForUser(username) {
        // get user table booking
        return await db.oneOrNone(`select table_name from table_booking where username = '${username}'`);
    }

    return {
        getTables,
        bookTable,
        getBookedTables,
        isTableBooked,
        cancelTableBooking,
        // editTableBooking,
        getBookedTablesForUser
    }
}

export default restaurant;