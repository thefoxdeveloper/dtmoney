import { Dashboard } from "./components/dashboard";
import Modal from "react-modal";
import { Header } from "./components/header";
import { GlobalStyle } from "./styles/global";
import { useState } from "react";
import { NewTransactionModal } from "./components/newTransactionModal";
Modal.setAppElement("#root");
export function App() {
  const [isNewTransactionModalOpen, setisNewTransactionModalOpen] =
    useState(false);
  function handleOpenNewTransactionModal() {
    setisNewTransactionModalOpen(true);
  }
  function handleCloseNewTransactionModal() {
    setisNewTransactionModalOpen(false);
  }
  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
      <GlobalStyle />
    </>
  );
}
