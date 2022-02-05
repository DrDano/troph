# troph

Get what you want when you want, troph puts you in control.

  ![](https://img.shields.io/badge/javascript-100-yellow?logo=javascript)
  ![](https://img.shields.io/badge/mysql2-dep-blue?logo=npm)
  ![](https://img.shields.io/badge/sequelize-dep-blue?logo=sequelize)
  ![](https://img.shields.io/badge/dotenv-dep-blue?logo=npm)
  ![](https://img.shields.io/badge/express.js-dep-blue?logo=express)

  ## Description

  This application is not deployed so please clone the repo to somewhere on your system.

  The app is the backend framework for an e-commerce website, and has routes readily generated through express.js. These routes are available to you within this package as ```Troph-Insomnia-Routes.json``` which you can import into your instance of Insomnia and readily use if you are running the application locally.

  The app can be run entirely from Insomnia, but can also be given a custom front-end if that is desired. All routes are ready for integration, as this is a complete API. Keep in mind however that it is designed to run with your local instance of MySql currently.

  Within ```server.js``` it is important that if you will be testing routes that you make sure that ```sequelize.sync``` is set to ```force: false```, otherwise it will drop your tables each time you call ```npm start```.

  ## Walk Through Video
  [Link to Walk Through (Ctrl Click to open in new tab)](https://watch.screencastify.com/v/mxJHLCGtCCxKHFxeJpKd)

  ## Table of contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [Maintainers](#maintainers)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Credits](#credits)
  * [License](#license)

  ## Installation
  Make sure you have the latest stable version of node installed: ```node --version```.
  Make sure you have installed mysql locally on your system. Check this with ```mysql --version```.
  Make sure you have Insomnia or another route tester installed. If you use Insomnia, then you can just import the routes included with this repository as a JSON.

  Clone the repository. Then in your terminal enter ```node install``` which will install express.js, mysql2, sequelize, and dotenv.

  Create a .env file in the root of the repo and paste the following into it with your mysql password:
  ```
    DB_NAME="ecommerce_db"
    DB_USER="root"
    DB_PW="your password here"
  ```

  This file will not be pushed to your repository if you choose to push it.

  ## Usage
  First, in your mysql shell enter the following command:
  ```
  source db/schema.sql
  ```
  then quit the sql shell.
  Next, in your terminal enter ```npm start```. This creates the tables and associations. Now you can seed the table by exiting that process with ```^C``` and entering ```node seeds```.
  Once this is finished, you are ready to start your server with ```npm start``` again.

  Now navigate to Insomnia and test the GET, POST, PUT, and DELETE routes.

  ## Maintainer
  [@Daniel Harned](https://github.com/DrDano)

  Email: [danielharned@gmail.com](mailto:danielharned@gmail.com)

  ## Contributing
  Fork the project if you would like to contribute. You can attach any front end to this application, so please feel free to create one!

  ## Credits
  
  * [mysql2](https://www.npmjs.com/package/mysql2)
  * [sequelize](https://sequelize.org/)
  * [express.js](https://expressjs.com/)
  * [dotenv](https://www.npmjs.com/package/dotenv)

  ## License
  Licensed under [MIT](https://choosealicense.com/licenses/mit) 2022 
  
  ![](https://img.shields.io/badge/license-MIT-blue)