const restaurant = (db) => {

    async function getTables() {
        // get all the available tables
        // CHECK if all of the six tables are not booked THEN...
        // GET all the tables with the false booked records
    }

    async function bookTable(tableName) {
        // book a table by name
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