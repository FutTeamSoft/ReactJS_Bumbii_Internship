import request from "~/utils/request";

export const getAllInvoiceByIdUser = async (idUser, accessToken) => {
  const config = {
    headers: { Authorization: `Bearer ${accessToken}` },
  };
  try {
    const res = await request.get(
      "invoices/getInvoiceHistoryByCustomerId/" + idUser,
      config
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const getInvoiceDetailByIdInvoice = async (idInvoice) => {
  try {
    const res = await request.get(
      "invoices/getInvoiceDetailByInvoiceId/" + idInvoice
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const createInvoice = async (
  iduser,
  noteInvoice,
  Shipper,
  accessToken
) => {
  const config = {
    headers: { Authorization: `Bearer ${accessToken}` },
  };
  const invoice = {
    NoteInvoice: noteInvoice,
    Shipper: Shipper,
  };
  try {
    const res = await request.post(
      "invoices/createInvoice/" + iduser,
      invoice,
      config
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
