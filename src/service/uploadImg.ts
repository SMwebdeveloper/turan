import { api } from "./admin";
export const uploadImageFn = async (e: any) => {
  try {
    const response = await fetch(`${api}admin/teachers/`, {
      method: "POST",
      body: e,
    });
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};
