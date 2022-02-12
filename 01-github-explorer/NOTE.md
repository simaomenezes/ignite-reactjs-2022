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
 ### Instalando html-webpack-plugin 
 - node deve ser uma versão >= 12
 - yarn add html-webpack-plugin -D
 ### Instalando webpack-dev-server
 - yarn add webpack-dev-server -D
 Após ter instalado o webpack-dev-server, vamos 
 executar este comando -> yarn webpack serve
 ### Instalando cross-env
 - yarn add cross-env -D
 ### Instalando style-loader e css-loader
 - yarn add style-loader css-loader -D
 ### Instalando sass-loader e node-sass 
 - yarn add sass-loader node-sass -D

 ### const not change
 ### let it change
 - deixe seu valor mudar