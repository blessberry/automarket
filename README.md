# AutoMarket
[![Build Status](https://travis-ci.org/O-Osahon/automarket.svg?branch=develop)](https://travis-ci.org/blessberry/automarket)


Automarket is an online marketplace for automobiles of diverse makes, model or body type. With Auto Mart, users can sell their cars or buy from trusted dealerships or private sellers.

# Features

## Core Features
- User can sign up.
- User can sign in.
- User (seller) can post a car sale advertisement.
- User (buyer) can make a purchase order.
- User (buyer) can update the price of his/her purchase order.
- User (seller) can mark his/her posted AD as sold.
- User (seller) can update the price of his/her posted AD.
- User can view a specific car.
- User can view all unsold cars.
- User can view all unsold cars within a price range.
- Admin can delete a posted AD record.
- Admin can view all posted ads whether sold or unsold.

## Extra Features

- User can reset password.
- User can view all cars of a specific body type.
- User can flag/report a posted AD as fraudulent.
- User can view all unsold cars of a specific make (manufacturer).
- User can view all used unsold cars.
- User can view all new unsold cars.


## Links
- UI Templates can be found [here](http://blessberry.github.io/automarket/)
- APIs are hosted on Heroku [here](https://quiet-inlet-95293.herokuapp.com)
- API documentation can be found [here](https://quiet-inlet-95293.herokuapp.com/man)
- This project is managed with Pivotal Tracker [here](https://www.pivotaltracker.com/n/projects/2349361)


# Getting Started
To have this application running on your computer, follow the following steps



### Prerequisites
- You need to have [Node.js](nodejs.org) installed 



### Installing
- Clone or download this repository using `https://github.com/blessberry/automarket.git`
- Run `npm install` to install all the application's dependencies
- Set the following environment variables in your `.env` file:

    - `PORT` - An Integer specifying the PORT your application will run on.
  
    - `KEY` - A random string used for generation authorization tokens.
  
    - `APPLICATION_URL` - It should be formated thus:  http(s)://(host)(:port)(TLD)/api/v1 
       Example:

 ```
    http://localhost:5000/ or https://quiet-inlet-95293.herokuapp.com/api/v1

 ```
    
    
 
### Running The Tests

#### Testing Locally
- Run `npm test`



#### Testing With Postman
- Install [Postman](https://getpostman.com).
- View the api endpoints [here](https://quiet-inlet-95293.herokuapp.com/docs).
   
	 
   
## Built With
- [Node.Js](https://nodejs.org)
- [ExpressJs](https://expressjs.com)



### Testing Tools
- [Mocha](https://www.npmjs.com/package/mocha)
- [Chai](https://www.npmjs.com/package/chai)



### Coding Style
- [AirBnB](https://github.com/airbnb/javascript)



## Author
- [Beraka Emmanuel](https://github.com/blessberry)

