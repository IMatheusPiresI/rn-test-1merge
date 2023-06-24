import * as Yup from 'yup';

export const signInSchema = Yup.object().shape({
  email: Yup.string().email('E-mail invalid').required('Required Field'),
  password: Yup.string().required('Required field').trim(''),
});

export type ISignInSchema = {
  email: string;
  password: string;
};
