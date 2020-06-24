# Authentication-JWT-
Authentication API with JWT
*=> This packeage will actually both Authenticate and Authorize success, which may not be a given from the package name.<=*
******************** this.PACKAGE () => {
    (using Base64)Authenticates logins;
    (using jwt)Authorizes access to resources/sites to users;
    (using bcrypt)Create and encrypt new users;
}**********************
-Uses MongoDB(use whatever DB that suits your needs)
-You may need to use Postman to confirm GET/POST requests.

/* => If I(J03y K1n9) have sold this API to you as part of a larger, 
more customized product, 
or given you access to the Git Repo for this API, 
I suggest you read the README.md file, 
unless you know exactly what you are doing, 
or have acquired my services, in which case this is not relevant to you.  */

*********************REQUIREMENTS***********************
Step 1: Install the following dependencies.
Dependencies for this API
    +express js(npm i express)
    +mongoose(npm i mongoose)
    +dotenv(npm i dotenv)
    +@hapi/joi(npm i @hapi/joi)
    +bcrypt js(npm i bcryptjs)
    +JWT-Json Web Token(npm i jsonwebtoken)

DevDependancies
    +nodemon(npm i --save-dev nodemon)


Step 2: Create a .env file(assumption here is you have a working DB)
In it, initialize two variables for your DB connection(you'll need this for connecting your DB(its a given but I'll still mention, you need to whitelist the server IP this runs on)) and your token secret(you'll need this for the jwt to function)


Step 3: Use as desired
More details are in the project files.