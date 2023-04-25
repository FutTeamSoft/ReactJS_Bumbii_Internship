import request from "~/utils/request";
import productsSlice from "~/pages/Products/productsSlice";

export const newProduct = async (soLuong) => {
  try {
    const res = await request.get(`products/latest/${soLuong}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const getAllProducts = async (dispatch) => {
  try {
    const res = await request.get("products/GetAllProduct");
    dispatch(productsSlice.actions.setProducts(res.data));
  } catch (error) {
    console.log(error);
  }
};

export const getAllProductsBySex = async (idSex, dispatch) => {
  try {
    const res = await request.get(`products/GetAllProductByIDSex/${idSex}`);
    dispatch(productsSlice.actions.setProducts(res.data));
  } catch (error) {
    console.log(error);
  }
};

export const getAllProductsBySexAndType = async (idSex, idType, dispatch) => {
  try {
    const res = await request.get(
      `products/GetAllProByIDSexAndType/${idSex}/${idType}`
    );
    dispatch(productsSlice.actions.setProducts(res.data));
  } catch (error) {
    console.log(error);
  }
};

export const getAllSex = async () => {
  try {
    const res = await request.get("products/GetAllSex");
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const getAllType = async () => {
  try {
    const res = await request.get("products/GetAllProductType");
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const getAllSizeByIdProduct = async (idProduct) => {
  try {
    const res = await request.get("products/getSizeByProduct/" + idProduct);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
