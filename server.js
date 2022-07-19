
// Express
var express = require('express');
var exphbs = require('express-handlebars');
var app = express();
PORT = 9124;

app.engine('handlebars', exphbs.engine({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Get an instance of mysql we can use in the app
var mysql = require('mysql')

// Create a 'connection pool' using the provided credentials
var pool = mysql.createPool({
    connectionLimit : 10,
    host            : 'classmysql.engr.oregonstate.edu',
    user            : 'cs340_[your_onid]',
    password        : '[your_db_password]',
    database        : 'cs340_[your_onid]'
})

// Export it for use in our application
module.exports.pool = pool;

// Database
//var db = require('./db-connector');


app.use(express.static('public'));

app.get('/', function(req, res) {
  res.status(200).render("homePage", {});
});

/*
// serve all entity handlebar pages (they don't exist yet though)
app.get('/:entity', function(req, res) {
  var entity = req.params.entity;
  res.status(200).render(entity, {});
});
*/

// serving the handlebar files

app.get('/drivers', function(req, res) {
  res.status(200).render("drivers",{
    drivers: [
      {"id":"0", "name":"0", "email":"0", "ld":"0", "ed":"0"},
      {"id":"1", "name":"1", "email":"1", "ld":"1", "ed":"1"}
    ]}
  );
});

app.get('/trucks', function(req, res) {
  res.status(200).render("trucks",{
    trucks: [
      {"id":"0", "current_facility_id":"0", "plate":"0", "max_weight":"0", "max_volume":"0"},
      {"id":"1", "current_facility_id":"1", "plate":"1", "max_weight":"1", "max_volume":"1"}
    ]}
  );
});

app.get('/customers', function(req, res) {
  res.status(200).render("customers",{
    customers: [
      {"id":"0", "name":"0", "email":"3"},
      {"id":"1", "name":"2", "email":"1"}
    ]}
  );
});

app.get('/facilities', function(req, res) {
  res.status(200).render("facilities",{
    facilities: [
      {"id":"0", "customer_id":"0", "location":"0", "name":"0"},
      {"id":"1", "customer_id":"1", "location":"1", "name":"1"}
    ]}
  );
});

app.get('/deliveries', function(req, res) {
  res.status(200).render("deliveries",{
    deliveries: [
      {"id":"0", "driver_id":"0", "truck_id":"0", "start_facility_id":"0", "end_facility_id":"0", "total_volume":"0", "total_weight":"0", "late":"0", "departure_time":"0","expected_arrival_time":"0", "actual_arrival_time":"0"},
      {"id":"0", "driver_id":"0", "truck_id":"0", "start_facility_id":"0", "end_facility_id":"0", "total_volume":"0", "total_weight":"0", "late":"0", "departure_time":"0","expected_arrival_time":"0", "actual_arrival_time":"0"}
    ]}
  );
});

app.get('/orders', function(req, res) {
  res.status(200).render("orders",{
    orders: [
      {"id":"0", "customer_id":"0", "start_facility_id":"0", "end_facility_id":"0", "current_facility_id":"0", "volume":"0", "weight":"0"},
      {"id":"1", "customer_id":"1", "start_facility_id":"1", "end_facility_id":"1", "current_facility_id":"1", "volume":"1", "weight":"1"}
    ]}
  );
});

// add the listener
app.listen(PORT, function(){
  console.log('Express started on http://localhost:' + PORT + '; press Ctrl-C to terminate.')
});


/*
    ROUTES

app.get('/', function(req, res)
    {
        // Define our queries
        query1 = 'DROP TABLE IF EXISTS diagnostic;';
        query2 = 'CREATE TABLE diagnostic(id INT PRIMARY KEY AUTO_INCREMENT, text VARCHAR(255) NOT NULL);';
        query3 = 'INSERT INTO diagnostic (text) VALUES ("MySQL is working!")';
        query4 = 'SELECT * FROM diagnostic;';

        // Execute every query in an asynchronous manner, we want each query to finish before the next one starts

        // DROP TABLE...
        db.pool.query(query1, function (err, results, fields){

            // CREATE TABLE...
            db.pool.query(query2, function(err, results, fields){

                // INSERT INTO...
                db.pool.query(query3, function(err, results, fields){

                    // SELECT *...
                    db.pool.query(query4, function(err, results, fields){

                        // Send the results to the browser
                        let base = "<h1>MySQL Results:</h1>"
                        res.send(base + JSON.stringify(results));
                    });
                });
            });
        });
    });

*/
