# auth-nodejs-mysql README

## Setup

### Database

To save your time and frustration I've prepared a vagrantfile with a test database

To run the database locally:

Install `mysql`

Install `virtualbox`

Install `vagrant`

Install `vagrant-triggers`

Run `vagrant up`

A brand new instance of MySQL should be listening on port 3310

### Api

Install `nvm`

Install node: `nvm install 6`

Install dependencies: `npm install`

Start api: `npm run start:dev`

Api listens on port 4000 by default, hit http://localhost:4000/health to see if it's live and kicking

## API Endpoints:

`POST /signup` - it accepts login and password. Once it's been verified that there's no user with the given login in the database, the login and hashed password is saved in the database and a JWT token is created and sent back to the user

`POST /singin` - it accepts login and password. It checks if the login and password are ok and a JWT token is sent back to the user

`GET /` - in order to access the route you have to include the JWT token in the `authorization` header in the request.
