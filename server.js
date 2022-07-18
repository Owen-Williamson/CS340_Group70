
// Express
var express = require('express');
var exphbs = require('express-handlebars');
var app = express();
PORT = 9124;

app.engine('handlebars', exphbs.engine({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// serve the public fodler
app.use(express.static('public'));

app.listen(PORT, function(){            // This is the basic syntax for what is called the 'listener' which receives incoming requests on the specified PORT.
    console.log('Express started on http://localhost:' + PORT + '; press Ctrl-C to terminate.')
});
