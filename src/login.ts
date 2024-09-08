import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./hooks/useAuth";
import useExpenses from "./hooks/useExpenses";
import { expensesData } from "./data";

const LOGIN_URL = "/login";

const login = async (username: string, password: string) => {
  const { setAuth } = useAuth();
  const { setExpenses } = useExpenses();

  const navigate = useNavigate();

  try {
    const response = await axios.post(
      LOGIN_URL,
      JSON.stringify({
        username,
        password,
      }),
      {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      }
    );
    const accessToken = response?.data?.accessToken;
    setAuth({ username, password, accessToken });
    setExpenses(() => expensesData[0].expenses);

    navigate("/homepage");
  } catch (err: { response?: string } | any) {
    if (!err?.response) {
      return "No server response";
    } else if (err.response?.status === 401) {
      return "Username or password is incorrect";
    } else {
      return "Login failed";
    }
  }
};

export default login;
