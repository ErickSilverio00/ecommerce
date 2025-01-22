import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  email: Yup.string().required("Campo Obrigatório"),
  senha: Yup.string().required("Campo Obrigatório"),
});

export default validationSchema;
