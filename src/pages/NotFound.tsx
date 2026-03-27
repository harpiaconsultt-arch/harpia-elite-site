import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <a
        href="#not-found-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-white focus:text-navy focus:p-4 focus:rounded-md focus:shadow-lg"
      >
        Pular para o conteúdo
      </a>
      <div className="text-center">
        <h1 id="not-found-content" tabIndex={-1} className="mb-4 text-4xl font-bold outline-none">404</h1>
        <p className="mb-4 text-xl text-muted-foreground">Ops! Página não encontrada</p>
        <a href="/" className="text-primary underline hover:text-primary/90">
          Voltar para o Início
        </a>
      </div>
    </div>
  );
};

export default NotFound;
