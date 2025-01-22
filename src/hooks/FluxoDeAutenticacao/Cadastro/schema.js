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
  cpf: Yup.string()
    .required("Campo Obrigatório")
    .matches(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, "Formato de CPF inválido")
    .test("is-valid-cpf", "CPF inválido", (value) => {
      const cleanCpf = value.replace(/\D/g, "");
      let sum = 0;
      let rest;
      if (/^(\d)\1+$/.test(cleanCpf)) return false;
      for (let i = 0; i < 9; i++) {
        sum += parseInt(cleanCpf.charAt(i)) * (10 - i);
      }
      rest = sum % 11;
      rest = rest < 2 ? 0 : 11 - rest;
      if (rest !== parseInt(cleanCpf.charAt(9))) return false;
      sum = 0;
      for (let i = 0; i < 10; i++) {
        sum += parseInt(cleanCpf.charAt(i)) * (11 - i);
      }
      rest = sum % 11;
      rest = rest < 2 ? 0 : 11 - rest;
      return rest === parseInt(cleanCpf.charAt(10));
    }),
  email: Yup.string().required("Campo Obrigatório").email("Email inválido"),
  senha: Yup.string().required("Campo Obrigatório"),
  confirmarSenha: Yup.string().required("Campo Obrigatório"),
  telefone: Yup.string()
    .required("Campo Obrigatório")
    .matches(/^\(\d{2}\) \d{5}-\d{4}$/, "Formato de telefone inválido"),
});

export default validationSchema;
