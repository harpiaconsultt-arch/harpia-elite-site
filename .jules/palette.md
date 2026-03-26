## 2025-05-15 - Ordem de Importação CSS no Vite
**Learning:** No Vite/PostCSS, declarações `@import` (como fontes do Google) devem obrigatoriamente vir antes de qualquer diretiva Tailwind (`@tailwind base`, etc). Caso contrário, o build de produção falhará com avisos que são tratados como erros.
**Action:** Sempre posicionar fontes e outros imports de CSS externo no topo do arquivo principal de estilos, antes do Tailwind.

## 2025-05-15 - Padrão de Acessibilidade: Link de Pulo (Skip Link)
**Learning:** O link "Pular para o conteúdo" deve ser o primeiro elemento focável. Ele deve usar classes utilitárias para ficar escondido (`sr-only`) e aparecer apenas ao receber foco (`focus:not-sr-only`). O alvo (`main-content`) deve possuir `tabIndex={-1}` e `outline-none` para garantir que o foco programático funcione corretamente sem adicionar bordas indesejadas.
**Action:** Implementar este padrão em todas as landing pages para melhorar a experiência de usuários de teclado e leitores de tela.
