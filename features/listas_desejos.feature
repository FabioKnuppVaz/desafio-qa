@Listas_desejos
Feature: Listas de desejos

  Background: Criar lista
    Given realizar requisicao para criar uma lista
      | name  | description | language |
      | teste | teste       | pt-BR    |

  @Criar_lista
  Scenario: Validar a criacao de lista de desejos
    Then validar o resultado da criacao da lista
      | status_code | status_message                            |
      | 1           | The item/record was created successfully. |
    * realizar requisicao para deletar uma lista

  @Detalhes_lista
  Scenario: Validar os detalhes da lista de desejos criada
    When realizar requisicao para ver os detalhes da lista
    Then validar o resultado dos detalhes da lista
      | created_by | description | iso_639_1 | name  |
      | FabioVaz   | teste       | pt        | teste |
    * realizar requisicao para deletar uma lista

  @Adicionar_filme_lista
  Scenario Outline: Validar a adicao de filme na lista de desejos
    When realizar requisicao para adicionar filme id "<id>" na lista
    Then validar o resultado do filme adicionado na lista "<http>" "<status_code>" "<status_message>"
    * realizar requisicao para deletar uma lista

    Examples:
      | id | http | status_code | status_message                                             |
      | 18 | 201  | 12          | The item/record was updated successfully.                  |
      | 0  | 404  | 34          | The resource you requested could not be found.             |
      |    | 400  | 5           | Invalid parameters: Your request parameters are incorrect. |

  @Status_filme_lista
  Scenario: Validar o status de um filme adicionado a lista de desejos
    When realizar requisicao para adicionar filme id "18" na lista
    And realizar requisicao para ver o status de um filme id "18" na lista
    Then validar o resultado do status de um filme na lista
    * realizar requisicao para deletar uma lista

  @Remover_filme_lista
  Scenario: Validar a remocao de um filme da lista de desejos
    When realizar requisicao para adicionar filme id "18" na lista
    And realizar requisicao para remover filme id "18" da lista
    Then validar o resultado do filme removido da lista
      | status_code | status_message                            |
      | 13          | The item/record was deleted successfully. |
    * realizar requisicao para deletar uma lista

  @Limpar_lista
  Scenario: Validar a limpeza da lista de desejos
    When realizar requisicao para adicionar filme id "18" na lista
    And realizar requisicao para limpar lista
    Then validar o resultado da limpeza da lista
      | status_code | status_message                            |
      | 12          | The item/record was updated successfully. |
    * realizar requisicao para deletar uma lista

  @Deletar_lista
  Scenario: Validar a delecao da lista de desejos
    When realizar requisicao para deletar uma lista
    Then validar o resultado da delecao da lista