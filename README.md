🌸 Convite Digital – Aniversário da Luísa (1 Ano)

Bem-vindo ao repositório do convite digital oficial do aniversário de 1 ano da Luísa, criado em React + Vite, totalmente estilizado com TailwindCSS, animações suaves e um sistema inteligente de confirmação de presença (RSVP) via WhatsApp.

Este projeto funciona como uma one-page personalizada, otimizada para mobile, e publicada na Vercel para acessar por link.

✨ Funcionalidades Principais
🦋 Página temática inspirada em Jardim Encantado

Cores suaves em lilás, rosa e verde

Elementos animados (borboletas, flores, nuvens)

Header com foto da aniversariante

🎉 Sistema de RSVP automático

Envia confirmação diretamente para o WhatsApp dos pais

Mensagem formatada automaticamente

Nome do convidado incluído no texto

🔗 Links personalizados por convidado

URL suporta o parâmetro:

?convidado=Nome+Do+Convidado


Exibe mensagem exclusiva:
“Este convite foi enviado exclusivamente para…”

Botão discreto para editar o nome caso esteja incorreto

📍 Localização integrada

Botão “Ver no mapa” abre o endereço direto no Google Maps

⏳ Contagem regressiva automática

Mostra quantos dias, horas e minutos faltam para o evento

💝 Sugestões de presente

Ícones e cards com tamanhos e itens recomendados

👶 Totalmente responsivo

Layout otimizado para celulares

Interface suave, intuitiva e moderna

🛠️ Tecnologias Utilizadas

React (Vite)

TailwindCSS

Lucide React Icons

CSS Animations

Vercel (deploy)

📦 Como rodar o projeto localmente
1. Clone o repositório:
git clone https://github.com/thsrv/convite-luisa.git

2. Entre na pasta:
cd convite-luisa

3. Instale as dependências:
npm install

4. Rode o servidor local:
npm run dev


Acesse:

http://localhost:5173/

🎨 Personalizações
📁 Foto da aniversariante

Alterar no arquivo:

src/App.jsx


Local da imagem:

src/assets/foto_aniver.jpg

🦋 Ícone da aba (Favicon)

Edite no arquivo:

public/favicon.png
public/index.html

🔗 Como enviar convites personalizados

Para gerar um link exclusivo para cada convidado:

https://seu-dominio.vercel.app/?convidado=Nome+Do+Convidado


Exemplo:

https://convite-luisa.vercel.app/?convidado=Maria+Helena


O nome aparecerá automaticamente no campo de RSVP.

🚀 Deploy

O deploy é feito automaticamente via Vercel.

Sempre que fizer git push, a Vercel cria uma nova versão publicada em:

https://convite-luisa.vercel.app

🧩 Estrutura de Pastas
convite-luisa/
 ├─ public/
 │   ├─ favicon.png
 │   └─ index.html
 ├─ src/
 │   ├─ assets/
 │   │   └─ foto_aniver.jpg
 │   ├─ App.jsx
 │   ├─ main.jsx
 │   ├─ index.css
 │   └─ components/ (opcional)
 ├─ package.json
 ├─ postcss.config.cjs
 ├─ tailwind.config.cjs
 └─ vite.config.js

❤️ Créditos

Projeto desenvolvido com amor por Thiago Saraiva
Design inspirado no tema Jardim Encantado para celebrar o primeiro aninho da pequena Luísa.
✨ Cada detalhe foi pensado para tornar o dia ainda mais especial.

📬 Contato

Para dúvidas ou sugestões:

💼 LinkedIn: https://www.linkedin.com/in/thiagosaraivads

📧 E-mail: thsrv@users.noreply.github.com