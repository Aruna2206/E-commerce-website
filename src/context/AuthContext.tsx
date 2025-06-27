import  { createContext, useContext, useState, ReactNode } from 'react';

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
}

const AuthContext = createContext<{
  state: AuthState;
  login: (email: string, password: string) => boolean;
  register: (name: string, email: string, password: string, phone: string) => boolean;
  logout: () => void;
} | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState<AuthState>({
    user: null,
    isAuthenticated: false
  });

  const login = (email: string, password: string) => {
    // Simulate login
    if (email && password) {
      setState({
        user: { id: 1, name: 'Rahul Sharma', email, phone: '9876543210' },
        isAuthenticated: true
      });
      return true;
    }
    return false;
  };

  const register = (name: string, email: string, password: string, phone: string) => {
    // Simulate registration
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
 