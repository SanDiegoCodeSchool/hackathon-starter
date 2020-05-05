# Welcome to Diego's Brewery Finder

This web app was created to quickly find a brewery near you :beers:. A live version of this application can be found at [here](https://dflores7237-brewery-finder.herokuapp.com/). 

## Getting Started
After cloning these files install your dependencies:
> $ npm install

Then hop on over to [ipstack](https://ipstack.com/) and register for an API key. It is recomended that you set up a .env file in the root of the directory to store your API key. Next reference this environmental variable to the api call located in `server/server.js`. Currently, this application will find breweries by zipcode using [openbreweryDB](https://www.openbrewerydb.org/).

Now run the build and fire up your server
> $ npm run build && npm start

You will find the application running in your browser on your localhost:3000

Cheers!


