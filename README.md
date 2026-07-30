# Meu Portifólio

Portfolio web moderno construído com React e JavaScript, servido pelo Vite. Este site apresenta a experiência profissional, projetos, qualificações e certificações de Cauan Martins, com foco em uma experiência visual refinada, interações suaves e design responsivo.

## 🚀 Destaques

- Layout responsivo com seção hero em duas colunas
- Tema claro/escuro persistente via `localStorage`
- Painel de acessibilidade com alto contraste e simulação de daltonismo (protanopia, deuteranopia, tritanopia, acromatopsia)
- Efeitos modernos em CSS: glassmorphism, hover em imagens com `drop-shadow`, transições suaves
- Animações de scroll revelando os cartões de conteúdo
- 3D tilt hover nos projetos (interação premium)
- Efeito de máquina de escrever no título do hero

## 🧩 Tecnologias

- React 19
- Vite
- JavaScript (sem TypeScript)
- CSS3 (folha de estilos global, sem framework)

## 📁 Estrutura do projeto

- `index.html` — HTML de entrada do Vite
- `src/main.jsx` — bootstrap da aplicação React
- `src/App.jsx` — composição das seções da página
- `src/components/` — um componente por seção/elemento de UI (Header, Hero, Projects, Qualifications, Certifications, Media, About, Footer, AccessibilityPanel, ColorblindFilters)
- `src/hooks/` — lógica de comportamento (tema, acessibilidade, scroll reveal, tilt 3D, typewriter)
- `src/data/` — conteúdo das seções orientadas a listas (projetos, qualificações, certificações, mídia)
- `src/index.css` — estilos e layout responsivo (global, importado em `main.jsx`)
- `public/static/` — imagens e fontes servidas como arquivos estáticos

## 💻 Como usar

```bash
cd /home/inteli/Documentos/Ponderadas/portifolio
npm install
npm run dev
```

Depois abra o endereço exibido pelo Vite (geralmente `http://localhost:5173`).

### Outros comandos

```bash
npm run build    # build de produção em dist/
npm run preview  # serve o build de produção localmente
npm run lint      # oxlint
```

## ✨ Seções do site

- **Home** — introdução com título, descrição e foto de perfil
- **Projetos** — cards com trabalhos acadêmicos e experiência em desenvolvimento
- **Qualificações** — principais conhecimentos e cursos técnicos
- **Certificações** — certificados exibidos com imagens
- **Na Mídia** — destaques de matérias e reportagens
- **Sobre** — texto pessoal e contatos

## 🔧 Personalização

Para substituir a foto de perfil ou imagens do portfólio, adicione o novo arquivo em `public/static/` e atualize o caminho (`/static/...`) no componente ou arquivo de dados correspondente em `src/`.

## 📬 Contato

Cauan Martins — Desenvolvedor de software

---

Feito para mostrar habilidades técnicas e presenciais de design front-end com foco em UI/UX.
