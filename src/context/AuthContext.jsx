import  { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [state, setState] = useState({
    user: null,
    isAuthenticated: false
  });

  const login = (email, password) => {
    if (email && password) {
      setState({
        user: { id: 1, name: 'Aruna', email, phone: '1234567890' },
        isAuthenticated: true
      });
      return true;
    }
    return false;
  };

  const register = (name, email, password, phone) => {
    if (name && email && password && phone) {
      setState({
        user: { id: 1, name, email, phone },
        isAuthenticated: true
      });
      return true;
    }
    return false;
  };

  const logout = () => {
    setState({ user: null, isAuthenticated: false });
  };

  return (
    <AuthContext.Provider value={{ state, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
};
 
