import { createRealmContext } from '@realm/react';
import uuid from 'react-native-uuid';
export const UserSchema = {
  name: 'Users',
  properties: {
    _id: String(uuid.v4()),
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
export const { RealmProvider, useObject, useQuery } =
  createRealmContext(realmConfig);

// Expose a realm
