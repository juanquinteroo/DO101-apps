console.log("Hello World!\n");

var response;

app.get('/', function (req, res) {
    response = 'This is version 2 of the app.' + '\n';

    //send the response to the client
    res.send(response);

});

var response;

app.get('/', function (req, res) {
    response = 'This is version 3 of the app.' + '\n';

    //send the response to the client
    res.send(response);
  });