import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import * as Yup from "yup";

dayjs.extend(customParseFormat);

const validationSchema = Yup.object().shape({
  nome: Yup.string()
    .required("Campo Obrigatório")
    .min(5, "Seu nome deve ter pelo menos 5 letras")
    .matches(/^[a-zA-Z\sÀ-ÖØ-öø-ÿ]+$/, "Seu nome deve conter apenas letras"),
  data_nascimento: Yup.string().required("Campo Obrigatório"),
  email: Yup.string().required("Campo Obrigatório").email("Email inválido"),
  senha: Yup.string().required("Campo Obrigatório"),
  confirmarSenha: Yup.string().required("Campo Obrigatório"),
  telefone: Yup.string()
    .required("Campo Obrigatório")
    .matches(/^\(\d{2}\) \d{5}-\d{4}$/, "Formato de telefone inválido"),
});

export default validationSchema;
