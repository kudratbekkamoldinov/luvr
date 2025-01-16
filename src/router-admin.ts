import express from "express";
const routerAdmin = express.Router();
import productController from "./controllers/product.controller";
import makeUploader from "./libs/utils/uploader";
import shopController from "./controllers/shop.controller";

routerAdmin.get("/", shopController.goHome);

routerAdmin
  .get("/signup", shopController.getSignup)
  .post(
    "/signup",
    makeUploader("members").single("memberImage"),
    shopController.processSignup
  );
  
routerAdmin
  .get("/login", shopController.getLogin)
  .post("/login", shopController.processLogin);



routerAdmin.get("/logout", shopController.logout);
routerAdmin.get("/check-me", shopController.checkAuthSession);

/**  Product */
routerAdmin.get(
  "/product/all",
  shopController.verifyShop,
  productController.getAllProducts
);
routerAdmin.post(
  "/product/create",
  shopController.verifyShop,
  makeUploader("products").array("productImages", 5),
  productController.createNewProduct
);
routerAdmin.post(
  "/product/:id",
  shopController.verifyShop,
  productController.updateChosenProduct
);

/**  User */
routerAdmin.get(
  "/user/all",
  shopController.verifyShop,
  shopController.getUsers
);
routerAdmin.post(
  "/user/edit",
  shopController.verifyShop,
  shopController.updateChosenUser
);

export default routerAdmin;
