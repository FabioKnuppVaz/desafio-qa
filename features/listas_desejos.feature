@Listas
Feature: Listas de desejos

  Background: Criar lista
    Given realizar requisicao para criar uma lista

  @Criar_lista
  Scenario: Criar lista
    Then validar o resultado da criacao da lista
    * realizar requisicao para deletar uma lista

  @Detalhes_lista
  Scenario: Detalhes da lista
    When realizar requisicao para ver os detalhes da lista
    Then validar o resultado dos detalhes da lista
    * realizar requisicao para deletar uma lista

  @Adicionar_filme_lista
  Scenario: Adicionar filme na lista
    When realizar requisicao para adicionar filme na lista
    Then validar o resultado do filme adicionado na lista
    * realizar requisicao para deletar uma lista

  @Status_filme_lista
  Scenario: Status de um filme na lista
    When realizar requisicao para adicionar filme na lista
    And realizar requisicao para ver o status de um filme na lista
    Then validar o resultado do status de um filme na lista
    * realizar requisicao para deletar uma lista

  @Remover_filme_lista
  Scenario: Remover filme da lista
    When realizar requisicao para adicionar filme na lista
    And realizar requisicao para remover filme da lista
    Then validar o resultado do filme removido da lista
    * realizar requisicao para deletar uma lista

  @Limpar_lista
  Scenario: Limpar lista
    When realizar requisicao para adicionar filme na lista
    And realizar requisicao para limpar lista
    Then validar o resultado da limpeza da lista
    * realizar requisicao para deletar uma lista

  @Deletar_lista
  Scenario: Deletar lista
    When realizar requisicao para deletar uma lista
    Then validar o resultado da delecao da lista