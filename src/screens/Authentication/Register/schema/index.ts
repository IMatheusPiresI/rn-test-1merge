import * as Yup from 'yup';

export const registerSchema = Yup.object().shape({
  name: Yup.string().required('Required Field'),
  surname: Yup.string().required('Required Field'),
  email: Yup.string().email('E-mail invalid').required('Required Field'),
  password: Yup.string().required('Required Field'),
  confirmPassword: Yup.string().required('Required Field'),
});

export type IRegisterSchema = {
  name: string;
  surname: string;
  email: string;
  password: string;
  confirmPassword: string;
};
