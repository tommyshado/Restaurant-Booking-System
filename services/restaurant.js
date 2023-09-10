const restaurant = (db) => {

    async function getTables() {
        // get all the available tables

    }

    async function bookTable(tableName) {
        // book a table by name

    }

    async function isTableBooked() {
        // get all the booked tables
    }

    async function getBookedTable(tableName) {
        // get booked table by name
    }

    async function cancelTableBooking(tableName) {
        // cancel a table by name
    }

    async function editTableBooking(tableName) {
        // edit table booking
    }

    return {
        getTables,
        bookTable,
        isTableBooked,
        getBookedTable,
        cancelTableBooking,
        editTableBooking
    }
}

export default restaurant;