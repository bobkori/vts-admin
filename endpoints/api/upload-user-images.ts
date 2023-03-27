import axios from "axios";
import { NEXT_PUBLIC_BASE_URL } from "@/config";

const uploadImage = async (image: Blob): Promise<string> => {
  const formdata = new FormData();
  formdata.append("image", image);
  const url = `${NEXT_PUBLIC_BASE_URL}/api/v1/uploads/series`;
  return new Promise(async (resolve, reject) => {
    try {
      const { data } = await axios.post(url, formdata);
      resolve(data as string);
    } catch (error) {
      reject(error);
    }
  });
};

export default uploadImage;
