import { useEagerConnect, useInactiveListener } from '../hooks/web3hook';
import { useState, createContext, useCallback } from 'react';

import React, { ReactNode } from "react";

interface Props {
    children?: ReactNode
}

export const WalletModalContext = createContext({
  open: false,
  toggleOpen: () =>{} ,
});

export function WalletModalProvider({ children}:Props) {
  const [open, setOpen] = useState(false);

  // handle logic to eagerly connect to the injected ethereum provider, if it exists and has granted access already
  const triedEager = useEagerConnect();

  // handle logic to connect in reaction to certain events on the injected ethereum provider, if it exists
  useInactiveListener(!triedEager);

  const toggleOpen = useCallback(() => {
    console.log("current status",open);
    setOpen(!open);
  }, [open]);

  return <WalletModalContext.Provider value={{ open, toggleOpen }}>{children}</WalletModalContext.Provider>;
}
