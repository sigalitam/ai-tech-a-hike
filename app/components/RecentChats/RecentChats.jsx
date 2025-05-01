"use client"

import React from 'react';
import styles from './RecentChats.module.css';

export default function RecentChats() {
  const recentChats = [
    {
      id: 1,
      title: "מחפשת טרמפ למדבר יהודה",
      isNew: true
    },
    {
      id: 2,
      title: "כמה עולה טיול ג'יפים?",
      isNew: true
    },
    {
      id: 3,
      title: "איפה נוכל קנה את המשלה שלך?",
      isNew: true
    },
    {
      id: 4,
      title: "האם אלוהים באמת קיים?",
      isNew: true
    }
  ];

  return (
    <div className={styles.recentChats}>
      <h2 className={styles.title}>שיחות אחרונות</h2>
      <ul className={styles.chatList}>
        {recentChats.map(chat => (
          <li key={chat.id} className={styles.chatItem}>
            <button className={styles.chatButton}>
              <span className={styles.chatTitle}>
                {chat.isNew && <span className={styles.newIndicator}>+</span>}
                {chat.title}
              </span>
            </button>
          </li>
        ))}
      </ul>
      <button className={styles.newChatButton}>
        התחלת שיחה חדשה
      </button>
    </div>
  );
} 