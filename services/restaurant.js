const restaurant = (db) => {

    async function getTables() {
        // get all the available tables
        // CHECK if all of the six tables are not booked THEN...
        const tables = db.manyOrNone("select * from table_booking");
        // GET all the tables with the false booked records
        return tables;
    }

    const tables = async (tableName) => await db.manyOrNone(`select * from table_booking where table_name = '${tableName}'`);

    async function bookTable(booking) {
        // book a table by name
        // CHECK the table name THEN...
        // COMPARE the seats in the table_booking, 
        // if it matches with the seats booking we get from the user
        const seat = booking.booking_size;
        const tableName = booking.tableId;
        const name = booking.username;
        const number = booking.phone_number;
        const capacity = db.oneOrNone(`select capacity from table_booking where table_name = '${tableName}'`);

        if (Number(capacity.capacity) < seat) return 'capacity greater than the table seats';
        else if (!name) return "Please enter a username";
        else if (!number) return "Please enter a contact number";
        else if (!tables(tableName)) return "Invalid table name provided";
    }

    async function getBookedTables() {
        // get all the booked tables
    }

    async function isTableBooked(tableName) {
        // get booked table by name
    }

    async function cancelTableBooking(tableName) {
        // cancel a table by name
    }

    async function getBookedTablesForUser(username) {
        // get user table booking
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