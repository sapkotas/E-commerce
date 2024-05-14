import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import http from "../../Service/AxiosInterceptor";


import "../CSS/LoginPage.css";
import Loading from "../../Components/Loading/Loading";

const LoginPage = () => {
  const email = useRef();
  const password = useRef();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [modalShown, setModalShown] = useState(false);
  const [modalText, setModalText] = useState("");

  const loginHandler = async (event) => {
    event.preventDefault();
    setLoading(true);

    const loginData = {
      email: email.current.value,
      password: password.current.value,
    };

    // Set timeout for the request
    const timeoutId = setTimeout(() => {
      setModalText("Request timed out. Please try again later.");
      setModalShown(true);
      setLoading(false);
    }, 10000); // 10 seconds timeout

    try {
      const response = await http.post("/users/login", loginData, {
        timeout: 10000, // 10 seconds timeout
      });
      const getAccessToken = response.data.accessToken;

      localStorage.setItem("accessToken", getAccessToken);

      if (response.data.status === "Success") {
        setModalText(response.data.message);
        setModalShown(true);
        navigate("/");
      } else {
        throw new Error("Login failed");
      }
    } catch (error) {
      let errorMessage = "Something went wrong"; // Default error message

      if (error.response && error.response.data) {
        errorMessage = `${error.response.data.status}: ${error.response.data.message}`;
      } else if (error.message) {
        errorMessage = error.message;
      }

      setModalText(errorMessage);
      setModalShown(true);
    } finally {
      clearTimeout(timeoutId); // Clear timeout if request completes
      setLoading(false);
    }
  };

  return (
    <div className="loginsignup">
      <div className="login-container">
        {loading ? (
          <p><Loading/></p>
        ) : (
          <form className="login-form" onSubmit={loginHandler}>
            <h2>Login</h2>
            <div className="form-group">
              <input
                type="text"
                id="username"
                placeholder="Email"
                ref={email}
              />
              <input
                type="password"
                id="password"
                placeholder="password"
                ref={password}
              />
              <button type="submit">Continue</button>
            </div>
            <div className="form-agree">
              <label>
                <input type="checkbox" /> I agree to the terms & conditions
              </label>
            </div>
          </form>
        )}
        <p className="login-login">
          Create an account ?{" "}
          <span>
            <Link to="/signup">Click here</Link>
          </span>
        </p>
        {modalShown && (
          <div className="modal">
            <p>{modalText}</p>
            <button onClick={() => setModalShown(false)}>Close</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginPage;
