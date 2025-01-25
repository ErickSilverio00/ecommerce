import * as Yup from "yup";

export const validationEnderecoSchema = Yup.object().shape({
  rua: Yup.string().required("Campo Obrigatório"),
  complemento: Yup.string().required("Campo Obrigatório"),
  bairro: Yup.string().required("Campo Obrigatório"),
  cep: Yup.string().required("Campo Obrigatório"),
  cidade: Yup.string().required("Campo Obrigatório"),
});
