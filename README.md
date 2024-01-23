# Trader Game

EvaExchange is an arbitrarily trading game developed by a startup in a very short span of time called “Super
Traders” . The purpose of the application is to educate users on the terminology used in trading of shares.


- Node 
- Typescript
- Express
- Sequelize (Oracle, Postgres, MySQL, MariaDB, SQLite and SQL Server etc.)

## Table of Contents

- [Trader Game](#trader-game)
  - [Table of Contents](#table-of-contents)
  - [Getting started](#getting-started)
  - [For development](#for-development)
  - [Sample .ENV](#sample-env)
  - [Commands](#commands)
  - [Project Structure](#project-structure)
  - [Inspirations](#inspirations)




## Manual Installation

steps:

Clone the repo:

```sh
git clone --depth 1 https://github.com/ZekDaniels/TraderGame.git  foldername


Install the dependencies:

```sh
npm install
```

Set the environment variables:

```sh
cp .env.example .env

```

## Getting started

```sh
npm install

npm run build-ts

npm start

```

## For development

```sh
npm install

#load database
psql.exe -h 127.0.0.1 -U postgres tradeapp < fakedata.sql

npm run dev

```

## Sample .ENV

```sh
DB_HOST=localhost
DB_NAME=tradeapp
DB_PASSWORD=password
DB_PORT=5432
DB_TYPE=postgres
DB_USER=postgres
PORT=3000

TOKEN_EXPIRY_HOUR=168
SECRET=askjfghhwifuhgw

EMAIL_SERVICE=gmail
EMAIL_USER=you@email.com
EMAIL_PASS=fzobeitqjcxklenm
EMAIL_FROM=admin@email.com

OTP_EXPIRY_MIN=10
OTP_SECRET=shgdbnbgw

ROOT_PATH=C:/Users/User/Desktop/dev/node/tester/src

LANGUAGE_PATH=/locales
DEFAULT_LOCALE=en
LANG_COOKIE=lang

```


## Commands


```bash
# run in development
npm run dev

# run in production
npm run start

#  lint files
npm run lint

#  format files
npm run format

```


## Project Structure

```
dist\               # js files
src\
 |--config\         # Environment variables and configuration related things
 |--controllers\    # Route controllers 
 |--events|         # Model Sequelize hooks
 |--helpers\        # Helper function files
 |--middlewares\    # Custom express middlewares
 |--model\          # Sequelize models 
 |--routes\         # Routes
 |--services\       # Service 
 |--utils\          # Utility classes and functions
 |--validations\    # Request data validation schemas
 |--app.ts\         # Express app
 |--server.ts\      # App entry point
```

## Changing Database

### step 1
 
 ```sh
 # Change the value of  DB_TYPE  in .env file to one of the follwing
 DB_TYPE=postgres 
 DB_TYPE=mysql 
 DB_TYPE=sqlite 
 DB_TYPE=mariadb 
 DB_TYPE=mssql 
 DB_TYPE=db2 
 DB_TYPE=oracle 
 ```
### step 2
```sh
# Install one of the related packge:
 npm install --save pg pg-hstore # for Postgres
 npm install --save mysql2 # for Mysql
 npm install --save mariadb # for Mariadb
 npm install --save sqlite3 # for Sqlite
 npm install --save tedious # for Microsoft SQL Server (mssql)
 npm install --save oracledb # for Oracle 
```
for more details please refer [Sequelize](https://sequelize.org/docs/v6/getting-started/)

## Inspirations
- [Typescript-Node-Sequelize-Boilerplate](https://github.com/nabadeep25/typescript-node-sequelize-boilerplate.git)