"use client";

import React from "react";
import Header from "../Header/Header.jsx";
import Chat from "../Chat/Chat.jsx";
import Footer from "../Footer/Footer.jsx";
import styles from "./MainLayout.module.css";
import { useConversation } from "../../context/ConversationContext.jsx";

export default function MainLayout() {
  const { isConversationStarted } = useConversation();

  return (
    <div
      className={`${styles.mainLayout} ${
        isConversationStarted ? styles.conversationStarted : ""
      }`}
    >
      <Header />
      <div className={styles.mainContent}>
        <Chat />
        <Footer />
      </div>
    </div>
  );
}
