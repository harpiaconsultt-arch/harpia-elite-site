import React from "react";

const SkipToContent = () => {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-silver focus:text-navy focus:rounded-md focus:font-semibold focus:outline-none focus:ring-2 focus:ring-silver-light"
    >
      Pular para o conteúdo
    </a>
  );
};

export default SkipToContent;
