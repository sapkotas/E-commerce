import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import http from "../../Service/AxiosInterceptor";
import "./Modal.css";
import "../CSS/LoginPage.css";

const SignUp = () => {
  const fullName = useRef();
  const email = useRef();
  const password = useRef();
  const confirmPassword = useRef();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [modalShown, setModalShown] = useState(false);
  const [modalText, setModalText] = useState("");

  const signupHandler = async (event) => {
    event.preventDefault();
    setLoading(true);

    const signupData = {
      fullName: fullName.current.value,
      email: email.current.value,
      password: password.current.value,
      confirmPassword: confirmPassword.current.value,
    };

    // Set timeout for the request
    const timeoutId = setTimeout(() => {
      setModalText("Request timed out. Please try again later.");
      setModalShown(true);
      setLoading(false);
    }, 10000); // 10 seconds timeout

    try {
      const response = await http.post("/users/register", signupData);
      const accessToken = response.data.accessToken;

      localStorage.setItem("accessToken", accessToken);

      if (response.data.status === "success") {
        setModalText(response.data.message);
        setModalShown(true);
        
        navigate("/");
      } else {
        throw new Error("Signup failed");
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
          <p>Loading...</p>
        ) : (
          <form className="login-form" onSubmit={signupHandler}>
            <h2>Signup</h2>
            <div className="form-group">
              <input
                type="text"
                id="fullName"
                placeholder="Full Name"
                ref={fullName}
              />
              <input
                type="text"
                id="email"
                placeholder="Email"
                ref={email}
              />
              <input
                type="password"
                id="password"
                placeholder="Password"
                ref={password}
              />
              <input
                type="password"
                id="confirmPassword"
                placeholder="Confirm Password"
                ref={confirmPassword}
              />
              <button type="submit">Signup</button>
            </div>

            <div className="form-agree">
              <label>
                <input type="checkbox" /> I agree to the terms & conditions
              </label>
            </div>
          </form>
        )}

        {/* Custom Modal */}
        {modalShown && (
          <div className="modal">
            <div className="modal-content">
              <span
                className="close"
                onClick={() => {
                  setModalShown(false);
                }}
              >
                &times;
              </span>
              <p>{modalText}</p>
              <button
                onClick={() => {
                  setModalShown(false);
                }}
              >
                Close
              </button>
            </div>
          </div>
        )}

        <p className="login-login">
          Already have an account?{" "}
          <span>
            <Link to="/login">Click here</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
