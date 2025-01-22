import dayjs from "dayjs";
import * as Yup from "yup";

export const formatarMoeda = (valor) => {
  const partes = valor.toFixed(2).split(".");
  const numero = partes[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  return `R$ ${numero},${partes[1]}`;
};

export const desformatarMoeda = (valorFormatado) => {
  const valorNumerico = parseFloat(
    valorFormatado.replace("R$ ", "").replace(",", ".")
  );
  return valorNumerico;
};

export const formatarData = (texto) => {
  const data = dayjs(texto).add(3, "hour");
  const dataFormatada = data.format("DD/MM/YYYY");
  return dataFormatada;
};

export const formatarDataComHora = (texto) => {
  const data = dayjs(texto).subtract(3, "hour");
  const dataFormatada = data.format("DD/MM/YYYY");
  return dataFormatada;
};

export const formatarDataParaEnvio = (texto) => {
  const partes = texto.split("/");
  const ano = parseInt(partes[2], 10);
  const mes = parseInt(partes[1], 10) - 1;
  const dia = parseInt(partes[0], 10);
  const dataFormatadaParaEnvio = new Date(ano, mes, dia);
  const dataFormatada = dayjs(dataFormatadaParaEnvio).format("YYYY-MM-DD");

  return dataFormatada;
};

export const formatarCPFParaEnvio = (texto) => {
  return texto.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
};

export const formatarTelefoneParaEnvio = (texto) => {
  return texto.replace(/(\d{2}) (\d{5})(\d{4})/, "($1) $2-$3");
};

export const formatarCEPParaEnvio = (texto) => {
  return texto.replace(/(\d{5})(\d{3})/, "$1-$2");
};

export const formatarCNPJParaEnvio = (texto) => {
  return texto.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2$.3/$4-$5");
};

export const removerFormatacaoData = (texto) => {
  return texto.replace(/[/]/g, "");
};

export const removerFormatacaoTelefone = (texto) => {
  return texto.replace(/[-()]/g, "");
};

export const removerFormatacaoTelefone2 = (texto) => {
  return texto.replace(/[-()\s]/g, "");
};

export const removerFormatacaoCEP = (texto) => {
  return texto.replace(/[-]/g, "");
};

export const removerFormatacaoCNPJ = (texto) => {
  return texto.replace(/[.-/]/g, "");
};

export const removerFormatacaoCPF = (texto) => {
  return texto.replace(/[.-]/g, "");
};

export const formatarMedidas = (medidas) => {
  if (!Array.isArray(medidas)) {
    return "";
  }

  const medidasNumericas = medidas.filter((medida) => !isNaN(parseInt(medida)));
  const medidasNaoNumericas = medidas.filter((medida) =>
    isNaN(parseInt(medida))
  );

  const menorNumero =
    medidasNumericas.length > 0 ? Math.min(...medidasNumericas) : undefined;
  const maiorNumero =
    medidasNumericas.length > 0 ? Math.max(...medidasNumericas) : undefined;

  const ordenacaoTamanhos = {
    PP: 0,
    P: 1,
    M: 2,
    G: 3,
    GG: 4,
  };

  const ordenadoNaoNumerico = medidasNaoNumericas.sort(
    (a, b) => ordenacaoTamanhos[a] - ordenacaoTamanhos[b]
  );

  const menorNaoNumerico =
    ordenadoNaoNumerico.length > 0 ? ordenadoNaoNumerico[0] : undefined;
  const maiorNaoNumerico =
    ordenadoNaoNumerico.length > 0
      ? ordenadoNaoNumerico[ordenadoNaoNumerico.length - 1]
      : undefined;

  let resultado = "";

  if (menorNumero !== undefined && maiorNumero !== undefined) {
    resultado += `${menorNumero} ao ${maiorNumero}`;
  }

  if (
    menorNaoNumerico !== undefined &&
    maiorNaoNumerico !== undefined &&
    menorNaoNumerico.toLowerCase() === "tamanho único"
  ) {
    resultado = "Tamanho único";
  } else if (menorNaoNumerico !== undefined && maiorNaoNumerico !== undefined) {
    resultado +=
      resultado !== ""
        ? ` / ${menorNaoNumerico} ao ${maiorNaoNumerico}`
        : `${menorNaoNumerico} ao ${maiorNaoNumerico}`;
  } else if (resultado === "") {
    resultado = "Sem informações de tamanho";
  }

  return resultado;
};

export const ordenarMedidas = (medidas) => {
  const ordenacaoTamanhos = {
    PP: 0,
    P: 1,
    M: 2,
    G: 3,
    GG: 4,
  };

  const tamanhosNumericos = medidas
    .filter((medida) => !isNaN(parseInt(medida)))
    .map((medida) => parseInt(medida))
    .sort((a, b) => a - b);

  const tamanhosNaoNumericos = medidas
    .filter((medida) => isNaN(parseInt(medida)))
    .sort((a, b) => ordenacaoTamanhos[a] - ordenacaoTamanhos[b]);

  return [...tamanhosNumericos.map(String), ...tamanhosNaoNumericos];
};

export const makeValidation = async (schema, data, formRef, callback) => {
  formRef.current && formRef.current.setErrors({});

  try {
    await schema.validate(data, {
      abortEarly: false,
    });
    return true;
  } catch (err) {
    if (err instanceof Yup.ValidationError) {
      const validationErrors = {};
      err.inner.forEach((error) => {
        if (!error.path || !error.message) {
          return;
        }

        if (!validationErrors[error.path]) {
          validationErrors[error.path] = error.message;
        }
      });
      formRef.current && formRef.current.setErrors(validationErrors);
      callback && callback(validationErrors);
    }
    return false;
  }
};
