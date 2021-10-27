var express = require("express");
var router = express.Router();
const allControllers = require("../controllers/controller");
const middleware = require("../middlewares/middleware");
const allProductControllers = require("../controllers/productsController");
//user route

// register http://localhost:5000/user/register
router.post("/register", middleware.validator, allControllers.addUser);

// login http://localhost:5000/user/login
router.post("/login", allControllers.login);

// register http://localhost:5000/user/logout
router.get("/logout", allControllers.logout);

//the login and the logout part and checkAuth works only on the browser
router.get("/checkAuth", middleware.checkToken);

//delete User
router.delete("/deleteUser", allControllers.deleteUser);
// get oneUser
router.get("/getOne", allControllers.getOneUser);


/* with post to add Product to the basket  http://localhost:5000/user/:id where id is the id of the user */
// it requres req.body.productID  => {
// "productID": "write the id of ur product"
// }
//
/* with get to view Products from a specific user (to view the basket) http://localhost:5000/user/:id where id is the id of the user */
//
/* with delete to remove a productID from basket(IF THE ID EXISTS 3 TIMES REMOVES IT ALL) http://localhost:5000/user/:id where id is the id of the user */

// get all products
router.get("/products", middleware.checkToken, allProductControllers.getAllProducts);
//when the user adds to basket a product that only sven can create http://localhost:5000/user/:id where the :id is the id of the user ....

// it requres req.body.productID  => {
// "productID": "write the id of ur product"
// }
router.post("/:id", allProductControllers.addToBasket).get("/:id", allProductControllers.getOneByID).delete("/:id", allProductControllers.removeFromBasket);
/* with put to chekout, pay, update the inventory and empty the basket http://localhost:5000/user/checkout/:id where id is the id of the user */
router.put("/checkout/:id", allProductControllers.getCheckout);
module.exports = router;
