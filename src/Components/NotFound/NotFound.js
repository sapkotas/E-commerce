import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/');
    }, 4000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="not-found">
      <div className="not-found-content">
        <h1>404</h1>
        <p>Page Not Found</p>
        <p>Redirecting to the home page in few seconds...</p>
        <button onClick={() => navigate('/')}>Go to Home Now</button>
      </div>
    </div>
  );
};

export default NotFound;
