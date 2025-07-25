import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const TitleManager = () => {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;

    const getTitle = () => {
      switch (path) {
        case '/':
          return 'Home';
        case '/login':
          return 'Login';
        case '/signup':
          return 'Sign Up';
        default:
          return 'My App';
      }
    };

    document.title = getTitle();
  }, [location]);

  return null;
};

export default TitleManager;