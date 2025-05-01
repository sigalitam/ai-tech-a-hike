"use client"

import React from 'react';
import Image from 'next/image';
import styles from './UserMenu.module.css';

export default function UserMenu({ isOpen, onClose }) {
  return (
    <>
      {isOpen && <div className={styles.overlay} onClick={onClose}></div>}
      <div className={`${styles.userMenu} ${isOpen ? styles.open : ''}`}>
        <div className={styles.userProfile}>
          <div className={styles.userAvatar}>
            <div className={styles.placeholderAvatar}>
              <svg width="25" height="25" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" fill="#aaa"/>
                <path d="M12 13C7.58172 13 4 16.5817 4 21H20C20 16.5817 16.4183 13 12 13Z" fill="#aaa"/>
              </svg>
            </div>
          </div>
        </div>
        <nav className={styles.userNav}>
          <ul className={styles.menuList}>
            <li className={styles.menuItem}>
              <button className={styles.menuButton}>הטיולים הקרובים</button>
            </li>
            <li className={styles.menuItem}>
              <button className={styles.menuButton}>הטיולים שלי</button>
            </li>
            <li className={styles.menuItem}>
              <button className={styles.menuButton}>אלבום התמונות שלי</button>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
} 