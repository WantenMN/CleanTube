// ==UserScript==
// @name            CleanTube
// @description     none
// @author          Wanten
// @copyright       2023 Wanten
// @license         MIT
// @supportURL      https://github.com/WantenMN/CleanTube/issues
// @icon            https://youtube.com/favicon.ico
// @homepageURL     https://github.com/WantenMN/CleanTube
// @namespace       https://github.com/WantenMN/CleanTube
// @updateURL       https://github.com/WantenMN/CleanTube/raw/main/index.user.js
// @downloadURL     https://github.com/WantenMN/CleanTube/raw/main/index.user.js
// @version         1.0.0
// @match           http*://*.youtube.com/*
// @match           http*://youtube.com/*
// @match           http*://*.youtu.be/*
// @match           http*://youtu.be/*
// @run-at          document-end
// @grant           GM_addStyle
// ==/UserScript==

(function () {
  "use strict";
  const classList = ["#secondary"];

  const styleGenerator = (classList) => {
    let className = "";
    for (const clazz of classList) {
      if (className.length === 0) {
        className += clazz;
        continue;
      }
      className += `, ${clazz}`;
    }
    return `
      ${className} {
        display: none !important;
      }
    `;
  };
  GM_addStyle(styleGenerator(classList));
})();
