"use client";

import React from "react";
import SlideModal from "../common/SlideModal";
import styles from "./RecentChats.module.css";

export default function RecentChats({ isOpen, onClose, direction = "right" }) {
  const recentChats = [
    {
      id: 1,
      title: "מחפשת טרמפ למדבר יהודה",
      isNew: true,
    },
    {
      id: 2,
      title: "כמה עולה טיול ג'יפים?",
      isNew: true,
    },
    {
      id: 3,
      title: "איפה נוכל קנה את המשלה שלך?",
      isNew: true,
    },
    {
      id: 4,
      title: "האם אלוהים באמת קיים?",
      isNew: true,
    },
  ];

  return (
    <SlideModal isOpen={isOpen} onClose={onClose} direction={direction}>
      <div className={styles.recentChats}>
        <div className={styles.modalHeader}>
          <h2 className={styles.title}>שיחות אחרונות</h2>
          <button className={styles.closeButton} onClick={onClose}>
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 6L6 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6 6L18 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        <div className={styles.chatList}>
          {recentChats.map((chat) => (
            <div key={chat.id} className={styles.chatItem}>
              <button className={styles.chatButton}>
                <span className={styles.chatTitle}>
                  {chat.isNew && <span className={styles.newIndicator}>+</span>}
                  {chat.title}
                </span>
              </button>
            </div>
          ))}
        </div>
        <button className={styles.newChatButton}>התחלת שיחה חדשה</button>
      </div>
    </SlideModal>
  );
}
