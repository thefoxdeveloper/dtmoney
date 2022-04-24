import { useState } from "react";
import logoImg from "../../assets/logo.svg";
import { Container, Content } from "./styles";

export function Header() {
  const [isNewTransactionModalOpen, setisNewTransactionModalOpen] = useState([
    false,
  ]);
  function handleOpenNewTransactionModal() {}
  function handleCloseNewTransactionModal() {}
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt money" />
        <button type="button">Nova transação</button>
      </Content>
    </Container>
  );
}
