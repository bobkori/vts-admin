import axios from "axios";
import { NEXT_PUBLIC_BASE_URL } from "@/config";

//AUTH API
const login = () => {
  return axios.post(`${NEXT_PUBLIC_BASE_URL}/api/v1/auth/logout`);
};
export default login;
