import MenuIcon from "@mui/icons-material/Menu";
import { Button, IconButton, useMediaQuery } from "@mui/material";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import {
  ArrowLeft,
  CoatHanger,
  Heart,
  House,
  MagnifyingGlass,
  ShoppingCart,
  SignIn,
  SignOut,
  SketchLogo,
  SneakerMove,
  TShirt,
  UserCircle,
} from "@phosphor-icons/react";
import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logoMC from "../../assets/img/logoMatheusCalcados2.png";
import useAuthStore from "../../stores/useAuthStore";
import useCarrinhoStore from "../../stores/useCarrinhoStore";
import useProdutosCurtidos from "../../stores/useProdutosCurtidosStore";
import useProdutos from "../../stores/useProdutosStore";
import { colors } from "../../styles/colors";
import {
  ContainerBotaoBuscar,
  ContainerContadorItens,
  ContainerFooterMenu,
  ContainerHeader,
  ContainerItem,
  ContainerListaDeBuscas,
  ContainerLoginCadastro,
  ContainerSearch,
  ContainerVoltarDrawer,
  FirstLine,
  FirstLineLeft,
  FirstLineRight,
  ImgItem,
  InputSearch,
  ItemListaDeBuscas,
  LogoMC,
  SecondLine,
  SecondLineNav,
  TextLoginCadastro,
  TextoContadorItens,
  TextoItens,
  TextoProduto,
  TextoProdutoNaoEncontrado,
} from "./styles";

export default function Header() {
  const navigate = useNavigate();
  const { user, logout } = useAuthStore();
  const firstMediaQuery = useMediaQuery("(max-width: 744px)");
  const secondMediaQuery = useMediaQuery("(max-width: 672px)");
  const thirdMediaQuery = useMediaQuery("(max-width: 500px)");
  const [showSecondLine, setShowSecondLine] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [estaBuscando, setEstabuscando] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const searchContainerRef = useRef(null);
  const inputRef = useRef(null);
  const { produtos, buscarProdutos } = useProdutos();
  const carrinho = useCarrinhoStore();
  const produtosCurtidos = useProdutosCurtidos();

  const listaDeItens = [
    {
      texto: "Tela Inicial",
      tela: "Tela Inicial",
      Icone: House,
      rota: "/",
    },
    {
      texto: "Coleções",
      tela: "Colecoes",
      Icone: CoatHanger,
      rota: "/colecoes",
    },

    {
      texto: "Roupas",
      tela: "Roupas",
      Icone: TShirt,
      rota: "/roupas",
    },
    {
      texto: "Calçados",
      tela: "Calçados",
      Icone: SneakerMove,
      rota: "/calcados",
    },
    {
      texto: "Acessórios",
      tela: "Acessórios",
      Icone: SketchLogo,
      rota: "/acessorios",
    },
  ];

  const handleBotaoClick = (index, rota) => {
    setDrawerOpen(false);
    navigate(rota);
  };

  const toggleDrawer = (open) => (event) => {
    setDrawerOpen(open);
  };

  const handleSearch = async (query) => {
    setSearchInput(query);

    if (query.length >= 3) {
      await buscarProdutos();

      const removeAccents = (str) => {
        return str
          .replace(/[áàãâä]/g, "a")
          .replace(/[éèêë]/g, "e")
          .replace(/[íìîï]/g, "i")
          .replace(/[óòõôö]/g, "o")
          .replace(/[úùûü]/g, "u")
          .replace(/[ç]/g, "c");
      };

      const normalizedQuery = removeAccents(query.toLowerCase());
      const filteredResults = produtos.filter((produto) => {
        const normalizedProductName = removeAccents(
          produto.nome_produto.toLowerCase()
        );
        const normalizedCategory = removeAccents(
          produto.categoria_produto.toLowerCase()
        );
        const normalizedSubCategory = removeAccents(
          produto.subcategoria_produto.toLowerCase()
        );
        const normalizedGenero = removeAccents(
          produto.genero_produto.toLowerCase()
        );
        const normalizedMarca = removeAccents(
          produto.marca_produto.toLowerCase()
        );

        return (
          normalizedProductName.includes(normalizedQuery) ||
          normalizedCategory.includes(normalizedQuery) ||
          normalizedSubCategory.includes(normalizedQuery) ||
          normalizedGenero.includes(normalizedQuery) ||
          normalizedMarca.includes(normalizedQuery)
        );
      });

      setSearchResults(filteredResults);
    } else {
      setSearchResults([]);
    }
  };

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setSearchInput(inputValue);

    if (inputValue.length >= 3) {
      handleSearch(inputValue);
      setEstabuscando(true);
    } else {
      setSearchResults([]);
      setEstabuscando(false);
    }
  };

  const aoClicarNoProdutoEscolhido = () => {
    setSearchInput("");
    setSearchResults([]);
    setEstabuscando(false);
  };

  const handleDocumentClick = (event) => {
    if (
      searchContainerRef.current &&
      !searchContainerRef.current.contains(event.target)
    ) {
      setSearchResults([]);
      setEstabuscando(false);
    }
  };

  const handleSearchButtonClick = () => {
    if (searchInput.length >= 3) {
      navigate(`/busca/${searchInput}`);
      aoClicarNoProdutoEscolhido();
      if (inputRef.current) {
        inputRef.current.blur();
      }
    }
  };

  const handleKeyPress = (e) => {
    if (searchResults.length > 0) {
      if (e.key === "ArrowDown") {
        e.preventDefault(); // Evitar que a página role
        setSelectedIndex((prevIndex) =>
          prevIndex < searchResults.length - 1 ? prevIndex + 1 : 0
        );
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prevIndex) =>
          prevIndex > 0 ? prevIndex - 1 : searchResults.length - 1
        );
      } else if (e.key === "Enter" && selectedIndex >= 0) {
        // Quando pressionar Enter, redirecionar para a opção selecionada
        const selectedItem = searchResults[selectedIndex];
        if (selectedItem) {
          window.location.href = `/produto/${selectedItem.nome_produto}`;
        }
      }
    }
  };

  const sairDoSistema = () => {
    logout();
    window.location.reload();
  };

  useEffect(() => {
    document.addEventListener("click", handleDocumentClick);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 200;
      setShowSecondLine(scrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <ContainerHeader>
      <FirstLine
        style={{
          backgroundColor: showSecondLine
            ? colors.primaria
            : !showSecondLine && thirdMediaQuery
            ? colors.primaria
            : colors.primaria,
        }}
      >
        <FirstLineLeft>
          <Link to="/" className="link_logo">
            <LogoMC
              src={logoMC}
              alt="Logo da Matheus Calçados que é vermelha e cinza"
            />
          </Link>
          <ContainerSearch ref={searchContainerRef}>
            <InputSearch
              type="text"
              placeholder={
                secondMediaQuery
                  ? "O que você procura?"
                  : "O que você está procurando?"
              }
              value={searchInput}
              onChange={handleInputChange}
              onKeyDown={handleKeyPress}
              ref={inputRef}
            />
            <ContainerBotaoBuscar
              type="button"
              onClick={handleSearchButtonClick}
            >
              <MagnifyingGlass size={20} weight="bold" color={colors.branco} />
            </ContainerBotaoBuscar>
            {searchResults.length > 0 && (
              <ContainerListaDeBuscas>
                {searchResults.map((result, index) => (
                  <Link
                    style={{ textDecoration: "none" }}
                    to={`/produto/${result.nome_produto}`}
                    onClick={aoClicarNoProdutoEscolhido}
                    key={index}
                  >
                    <ItemListaDeBuscas
                      key={index}
                      className={index === selectedIndex ? "selected" : ""}
                    >
                      <ImgItem
                        src={result.variacoes[0].imagens_variacao_produto[0]}
                        alt={result.nome_produto}
                      />
                      <TextoProduto>{result.nome_produto}</TextoProduto>
                    </ItemListaDeBuscas>
                  </Link>
                ))}
              </ContainerListaDeBuscas>
            )}
            {searchResults.length === 0 && estaBuscando && (
              <ContainerListaDeBuscas>
                <ItemListaDeBuscas style={{ justifyContent: "center" }}>
                  <TextoProdutoNaoEncontrado>
                    Não encontramos nenhum produto
                  </TextoProdutoNaoEncontrado>
                </ItemListaDeBuscas>
              </ContainerListaDeBuscas>
            )}
          </ContainerSearch>
        </FirstLineLeft>
        <FirstLineRight>
          {!firstMediaQuery && (
            <ContainerLoginCadastro>
              <UserCircle size={32} weight="bold" color={colors.branco} />
              {user && (
                <TextLoginCadastro style={{ fontWeight: "bold" }}>
                  Olá, {user.userName} <br></br>
                  <Link
                    to="/minha-conta"
                    style={{
                      color: colors.branco,
                      fontWeight: "400",
                      textDecoration: "none",
                    }}
                    onMouseEnter={(event) => {
                      event.currentTarget.style.textDecoration = "underline";
                    }}
                    onMouseLeave={(event) => {
                      event.currentTarget.style.textDecoration = "none";
                    }}
                  >
                    MINHA CONTA
                  </Link>{" "}
                  |{" "}
                  <Link
                    onClick={sairDoSistema}
                    style={{
                      color: colors.branco,
                      fontWeight: "400",
                      textDecoration: "none",
                    }}
                    onMouseEnter={(event) => {
                      event.currentTarget.style.textDecoration = "underline";
                    }}
                    onMouseLeave={(event) => {
                      event.currentTarget.style.textDecoration = "none";
                    }}
                  >
                    SAIR
                  </Link>{" "}
                </TextLoginCadastro>
              )}
              {!user && (
                <TextLoginCadastro>
                  Faça{" "}
                  <Link
                    to="/login"
                    style={{
                      color: colors.branco,
                      fontWeight: "bold",
                      textDecoration: "none",
                    }}
                    onMouseEnter={(event) => {
                      event.currentTarget.style.textDecoration = "underline";
                    }}
                    onMouseLeave={(event) => {
                      event.currentTarget.style.textDecoration = "none";
                    }}
                  >
                    LOGIN
                  </Link>{" "}
                  ou <br></br>crie seu{" "}
                  <Link
                    to="/cadastro"
                    style={{
                      color: colors.branco,
                      fontWeight: "bold",
                      textDecoration: "none",
                    }}
                    onMouseEnter={(event) => {
                      event.currentTarget.style.textDecoration = "underline";
                    }}
                    onMouseLeave={(event) => {
                      event.currentTarget.style.textDecoration = "none";
                    }}
                  >
                    CADASTRO
                  </Link>
                </TextLoginCadastro>
              )}
            </ContainerLoginCadastro>
          )}
          {!thirdMediaQuery && (
            <Link
              to={user ? "/favoritos" : "/login"}
              style={{ height: 26, position: "relative" }}
            >
              <Heart
                size={26}
                weight="bold"
                color={colors.branco}
                className="heart-icon"
              />
              {user && (
                <ContainerContadorItens>
                  <TextoContadorItens>
                    {produtosCurtidos.numeroItens}
                  </TextoContadorItens>
                </ContainerContadorItens>
              )}
            </Link>
          )}
          <Link
            to={user ? "/carrinho" : "/login"}
            style={{ height: 26, position: "relative" }}
          >
            <ShoppingCart
              size={26}
              weight="bold"
              color={colors.branco}
              className="shopping_cart-icon"
            />
            {user && (
              <ContainerContadorItens>
                <TextoContadorItens>{carrinho.numeroItens}</TextoContadorItens>
              </ContainerContadorItens>
            )}
          </Link>
          {firstMediaQuery && (
            <div>
              <Button
                onClick={toggleDrawer(true)}
                style={{ minWidth: 24, height: 24 }}
              >
                <IconButton
                  style={{
                    color: colors.branco,
                    backgroundColor: "transparent",
                    padding: 0,
                    width: 0,
                  }}
                >
                  <MenuIcon style={{ fontSize: 28 }} />
                </IconButton>
              </Button>
              <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={toggleDrawer(false)}
                style={{ zIndex: 9999999 }}
              >
                <List style={{ width: 280, height: "100%" }}>
                  <ContainerVoltarDrawer onClick={() => setDrawerOpen(false)}>
                    <ArrowLeft size={24} />
                    <TextoItens>VOLTAR</TextoItens>
                  </ContainerVoltarDrawer>
                  {listaDeItens.map((item, index) => (
                    <ContainerItem
                      key={index}
                      onClick={() => handleBotaoClick(index, item.rota)}
                    >
                      <item.Icone size={24} color={colors.preto2} />
                      <TextoItens>{item.texto}</TextoItens>
                    </ContainerItem>
                  ))}
                  <ContainerFooterMenu>
                    {user && (
                      <>
                        <ContainerItem
                          onClick={() => [
                            navigate("/favoritos"),
                            setDrawerOpen(false),
                          ]}
                        >
                          <Heart size={24} color={colors.preto2} />
                          <TextoItens>Meus favoritos</TextoItens>
                        </ContainerItem>
                        <ContainerItem
                          onClick={() => [
                            navigate("/minha-conta"),
                            setDrawerOpen(false),
                          ]}
                        >
                          <UserCircle size={24} color={colors.preto2} />
                          <TextoItens>Minha Conta</TextoItens>
                        </ContainerItem>
                        <ContainerItem onClick={sairDoSistema}>
                          <SignOut size={24} color={colors.preto2} />
                          <TextoItens>Sair</TextoItens>
                        </ContainerItem>
                      </>
                    )}
                    {!user && (
                      <ContainerItem
                        onClick={() => [
                          navigate("/login"),
                          setDrawerOpen(false),
                        ]}
                      >
                        <SignIn size={24} color={colors.preto2} />
                        <TextoItens>Entrar</TextoItens>
                      </ContainerItem>
                    )}
                  </ContainerFooterMenu>
                </List>
              </Drawer>
            </div>
          )}
        </FirstLineRight>
      </FirstLine>

      {!showSecondLine && (
        <SecondLine>
          <SecondLineNav>
            <Link to="/colecoes" className="text_nav">
              COLEÇÕES
            </Link>
            <Link to="/roupas" className="text_nav">
              ROUPAS
            </Link>
            <Link to="/calcados" className="text_nav">
              CALÇADOS
            </Link>
            <Link to="/acessorios" className="text_nav">
              ACESSÓRIOS
            </Link>
          </SecondLineNav>
        </SecondLine>
      )}
    </ContainerHeader>
  );
}
