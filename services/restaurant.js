const restaurant = (db) => {

    async function getTables() {
        // get all the available tables
        // CHECK if all of the six tables are not booked THEN...
        const tables = db.manyOrNone("select * from table_booking");
        // GET all the tables with the false booked records
        return tables;
    }

    async function bookTable(booking) {
        // book a table by name
        // INSERT booking name if not in the table_booking database
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