public with sharing class FuncionarioAPIController {
  // public class FuncionarioController {
  //   public Integer id { get; set; }
  //   public String name { get; set; }
  //   public String email { get; set; }
  //   public String cpf { get; set; }
  // }

  @AuraEnabled
  public static String getFuncionario(String cpf) {
    Http h = new Http();

    HttpRequest request = new HttpRequest();
    request.setEndpoint(
      'https://external-site-integration-with-salesforce-teams.vercel.app/api/getFuncionario?cpf=' +
      EncodingUtil.urlEncode(cpf, 'UTF-8')
    );

    request.setMethod('GET');

    HttpResponse res = h.send(request);
    if (res.getStatusCode() == 200) {
      String formattedCPF =
        cpf.substring(0, 3) +
        '.' +
        cpf.substring(3, 6) +
        '.' +
        cpf.substring(6, 9) +
        '-' +
        cpf.substring(9, 11);

      Employees__c funcionario = new Employees__c();

      List<Employees__c> listFuncionario = [
        SELECT Id
        FROM Employees__c
        WHERE CPF__c = :formattedCPF OR CPF__c = :cpf
      ];

      if (!listFuncionario.isEmpty()) {
        return String.valueOf(listFuncionario[0].Id);
      }
    }
    System.debug(res.getBody());
    // FuncionarioController funcionarioController = (FuncionarioController) JSON.deserialize(
    //       res.getBody(),
    //       FuncionarioController.class
    //     );
    return res.getBody();
  }

  @AuraEnabled
  public static void postFuncionario(String cpf, String nome, String email) {
    Http h = new Http();

    // Cria um mapa para armazenar os dados do funcionário
    Map<String, String> funcionario = new Map<String, String>();
    funcionario.put('cpf', cpf);
    funcionario.put('name', nome);
    funcionario.put('email', email);

    // Serializa o mapa em JSON
    String json = JSON.serialize(funcionario);
    System.debug('JSON: ' + json);

    HttpRequest request = new HttpRequest();
    request.setEndpoint(
      'https://external-site-integration-with-salesforce-teams.vercel.app/api/funcionarioCreation'
    );
    request.setMethod('POST');
    request.setHeader('Content-Type', 'application/json');
    request.setBody(json);

    HttpResponse res = h.send(request);
    System.debug('Response Body: ' + res.getBody());
    System.debug('Response Status Code: ' + res.getStatusCode());
  }
}
