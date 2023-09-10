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


## Database setup

**NB** - Create your database on [ElephantSQL](https://customer.elephantsql.com/login) and deploy your webapp to [Render](https://render.com/).

Make sure your tests are running in `GitHub Actions`.

Use the supplied sql scripts in GitHub Actions like this:

```
 - name: create postgresql tables
      run: PGPASSWORD=coder123 psql -h localhost -U coder -d restuarant_bookings -a -f ./sql/tables.sql
 - name: create postgresql tables
      run: PGPASSWORD=coder123 psql -h localhost -U coder -d restuarant_bookings -a -f ./sql/data.sql
```

> **Note:** add your your own build steps in the yml `./github/workflows/node-deploy.yml/`. You can look at this [example](https://github.com/codex-academy/BasicExpressWebApp/blob/master/.github/workflows/node-pgsql.js.yml) from [crud.projectcodex.co](http://crud.projectcodex.co).

