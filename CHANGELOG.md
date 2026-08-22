# Changelog

Todas as mudanças notáveis neste projeto serão documentadas neste arquivo.

## [Não Lançado] - Atualizações Recentes

### Adicionado
- **Efeito Parallax no Hero:** Implementado um efeito "Sticky Reveal" onde a seção inicial (Hero) fica fixada no fundo enquanto a página (conteúdo principal) rola sobre ela, criando uma transição suave e dinâmica.
- **Modal da Logo:** Adicionado um recurso onde clicar na logo do cabeçalho escurece a tela (com um efeito de desfoque) e exibe uma versão grande da logo no centro da tela.
- **Texto Descritivo no Modal:** Inserido um título chamativo e um pequeno texto descrevendo a cafeteria abaixo da logo grande, projetado com sombras para máximo contraste e legibilidade.

### Alterado
- **Atualização da Logo Visual:** Substituída a logo provisória baseada em texto (a bolinha com a letra "C") pela imagem da marca (atualmente carregando via `/favicon.ico`) tanto no menu de navegação (Navbar) quanto no rodapé (Footer).
- **Interatividade no Cabeçalho:** O nome "Café Essencial" e a logo agora funcionam como botões separados. A logo abre o modal, enquanto o texto leva o usuário suavemente de volta ao topo do site.
- **Estilo do Rodapé:** A cor de fundo do rodapé foi atualizada para a cor premium `bg-coffee-dark` (marrom mais escuro), garantindo uma consistência melhor com os botões escuros do site e trazendo mais elegância.
- **Proporção da Logo no Cabeçalho:** A área branca e a proporção da imagem da logo no menu superior foram ligeiramente ampliadas para garantir que o ícone ficasse bem preenchido e legível.

### Corrigido
- **Sobreposição do Rodapé (Z-Index):** Corrigido um bug visual onde a seção inicial (Hero) vazava e se sobrepunha ao rodapé no final da página. O problema foi resolvido ajustando as camadas (`relative z-20`) para garantir que o rodapé sempre cubra a imagem de fundo corretamente.
- **Fundo Transparente:** Corrigida a renderização da classe de cor no rodapé que estava resultando em um fundo transparente, forçando a leitura correta das variáveis do Tailwind.
