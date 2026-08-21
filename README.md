# The Gentleman's Cut

Crie um aplicativo web para uma barbearia, com front-end clássico, elegante e responsivo (tons escuros como preto, dourado/âmbar e branco, tipografia com contraste entre serifada para títulos e sans-serif para textos). Sem backend, sem login — site institucional com agendamento via WhatsApp.

Funcionalidades principais:

Página inicial (Home)

Banner/hero com logo, nome da barbearia e uma frase de efeito

Botão de destaque "Agende pelo WhatsApp"

Seção de Serviços/Cortes

Grid de cards com: imagem do corte, nome do serviço, descrição curta e preço

Exemplos: Corte Social, Degradê, Barba, Combo Corte + Barba, Sobrancelha

Cada card com botão "Agendar" que abre o WhatsApp com mensagem pré-preenchida (ex: "Olá, gostaria de agendar um [nome do serviço]")

Galeria

Grade de fotos dos trabalhos realizados (estilo Instagram/portfólio)

Sobre a barbearia

Texto curto sobre a história/diferencial

Endereço, horário de funcionamento

Integração com WhatsApp

Botão flutuante fixo (canto inferior direito) com ícone do WhatsApp, sempre visível, linkando para https://wa.me/55SEUNUMERO com mensagem padrão

Botões de agendamento em cada serviço também usando link do WhatsApp com mensagem personalizada por serviço

Rodapé

Redes sociais, endereço, telefone, mapa (opcional)

Requisitos técnicos:

Design mobile-first e totalmente responsivo

Componentes reutilizáveis para os cards de serviço (para facilitar edição de preços/imagens depois)

Cores e fontes configuráveis em um único lugar (tema)

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/f99d87a5-4592-4349-b2a9-c3fc72a65ce6).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
