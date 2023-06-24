import { createRealmContext } from '@realm/react';
import uuid from 'react-native-uuid';

export type IUserReference = {
  _id: string;
  name: string;
  surname: string;
  email: string;
  password: string;
  photoUrl: string;
  created_at: string;
};
export const UserSchema = {
  name: 'Users',
  properties: {
    _id: { type: 'string', default: String(uuid.v4()) },
    name: 'string',
    surname: 'string',
    email: 'string',
    password: 'string',
    photoUrl: 'string',
    created_at: 'date',
  },

  primaryKey: '_id',
};

// Create a configuration object
const realmConfig: Realm.Configuration = {
  schema: [UserSchema],
};

// Create a realm context
export const { RealmProvider, useObject, useQuery, useRealm } =
  createRealmContext(realmConfig);
