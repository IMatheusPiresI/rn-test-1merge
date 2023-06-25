import { IUserReference } from '@database/schemas/UserSchema';
import { createContext, ReactNode, useState } from 'react';

type IAuthProvider = {
  children: ReactNode;
};

type IAuthContext = {
  user: IUserReference | null;
  setUser: React.Dispatch<React.SetStateAction<IUserReference | null>>;
  changePhotoUser: (photo: string) => void;
};

export const AuthContext = createContext({} as IAuthContext);

export const AuthContextProvider = ({ children }: IAuthProvider) => {
  const [user, setUser] = useState<IUserReference | null>(null);

  const changePhotoUser = (photo: string) => {
    if (!user) return;
    setUser({
      _id: user._id,
      created_at: user.created_at,
      email: user.email,
      name: user.name,
      password: user.password,
      surname: user.surname,
      photoUrl: photo,
    });
  };

  return (
    <AuthContext.Provider value={{ setUser, changePhotoUser, user }}>
      {children}
    </AuthContext.Provider>
  );
};
