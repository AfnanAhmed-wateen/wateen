import React from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar, Footer } from "./components";
import {
  Home,
  Restaurants,
  Distributors,
  APManager,
  CookbookSoftware,
  ExpensesTracking,
  InventoryManagement,
  InvoiceManager,
  MultiUnitsAndChains,
  OrderManager,
  PurchasingAndOrderManagement,
  RecipeCoastingSoftware,
  RestuarantVendorPayments,
  RestaurantManagementSoftware,
  ARManager,
  Plans,
  Login,
  LetsTalk,
  Blogs,
  BlogDetails,
  AccountingAndERPSytems,
  POS,
  AccountingAndERPSytemsBuyers,
  Ecommerce,
  IPAAS,
} from "./pages";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="*" element={<h1>404</h1>} />
        <Route path="/" element={<Home />} />
        <Route path="restaurants" element={<Restaurants />} />
        <Route path="distributors" element={<Distributors />} />
        <Route path="/a-p-manager" element={<APManager />} />
        <Route path="/cookbook-software" element={<CookbookSoftware />} />
        <Route path="/expenses-tracking" element={<ExpensesTracking />} />
        <Route path="/inventory-management" element={<InventoryManagement />} />
        <Route path="/invoice-manager" element={<InvoiceManager />} />
        <Route path="/multi-units-&-chains" element={<MultiUnitsAndChains />} />
        <Route path="/order-manager" element={<OrderManager />} />
        <Route
          path="/purchasing-&-order-management"
          element={<PurchasingAndOrderManagement />}
        />
        <Route
          path="/recipe-coasting-software"
          element={<RecipeCoastingSoftware />}
        />
        <Route
          path="/restaurant-vendor-payments"
          element={<RestuarantVendorPayments />}
        />
        <Route
          path="/restaurant-management-software"
          element={<RestaurantManagementSoftware />}
        />
        <Route path="/a-r-manager" element={<ARManager />} />
        <Route path="/blog" element={<Blogs />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
        <Route path="/plans" element={<Plans />} />
        <Route path="/login" element={<Login />} />
        <Route path="/lets-talk" element={<LetsTalk />} />
        <Route
          path="/accounting-&-e-r-p-systems-suppliers"
          element={<AccountingAndERPSytems />}
        />
        <Route path="/p-o-s" element={<POS />} />
        <Route
          path="/accounting-&-e-r-p-systems-buyers"
          element={<AccountingAndERPSytemsBuyers />}
        />
        <Route path="/ecommerce" element={<Ecommerce />} />
        <Route
          path="/integration-platform-(i-paa-s-)-buyers"
          element={<IPAAS />}
        />
        <Route
          path="/integration-platform-(i-paa-s-)-suppliers"
          element={<IPAAS />}
        />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
