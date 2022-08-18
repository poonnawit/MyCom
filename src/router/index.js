import { createRouter, createWebHistory } from "vue-router";

import AuthLogin from "../views/auth/AuthLogin.vue";
import AuthSignup from "../views/auth/AuthSignup.vue";

import ProductsList from "../views/customer/ProductsList.vue";
import ProductDetails from "../views/customer/ProductDetails.vue";
import CartPage from "../views/customer/CartPage.vue";
import OrdersPage from "../views/customer/OrdersPage.vue";

import AdminZone from "../views/admin/AdminZone.vue";
import AdminProdList from "../views/admin/AdminProdList.vue";
import AdminProdNew from "../views/admin/AdminProdNew.vue";
import AdminProdEdit from "../views/admin/AdminProdEdit.vue";
import AdminOrders from "../views/admin/AdminOrders.vue";

import NotFound from "../views/shared/NotFound.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", redirect: "/products" },
    { path: "/products", component: ProductsList, meta: { title: "Products" } },
    {
      path: "/products/:id",
      component: ProductDetails,
      props: true,
      meta: { title: "Products Details" },
    },
    { path: "/cart", component: CartPage, meta: { title: "Cart" } },
    { path: "/orders", component: OrdersPage, meta: { title: "Orders" } },
    {
      path: "/admin",
      redirect: "/admin/products",
      component: AdminZone,
      children: [
        { path: "products", component: AdminProdList, meta: { title: "Admin Products" } },
        { path: "orders", component: AdminOrders, meta: { title: "Admin Orders" } },
      ],
    },
    { path: "/admin/products/new", component: AdminProdNew, meta: { title: "New Product" } },
    {
      path: "/admin/products/edit/:id",
      component: AdminProdEdit,
      props: true,
      meta: { title: "Edit Product" },
    },
    { path: "/signup", component: AuthSignup, meta: { title: "Signup" } },
    { path: "/login", component: AuthLogin, meta: { title: "Login" } },
    { path: "/:pathMatch(.*)*", component: NotFound, meta: { title: "Not Found" } },
  ],
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title + " - MyCom";
  next();
});

export default router;
