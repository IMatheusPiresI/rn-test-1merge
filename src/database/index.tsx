import { IUserReference } from './schemas/UserSchema';

export const writeNewUserPhoto = (
  realm: Realm,
  userId: string,
  base64: string,
) => {
  const userObject = realm.objectForPrimaryKey(
    'Users',
    userId,
  ) as IUserReference;

  realm.write(() => {
    userObject.photoUrl = base64;
  });
};
