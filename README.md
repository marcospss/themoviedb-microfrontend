# Module Federation with Angular
## TMDb - The Movie Database Microfrontend

### [Microfrontend Container - Home](https://tmdb-microfrontend.vercel.app)

### [Microfrontend Host - Details](https://tmdb-microfrontend-details.vercel.app/529203)

### [Microfrontend Host - Collections](https://tmdb-microfrontend-collections.vercel.app)

### [Microfrontend Host - Favorites](https://tmdb-microfrontend-favorites.vercel.app)

# Ambiente Desenvolvimento

### Pré-requisitos para executar do projeto:

#### Configuração da API TMDB
Primeiro, você precisa obter uma conta no [TMDB](https://www.themoviedb.org) e gerar sua [chave da API](https://www.themoviedb.org/faq/api).

Na raiz do projeto deve ser criado o arquivo .env com a informação abaixo:
```
API_KEY=API KEY TMDB
```

## Executar todos os projetos
```
$ npm start
```

## Executar os projetos na sequência abaixo
##### 01. favorites
```
$ npm run start:favorites
```
##### 02. collections
```
$ npm run start:collections
```
##### 03. details
```
$ npm run start:details
```
##### 04. shell
```
$ npm run start:shell
```
## Referências
- [Module Federation](https://module-federation.github.io/)
- [@angular-architects/module-federation](https://www.npmjs.com/package/@angular-architects/module-federation)
- [Tutorial: Getting Started with Webpack Module Federation and Angular](https://module-federation.github.io/)
- [The Microfrontend Revolution – Part 2: Module Federation with Angular](https://www.angulararchitects.io/aktuelles/the-microfrontend-revolution-part-2-module-federation-with-angular/)
- [Como os Microfrontends podem ajudar a focar nas necessidades de negócios](https://www.infoq.com/br/articles/microfrontends-business-needs/)
- [Micro Frontends](https://martinfowler.com/articles/micro-frontends.html)
- [10 Decision Points for a Micro-Frontend Approach](https://medium.com/better-programming/10-decision-points-for-micro-frontends-approach-4ebb4b59f40)
- [Micro-frontends decisions framework](https://medium.com/@lucamezzalira/micro-frontends-decisions-framework-ebcd22256513)
- [How We Build Micro Frontends](https://blog.bitsrc.io/how-we-build-micro-front-ends-d3eeeac0acfc)
- [Module Federation-Federated Application Architectures](https://rangle.io/blog/module-federation-federated-application-architectures/)
