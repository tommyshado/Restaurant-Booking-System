# Restaurant-Booking-System

Scenario: Restaurant Booking System Assessment

Background: You are tasked with creating a restaurant booking system for a popular restaurant chain called "Delicious Delights." The system will allow customers to make reservations for tables, and restaurant staff to see these reservations via an admin dashboard. The system should be user-friendly and efficient.


## Requirements

Routes   | HTTP Method | Description
---|----|---
`/` | GET | Show tables that can be booked and allow client to book a tablle that is not already booked.
`/book` | POST | Book a table that has not already been booked. If the number of customers is bigger than the table's capacity the table can't be booked. Show a flash error message in this scnario
`/bookings` | GET | Show all the bookings made
`/bookings/:username` | GET | Show all the bookings made by a given user. Allow booking cancellations
`/cancel` | POST | Cancel the booking booking for the selected table

### For Customers 

`View Available Tables:`

Customers can view a list of available tables, including table size & availability status.

`Make a Reservation:`

Customers can select a table and make or cancel a reservation. They can see all the reservations they have made.

### For Admin:

`Dashboard Overview`

The admin dashboard provides an overview of all the restaurant's reservations  and allow for cancellations. 
