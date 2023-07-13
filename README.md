
### Project Setup ###
ensure to install NODEJS all dependenses using npm install command prompt package.json file

### Create ENV Files ###
Create .env file
Add the following variables on the env path.

NEXTAUTH_URL =  http://localhost:3000
NEXTAUTH_URL_INTERNAL = http://localhost:3000

### create a ramdom 32bit ssl on opensll website ###
But feel free to use this
NEXTAUTH_SECRET = f0FaWsPict4Bol2w49DIcGIQPkyyEhsCwBLYKC1LBC8=

### Create a mongodb connection link on mongodb database ###

add up the database link in this varaible.
MONGODB_URL = your DB link here

### Create an oauth client id on console.cloud.google.com
follow the project create create instruction, create your secret ID and input all url  google cloud.

authorize domain url: http://localhost:3000
origin url: http://localhost:3000
authorize redirect url: http://localhost:3000
after adding the redirect url ensure to add this url below which next-auth with look for as a source provide for login and logout authentication.
auth url: http://localhost:300/api/auth/callback/google


after creating your secret ID on google console add this variable and ID on .env

GOOGLE_SECRET_ID = your own google secret ID
GOOGLE_CLIENT_SECRET = your own google secret ID

### Boom start your local development server ###
using 
### npm run dev ###


