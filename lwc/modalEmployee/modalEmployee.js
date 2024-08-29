import { LightningElement, api, wire } from 'lwc';
import LightningModal from 'lightning/modal';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import searchEmployeeClass from'@salesforce/apex/FuncionarioAPIController.getFuncionario';
import putEmployee from '@salesforce/apex/FuncionarioAPIController.postFuncionario';

export default class MyModal extends LightningModal {
    @api content;

    name = '';
    cpf = '';
    cargo = '';
    email = '';

    handleClose() {
        this.close();
    }
    //@wire (searchEmployeeClass,{cpf: '$cpf'}) searchEmployeeClass;

    visibleCreateButton = false;
    handleKeyChange(event){
        searchEmployeeClass({cpf: this.cpf}).then(result => {
            console.log(result);
            if(result !== 'null'){
                if(result.length === 18){
                this.toast('Sucesso','Funcionario Encontrado', 'success');
                window.open('https://resilient-koala-aohg76-dev-ed.trailblaze.lightning.force.com/' + result, '_self');
            }else{
                let resultJSON = JSON.parse(result);
                console.log(resultJSON.length);

                this.toast('Aviso','Funcionário não encontrado no CRM, por favor crie no botão abaixo', 'warning');
                
                this.name = resultJSON.name;
                this.cpf = resultJSON.cpf;
                this.email = resultJSON.email;

                this.visibleCreateButton = true;
            }}else{
                this.modalForm = true;
                this.searchEmployee = 'slds-hide';
                this.toast('Aviso','Este funcionário não foi localizado no banco de dados externo, portanto crie-o', 'warning');
            }

            }).catch(error => {
                this.toast('Erro','Erro na requisição', 'error');
                console.error(error);
            });
    }
    toast(title, message, variant){
        const event = new ShowToastEvent({
            title: title,
            message: message,
            variant: variant
        });
        this.dispatchEvent(event);
    }
    handleInputChange(event){
        this.cpf = event.target.value;
    }

    handleInputChangeName(event){
        this.name = event.target.value;
        console.log(this.name);
    }

    handleInputChangeEmail(event){
        this.email = event.target.value;
    }



    modalForm = false;
    async handleClick(event) {
        this.modalForm = true;
        this.searchEmployee = 'slds-hide';
        putEmployee({cpf: this.cpf, nome: this.name, email: this.email}).then(result => {
            if(result){console.log('Sucesso')}
        })
        
    }    

    handleSuccess(event){
        window.open('https://resilient-koala-aohg76-dev-ed.trailblaze.lightning.force.com/' + event.detail.id, '_self');
    }
}
    