"use client";

import React from "react";
import Image from "next/image";
import styles from "./Chat.module.css";
import { useConversation } from "../../context/ConversationContext.jsx";

export default function Chat() {
  const { isConversationStarted, startConversation } = useConversation();

  const handleSubmit = (e) => {
    e.preventDefault();
    startConversation();
  };

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <section
          className={`${styles.chat} ${
            isConversationStarted ? styles.chatConversationMode : ""
          }`}
        >
          <div className={styles.chatContent}>
            <div
              className={`${styles.logoContainer} ${
                isConversationStarted ? styles.logoHidden : ""
              }`}
            >
              <div className={styles.logo}>
                <Image
                  src="/logo.svg"
                  alt="Tech a Hike Logo"
                  width={320}
                  height={104}
                  priority
                />
              </div>
            </div>

            <div className={styles.searchContainer}>
              <form className={styles.searchForm} onSubmit={handleSubmit}>
                <textarea
                  className={styles.searchInput}
                  placeholder="זה המקום לשאול מה שבא לך..."
                  rows={1}
                  onInput={(e) => {
                    e.target.style.height = "auto";
                    e.target.style.height = `${e.target.scrollHeight}px`;
                  }}
                />
                <button type="submit" className={styles.searchButton}>
                  {isConversationStarted ? "שליחה" : "התחל שיחה"}
                </button>
              </form>

              {!isConversationStarted ? (
                <div className={styles.quickLinks}>
                  <button className={styles.quickLinkButton}>
                    לאן טיילתם כבר?
                  </button>
                  <button className={styles.quickLinkButton}>
                    מתי הטיול הבא?
                  </button>
                  <button className={styles.quickLinkButton}>
                    אני רוצה להירשם
                  </button>
                </div>
              ) : null}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
