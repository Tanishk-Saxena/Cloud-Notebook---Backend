
# Cloud Notebook - Server

Built a full-stack application to allow users to store and maintain notes. Like a note-keeping system, it employs complete
user authentication using JWT and Bcrypt.js and the frontend is built upon react.js with a backend built upon Express.js.
The database is maintained through MongoDB.

This is its backend which is responsible for processing all the routes, containing and creating all the models for the database, for fetching from and storing into the mongoDB Atlas database, and for providing auth functionalities.

## Demo

https://cloud-notebook-backend.vercel.app/


## Run Locally

Clone the project

```bash
  git clone https://github.com/Tanishk-Saxena/Cloud-Notebook---Backend
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  node index.js
```


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`JWT_SECRET` - JWT Secret that is required for authentication purposes.
`mongoUri` - URI to your mongoDB Atlas Database