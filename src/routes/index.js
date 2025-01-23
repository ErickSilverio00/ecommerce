import React, { Suspense, lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import useAuthStore from "../stores/useAuthStore";
import Preloading from "../templates/PreLoading";
import RotaErrada from "../templates/RotaErrada";

const TelaInicial = lazy(() => import("../pages/TelaInicial"));
const Acessorios = lazy(() => import("../pages/Produtos/Acessorios"));
const Calcados = lazy(() => import("../pages/Produtos/Calcados"));
const Colecoes = lazy(() => import("../pages/Colecoes"));
const Favoritos = lazy(() => import("../pages/Favoritos"));
const Roupas = lazy(() => import("../pages/Produtos/Roupas"));
const Feminino = lazy(() => import("../pages/Produtos/Feminino"));
const Masculino = lazy(() => import("../pages/Produtos/Masculino"));
const PaginaProduto = lazy(() => import("../pages/PaginaProduto"));
const BuscaProdutos = lazy(() => import("../pages/Produtos/BuscaProdutos"));
const Login = lazy(() => import("../pages/FluxoDeAutenticacao/Login"));
const Cadastro = lazy(() => import("../pages/FluxoDeAutenticacao/Cadastro"));
const EsqueciSenha = lazy(() =>
  import("../pages/FluxoDeAutenticacao/EsqueciSenha")
);
const ContaUsuario = lazy(() => import("../pages/ContaUsuario"));
const Carrinho = lazy(() => import("../pages/Carrinho"));
const PagamentoConcluido = lazy(() =>
  import("../pages/Carrinho/PagamentoConcluido")
);
const PagamentoFalhou = lazy(() => import("../pages/Carrinho/PagamentoFalhou"));

const ProtectedRoute = ({ element, isPrivate }) => {
  const { user } = useAuthStore();
  const isAuthenticated = user;

  if (isPrivate && !isAuthenticated) {
    return <Navigate to="/" />;
  }

  return element;
};

export default function Rotas() {
  return (
    <Suspense fallback={<Preloading />}>
      <Routes>
        <Route path="*" element={<RotaErrada />} />
        <Route path="/" element={<TelaInicial />} />
        <Route path="/acessorios" element={<Acessorios />} />
        <Route path="/calcados" element={<Calcados />} />
        <Route path="/colecoes" element={<Colecoes />} />
        <Route
          path="/favoritos"
          element={<ProtectedRoute element={<Favoritos />} isPrivate />}
        />
        <Route path="/roupas" element={<Roupas />} />
        <Route path="/feminino" element={<Feminino />} />
        <Route path="/masculino" element={<Masculino />} />
        <Route path="/produto/:name" element={<PaginaProduto />} />
        <Route path="/busca/:busca" element={<BuscaProdutos />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/esqueci-senha" element={<EsqueciSenha />} />
        <Route
          path="/minha-conta"
          element={<ProtectedRoute element={<ContaUsuario />} isPrivate />}
        />
        <Route
          path="/carrinho"
          element={<ProtectedRoute element={<Carrinho />} isPrivate />}
        />
        <Route
          path="/carrinho/pagamento-concluido"
          element={
            <ProtectedRoute element={<PagamentoConcluido />} isPrivate />
          }
        />
        <Route
          path="/carrinho/pagamento-falhou"
          element={<ProtectedRoute element={<PagamentoFalhou />} isPrivate />}
        />
      </Routes>
    </Suspense>
  );
}
