import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Insira um e-mail válido")
    .required("O campo e-mail é obrigatório"),
  senha: Yup.string()
    .required("O campo senha é obrigatório")
    .min(8, "A senha deve ter pelo menos 8 caracteres")
    .matches(/[A-Z]/, "A senha deve conter pelo menos uma letra maiúscula")
    .matches(/[a-z]/, "A senha deve conter pelo menos uma letra minúscula")
    .matches(/[0-9]/, "A senha deve conter pelo menos um número")
    .matches(
      /[@$!%*?&#]/,
      "A senha deve conter pelo menos um caractere especial (@, $, !, %, *, ?, & ou #)"
    ),
});

export default validationSchema;
