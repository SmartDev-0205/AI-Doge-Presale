import React from "react";
import ReactDOM from "react-dom/client";
import { MetaMaskProvider } from "metamask-react";

import "./index.css";
import "./assets/style/global.scss";
import "simplebar-react/dist/simplebar.min.css";

import { Routers } from "./routers";
import { ThemeProvider } from "./theme";
import { GlobalProvider } from "./provider";
import reportWebVitals from "./reportWebVitals";

import { Web3ReactProvider } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
import { ethers } from "ethers";
import { Buffer } from "buffer";
window.Buffer = window.Buffer || Buffer;

function getLibrary(provider: any): Web3Provider {
  const library = new ethers.providers.Web3Provider(provider);
  library.pollingInterval = 8000; // frequency provider is polling
  return library;
}

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <Web3ReactProvider getLibrary={getLibrary}>
    <MetaMaskProvider>
      <ThemeProvider>
        <GlobalProvider>
          <Routers />
        </GlobalProvider>
      </ThemeProvider>
    </MetaMaskProvider>
  </Web3ReactProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
