const SkipToContent = () => {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-white focus:text-navy focus:rounded-md focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-silver font-medium"
    >
      Pular para o conteúdo principal
    </a>
  );
};

export default SkipToContent;
