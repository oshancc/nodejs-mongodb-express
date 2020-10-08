# nodejs-mongodb-express
node_modules are added
........................................added packages............................
npm install expess nodemon
npm install mongoose
npm install body-parser


........Run the application..............
npm run start


...............Database..................
MongoDB Atlas  cloud database service is used

Database name : assignment

Account details:
      email : oshancc@gmail.com
      password : oshan123
      
 User details:
      user name : dbUser
      password : dbUser
      
...................Change configuration AND USE.................
server running on port 3000
you can use Postman to run quaries after database is connected

GET http://localhost:3000/users  for display all users
POST http://localhost:3000/users/signup  to add new user
POST http://localhost:3000/users/login  to login status: 200 OK
GET http://localhost:3000/items  for display all items
POST http://localhost:3000/items/add  for add an item
DELETE http://localhost:3000/items/delete/itemId  for delete an idem     itemId= _id (from database)
UPDATE http://localhost:3000/items/update/itemId  to update price of an item    itemId= _id (from database)

