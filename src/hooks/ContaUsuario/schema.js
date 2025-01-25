import * as Yup from "yup";

export const validationDadosCadastraisSchema = Yup.object().shape({
  nomeCompleto: Yup.string()
    .required("Campo Obrigatório")
    .min(5, "Seu nome deve ter pelo menos 5 letras")
    .matches(/^[a-zA-Z\sÀ-ÖØ-öø-ÿ]+$/, "Seu nome deve conter apenas letras"),
  telefone: Yup.string()
    .required("Campo Obrigatório")
    .matches(/^\(\d{2}\) \d{5}-\d{4}$/, "Formato de telefone inválido"),
});

export const validationEnderecoSchema = Yup.object().shape({
  rua: Yup.string().required("Campo Obrigatório"),
  complemento: Yup.string().required("Campo Obrigatório"),
  bairro: Yup.string().required("Campo Obrigatório"),
  cep: Yup.string().required("Campo Obrigatório"),
  cidade: Yup.string().required("Campo Obrigatório"),
});
