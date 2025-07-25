import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const TitleManager = () => {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;

    const getTitle = () => {
      switch (path) {
        case '/':
          return 'Login';
        case '/login':
          return 'Login';
        case '/signup':
          return 'Sign Up';
        case '/home':
          return 'Home';
        default:
          return 'My App';
      }
    };

    document.title = getTitle();
  }, [location]);

  return null;
};

export default TitleManager;