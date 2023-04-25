import request from "~/utils/request";

export const addCart = async (product) => {
  try {
    const res = await request.post("products/addCart", product);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const getAllCartByIdUser = async (idUser) => {
  try {
    const res = await request.get("products/GetCartByAccID/" + idUser);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteAllCartByIdUser = async (idUser) => {
  try {
    const res = await request.delete(
      "products/DeleteAllProductInCart/" + idUser
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const updateQuantityCart = async (idCart, quantity) => {
  const CartUpdateQuantity = {
    CartProductQuantity: quantity,
  };
  try {
    const res = await request.patch(
      "products/updateCart/" + idCart,
      CartUpdateQuantity
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteCartByIdCart = async (idCart) => {
  try {
    const res = await request.delete("products/DeleteCartByID/" + idCart);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
