### Notas de instalação e configuração do ambiente. ### 

### Iniciar a configuração base do projeto
 - yarn init -y 
### Instalando o reactjs
 - yarn add react
### Instalando react-dom para trabalhar na web
 - yarn add react-dom
### Instalando o @babel
 - yarn add @babel/core @babel/cli @babel/preset-env -D ( -D apenas ambiente de desenvolvimento)

 ### Instalando o @babel/preset-react
 - yarn add @babel/preset-react -D
 ### Executar o @babel
 - yarn babel src/index.js --out-file dist/bundle.js
 ### Instalação Webpack 
 - yarn add webpack webpack-cli webpack-dev-server -D 
 ### Instalando babel loader
 - yarn add babel-loader -D
 ### Executar o webpack
 - yarn webpack