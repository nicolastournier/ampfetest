# ampfetest

To run the app, please do the following on a command line in the AMP directory:


Pull down dev tools and libraries:

bower install
npm install



To run a local RESTful server:

npm install -g json-server

json-server --watch db.json



To run the app on a local web server:

gulp serve

Pleas open a browser and navigate to localhost:3001



To test the app:

gulp test


Note: Bootstrap is loaded from a CDN (there was some bug preveting gulp inject)

Thanks!! Nicolas Tournier.