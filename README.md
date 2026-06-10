# CreateAI.js

**Uma lib Typescript que eu fiz para facilitar a criação de IAs, pois acho muito complexo criar IAs com a [Groq](https://console.groq.com/) apesar de ser ótima.** Acho bem difícil criar IAs por causa dos erros fáceis que ocorrem ou seja pela sua complexidade.

## Instalação

```bash
npm install -g createai.js

# Se você está usando Bun, use isso
bun install -g createai.js
```

## Requisitos

| Requisito  | Por quê?                             |
| ---------- | ------------------------------------ |
| API Key    | Necessário para se conectar com a IA |
| Bun ou npm | Instalador de Pacotes                |

## Uso

Para começar, iremos fazer isso:

```typescript
import CreateAIClient from "createai.js";

const token = "YOUR_AI_TOKEN";

const ai = new CreateAIClient(token);

ai.setModel("gemini-flash-lite-3-1"); // Seleciona qual modelo você quer, o "gemini-flash-lite-3-1" é o modelo padrão
```

---

<p align=center>1 Modelo Suportado • 10+ Testes realizados com sucesso • Astro</p>
