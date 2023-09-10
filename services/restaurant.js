const restaurant = (db) => {

    async function getTables () {
        // get all the available tables

    }

    async function bookTable (tableName) {
        // book a table by name

    }

    async function getBookedTables () {
        // get all the booked tables
    }

    async function getBookedTable (tableName) {
        // get booked table by name
    }

    async function cancelTableBooking(tableName) {
        // cancel a table by name
    }
     


    return {
        getTables,
        bookTable,
        getBookedTables,
        getBookedTable,
        cancelTableBooking
    }
}

export default restaurant;