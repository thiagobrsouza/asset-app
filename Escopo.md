# Projeto Asset App

## Objetivo
Criar um sistema simples que faça o controle de ativos.

## Escopo principal
- usuário autentica no sistema
- usuário se necessário cadastra um cliente
- usuário se necessário cadastra um fabricante
- usuário se necessário cadastra uma categoria
- usuário se necessário cadastra uma localização
- usuário se necessário cadastra um modelo de hardware
- usuário pode cadastrar um hardware
- usuário pode cadastrar uma licença e associar a algum hardware

## Entidades do sistema
- perfil
- usuário
- cliente
  - nome
- fabricante
  - nome
- categoria
  - nome
- localização
  - nome
  - observações
- modelo hardware
  - nome
  - categoria
- ativo
  - nome
  - cliente
  - localização
  - modelo hardware
  - serial number
  - data de compra
  - data expiração
  - observações
- licença
  - nome
  - cliente
  - chave
  - quantidade
  - data de compra
  - data expiração
  - observações