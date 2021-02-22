# CRUD-APP-USING-EXPRESS-AND-MONGOOSE

Trying to acces other pages(not the ones defined in the routes) will end up with the message "Wrong page! Try Again!"
/products -index page(show all the products and the link to add another product)
/products/new -add new product
/products/id(one id that exists in the database) -you can click one product from the index page to access this page as well. This is the show route for each product, with options "Edit product" and "DELETE", which can also redirects to the index page.
/products/id/edit - edit product

Db name:clothing
To access this app, you have to use:
-npm install to install all dependencies from the json file
-node index.js
-access localhost:3000 and the desired page(/products,/products/new, etc.)
-to check the results from your database, you have to open 2 command terminals:one with command "mongod", the other one with command "mongo".
-while you're in the mongo mode, you have to enter command "use clothing" to acces the required database. Enter the command "show collection" to check existing db collections.
-to find your results in the database, use db.products.find({}).


