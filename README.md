# Challange-p4f
[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://github.com/felipet66)
## Live Demo

http://challange-p4f.s3-website-sa-east-1.amazonaws.com

## Servidor de dev

Para iniciar a aplicação utilize o comando `npm install && ng serve || docker-compose build && docker-compose up`.

## Codigos

Para gerar novos componentes utilize `ng generate component component-name`. Você também pode utilizar `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Docker image

`https://hub.docker.com/r/felipeteles95/minha-carteira`

## Estrutura de pastas
- app
    - core
        - components
            - navbar
        - 
    - pages
        - posts
            - posts
            - shared
        - photos
            - photos
            - shared
    - shared
        - components
            - base-resource-list
            - bread-crumb
            - page-header
            - server-error-messages
            - sidebar
            - loader
        - models
        - services

## Fluxo de desenvolvimento
`master -> develop -> master` <br />
`develop -> release -> develop` <br />
`release -> featureA -> release` <br />
`release -> featureB -> release`

