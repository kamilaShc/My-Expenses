import { useFormik } from "formik";
import { useEffect, useRef, useState } from "react";
import useAuth from "../hooks/useAuth";

import axios from "../api/axios";
import { useNavigate } from "react-router-dom";
const LOGIN_URL = "/login";

interface LoginFormValues {
  username: string;
  password: string;
}

const validate = (values: LoginFormValues) => {
  const errors: { username?: string; password?: string } = {};
  if (!values.username) {
    errors.username = `Login is required`;
  }
  if (!values.password) {
    errors.password = `Password is required`;
  }
  return errors;
};

export const LoginForm = () => {
  const { setAuth } = useAuth();
  const userRef = useRef<HTMLInputElement | null>(null);
  const [errMsg, setErrMsg] = useState("");
  // const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validate,
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: () => {
      handleSubmit();
    },
  });

  useEffect(() => {
    userRef.current?.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [formik.values.username, formik.values.password]);

  const handleSubmit = async () => {
    try {
      const { username, password } = formik.values;
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
      navigate("/homepage");
      // setSuccess(true);
    } catch (err: { response?: string } | any) {
      if (!err?.response) {
        setErrMsg("No server response");
      } else if (err.response?.status === 401) {
        setErrMsg("Username or password is incorrect");
      } else {
        setErrMsg("Login failed");
      }
    }
  };

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          formik.handleSubmit();
        }}
      >
        <div className="form-group">
          <label htmlFor="login">Username</label>
          <input
            type="text"
            className="form-control shadow-none"
            id="username"
            ref={userRef}
            name="username"
            placeholder="Enter Username"
            onChange={formik.handleChange}
            value={formik.values.username}
          />
          {formik.errors.username && (
            <small className="text-danger">{formik.errors.username}</small>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control shadow-none"
            id="password"
            name="password"
            placeholder="Enter Password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.errors.password && (
            <small className="text-danger">{formik.errors.password}</small>
          )}
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Sign In
        </button>
      </form>
      <small className="text-danger">{errMsg}</small>
    </>
  );
};
