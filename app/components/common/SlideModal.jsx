"use client";

import React from "react";
import styles from "./SlideModal.module.css";

export default function SlideModal({
  isOpen,
  onClose,
  children,
  direction = "right", // "right" means it slides from right to left, "left" means from left to right
}) {
  return (
    <>
      {isOpen && <div className={styles.overlay} onClick={onClose}></div>}
      <div
        className={`${styles.slideModal} ${styles[direction]} ${
          isOpen ? styles.open : ""
        }`}
      >
        {children}
      </div>
    </>
  );
}
