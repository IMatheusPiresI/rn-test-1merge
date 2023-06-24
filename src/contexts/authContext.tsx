import { IUserReference } from '@database/schemas/UserSchema';
import { createContext, ReactNode, useState } from 'react';

type IAuthProvider = {
  children: ReactNode;
};

type IAuthContext = {
  user: IUserReference | null;
  setUser: React.Dispatch<React.SetStateAction<IUserReference | null>>;
};

export const AuthContext = createContext({} as IAuthContext);

export const AuthContextProvider = ({ children }: IAuthProvider) => {
  const [user, setUser] = useState<IUserReference | null>(null);

  return (
    <AuthContext.Provider value={{ setUser, user }}>
      {children}
    </AuthContext.Provider>
  );
};
