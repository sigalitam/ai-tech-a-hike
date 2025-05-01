"use client";

import React, { useState } from "react";
import styles from "./Header.module.css";
import UserMenu from "../UserMenu/UserMenu.jsx";
import Image from "next/image";
import { useConversation } from "../../context/ConversationContext.jsx";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isConversationStarted } = useConversation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className={styles.header}>
        <div className={styles.hamburgerMenu} onClick={toggleMenu}>
          <div
            className={`${styles.hamburgerIcon} ${
              isMenuOpen ? styles.active : ""
            }`}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div
          className={`${styles.headerLogo} ${
            isConversationStarted ? styles.headerLogoVisible : ""
          }`}
        >
          <Image
            src="/logo.svg"
            alt="Tech a Hike Logo"
            width={160}
            height={52}
            priority
          />
        </div>
        <div className={styles.authButtons}>
          <button className={`${styles.authButton} ${styles.signup}`}>
            הרשמה
          </button>
          <button className={`${styles.authButton} ${styles.login}`}>
            התחברות
          </button>
        </div>
      </header>
      <UserMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}
