# front_s18_actions

Atividade prática de Programação Front-end sobre testes automatizados e CI/CD.

**Aluno:** Kauan Eduardo  
**Turma:** 3ª série B — Desenvolvimento de Sistemas  
**Escola:** Manoel Ignácio  
**Ano:** 2026

## Projeto publicado

- Site: <https://kauaneduardo-dev.github.io/front_s18_actions/>
- Repositório: <https://github.com/kauaneduardo-dev/front_s18_actions>

## Tecnologias

- React + Vite
- Vitest
- React Testing Library
- Cobertura V8
- GitHub Actions
- GitHub Pages

## Executar localmente

É necessário ter o Node.js 20 ou superior instalado.

```bash
npm install
npm run dev
```

## Verificações

```bash
npm run lint
npm run test
npm run build
```

O comando de testes executa o Vitest uma única vez, gera o relatório de cobertura e exige 100% de cobertura do componente principal.

## Esteira de CI/CD

O workflow `.github/workflows/ci-cd.yml` é executado em cada `push` ou `pull_request` direcionado à branch `main`. A esteira:

1. baixa o código;
2. configura o Node.js 20;
3. instala as dependências com `npm ci`;
4. verifica o código;
5. executa os testes automatizados;
6. gera a pasta `dist` com o build;
7. publica o site no GitHub Pages quando há um `push` na `main`.

## Perguntas de fixação

### 1. Qual é a importância dos testes automatizados na esteira de CI/CD?

Eles funcionam como uma etapa obrigatória de qualidade. A esteira é interrompida quando um teste falha, impedindo que uma alteração com erro seja publicada.

### 2. Qual é a função da biblioteca `gh-pages`?

Ela publica no GitHub Pages os arquivos estáticos gerados pelo Vite dentro da pasta `dist`, mantendo o resultado do build separado do código-fonte.

### 3. Para que serve e como se divide o arquivo `ci-cd.yml`?

Ele descreve a automação do GitHub Actions. O campo `name` identifica a esteira; `on` define quando ela será executada; `permissions` libera os acessos necessários; `jobs` agrupa o trabalho; e `steps` organiza cada comando na ordem correta.
