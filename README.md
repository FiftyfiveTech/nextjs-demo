## [Next.js](https://nextjs.org/learn)

This is a sample application developed to showcase Next.js capabilities. This application also makes use of the latest addition in v13 of nextjs i.e. `app` directory and the changes associated with it. The presentation with basics of Next.js is at [Next.js PPT](https://docs.google.com/presentation/d/199XapRR-nac1DBlZNCtseLcdN3tGNgpKJgMZD9mWhxQ/edit?usp=sharing)

## To run this example

1. Clone this repo and then do `cd nextjs-demo` in terminal
2. Run command `npm install`
3. To run the application use command `npm run dev`
4. Visit `http://localhost:3000/` to browse the application

## To run this example with app directory

1. Rename `_app` directory in root to `app`
2. Rename `pages` directory in root to `_pages`
3. Restart the application

## To run this example with DB connectivity

### Setup MongoDB

1. Install [MongoDB](https://www.mongodb.com/docs/manual/installation/)
2. Open mongo shell using `mongosh` command
3. Enable auth by creating a new user [MongoDB auth](https://www.mongodb.com/docs/manual/tutorial/configure-scram-client-authentication/)
4. Create a new DB named `nextjs-mongodb-demo` using command `use nextjs-mongodb-demo`
5. Create a new collection named `users` using command `db.createCollection('users')`
6. Use `env.example` to create a `env.local` file and add the values for `MONGODB_URI`, `MONGODB_NAME` and `MONGODB_COLLECTION`
7. Alternatively, you can also use [MongoDB atlas](https://www.mongodb.com/atlas/database) and skip local setup of mongodb

### Setup MySQL

1. Install [MySQL](https://dev.mysql.com/doc/refman/5.7/en/installing.html)
2. Create a new schema called `users`
3. Create a new table called `user` in `users` with the following columns
   - `id` - varchar(16) PK
   - `firstName` - char(45)
   - `lastName` - char(45)
   - `imageUrl` - char(45)
4. Set the password for `root@localhost` user
5. In `env.local` file add the values for `MYSQL_HOST`, `MYSQL_PORT`, `MYSQL_DATABASE`, `MYSQL_USER` and `MYSQL_PASSWORD`

> After setting up mongodb and mysql you can visit `http://localhost:3000/register` to check the API's in action
