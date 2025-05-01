"use client"

import React, { createContext, useState, useContext } from 'react';

const ConversationContext = createContext();

export function ConversationProvider({ children }) {
  const [isConversationStarted, setIsConversationStarted] = useState(false);

  const startConversation = () => {
    setIsConversationStarted(true);
  };

  return (
    <ConversationContext.Provider value={{ isConversationStarted, startConversation }}>
      {children}
    </ConversationContext.Provider>
  );
}

export function useConversation() {
  const context = useContext(ConversationContext);
  if (context === undefined) {
    throw new Error('useConversation must be used within a ConversationProvider');
  }
  return context;
} 