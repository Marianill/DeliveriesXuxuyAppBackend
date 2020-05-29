var app = require('express')(); // Create an instance of an Express app

var mobileApp = require('azure-mobile-apps')(); // Create an instance of a Mobile App with default settings

mobileApp.tables.add('User'); // Create a table for 'User' with default settings
mobileApp.tables.add('Delivery'); // Create a table for 'Delivery' with default settings
mobileApp.tables.add('DeliveryPerson'); // Create a table for 'DeliveryPerson' with default settings

app.use(mobileApp);
app.listen(process.env.PORT || 3000);
