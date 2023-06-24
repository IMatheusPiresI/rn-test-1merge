import * as Yup from 'yup';

export const registerSchema = Yup.object().shape({
  name: Yup.string().required('Required Field'),
  surname: Yup.string().required('Required Field'),
  email: Yup.string().email('E-mail invalid').required('Required Field'),
  password: Yup.string()
    .required('Required field')
    .min(6, 'Minimun 6 characters')
    .matches(
      /^(?=.*[A-Z]).{6,}$/,
      'Password must contain at least one uppercase letter',
    )
    .trim(''),
  confirmPassword: Yup.string()
    .required('Required field')
    .oneOf([Yup.ref('password')], 'Passwords do not match')
    .trim(''),
});

export type IRegisterSchema = {
  name: string;
  surname: string;
  email: string;
  password: string;
  confirmPassword: string;
};
