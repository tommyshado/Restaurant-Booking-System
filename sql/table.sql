CREATE TABLE tableBooking (
    id serial not null primary key.
    tableName text not null,
    capacity int not null,
    booked boolean not null,
    username text,
    numberOfPeople int
);