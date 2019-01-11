# DRINKS APP

  * LINKS:

    Heroku: https://arcadia-project2.herokuapp.com/

    Github: https://git.generalassemb.ly/lisaward50/Project2


  * APPROACH TAKEN: 

    In building out the app, I first created the server and checked that this was working. For the data, I created a small set of information from an existing website and then used sequelize to build the model structure. Next I used a seed file to bulk create the data. The next step was to set up the routers and controllers. I did this for two initial routes (/drinks and /categories) and then added in view controllers which simply showed the basic data pulling through. Finally I tried to set up a front-end for the app around the back-end structure.

  * USER STORIES: 

    Designed for people who like to drink cocktails and bartenders. Two separate user types within login page to distinguish the two. Currently this is just a prototype leading to drinks and categories. However ideally I would want to build this out so that drinkers can only view or search for drinks. Bartenders would be able to add, edit and delete drinks. 

  * TECHNOLOGIES:

    Node.js / Express app

    Sequelize used for data model (within models/index.js)

    Database stored in postgres (for raw data see data/index.js)


  * INSTALLATION INSTRUCTIONS:

    To seed the database, simply type the following in the command line:

    yarn db:init
    yarn db:reset
    yarn db:seed

    Then to connect the server type the following into the command line:

    yarn dev

  * FEATURES:

    Detailed drinks list including images, ingredients and instructions

    Drink category list

    Forms to add new drinks and categories

  
  * EXTERNAL MODULES

    Express, Express-React-Views, Morgan, Postgres, React, React-DOM, Sequelize, Sequelize-CLI, Body-Parser, Method-Override, Prop-Types
