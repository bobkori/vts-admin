import axios from "axios";
import { NEXT_PUBLIC_BASE_URL } from "@/config";

//AUTH API
const login = (payload: { email: string; password: string }) => {
  return axios.post(`${NEXT_PUBLIC_BASE_URL}/api/v1/auth/login`, payload);
};
export default login;
