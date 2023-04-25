import { createSelector } from "@reduxjs/toolkit";

//header
export const stateNavSelector = (state) => state.header.navigation;

//products
export const categorySelector = (state) => state.products.category;
export const productsSelector = (state) => state.products.data;
export const searchTextSelector = (state) => state.products.filters.search;
export const currentPageSelector = (state) =>
  state.products.filters.currentPage;
export const productsPerPageSelector = (state) =>
  state.products.filters.productsPerPage;

export const currentProductsSelector = createSelector(
  productsSelector,
  searchTextSelector,
  (products, searchText) => {
    if (searchText === "") {
      return products;
    } else {
      const listSearchProduct = products?.filter((product) => {
        return product.NameProduct.toLowerCase().includes(
          searchText.toLowerCase()
        );
      });
      return listSearchProduct;
    }
  }
);

//auth
export const messageLogin = (state) => state.auth.login.message;
export const messageRegister = (state) => state.auth.register.message;
export const messageUpdate = (state) => state.auth.update.message;

//user
export const currentUserSelector = (state) => state.auth.currentUser;
