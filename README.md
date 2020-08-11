# Mini Project: Study NodeJS - ExpressJS

### Tutorial:

https://www.youtube.com/playlist?list=PL_-VfJajZj0VatBpaXkEHK_UPHL7dW6I3

### Tech-Stack

- NodeJS
- Express
- Nodemon :
- morgan :
- express-handlebars
- MVC Model
- mongodb
- mongoose

### Deploy

-

### Function

-

### Dependencies

- `Nodemon`: is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected.
- `Morgan`: HTTP request logger middleware for node.js
- `express-handlerbars`: This view engine uses sensible defaults that leverage the "Express-way" of structuring an app's views.
- `mongoDB` : Non-sql database
- `mongoose` : is a MongoDB object modeling tool designed to work in an asynchronous environment. Mongoose supports both promises and callbacks.

### After this project

I have understand about

- MVC Model (Models, Views, Controllers)
- Web Services with NodeJS & Express
- using `Morgan` for HTTP request logger
- using Mongo DB: `NoSQL database` for storage data
- `POST` `GET` method
- Routing
- Query parameters
- Template Engine, split up to MVC model
- Validation data with `mongoose`
- CRUD functions (Create, Read, Update, Delete)

### Directory Structure

```
.
├── src
  ├── index.js
  ├── public
      ├── css
          └── app.css
      └── img
          └── logo.png
  ├── app
      ├── controllers
          ├── NewsController.js
          └── SiteController.js
      └── models
          ├── Course.js
  ├── routes
      ├── index.js
      ├── news.js
      └── site.js
  ├── resources
      ├── scss
          ├── _variables.scss
          └── app.scss
      └── views
          ├── layouts
              └── main.hbs
          ├── partials
              ├── footer.hbs
              └── header.hbs
          ├── home.hbs
          └── news.hbs
  └── util
      └── mongoose.js
├── package.json
├── package-lock.json
└── nodemon.json
```

### Set up

`npm install` and `npm start`

### Screenshot
