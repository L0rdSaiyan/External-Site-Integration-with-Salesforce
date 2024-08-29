import { LightningElement, api} from 'lwc';
import LightningModal from 'lightning/modal';
import EMPLOYEES_NAME from '@salesforce/schema/Employees__c.Name';
import EMPLOYEES_CPF from '@salesforce/schema/Employees__c.CPF__c';
import EMPLOYEES_CARGO from '@salesforce/schema/Employees__c.Cargo__c';
import EMPLOYEES_EMAIL from '@salesforce/schema/Employees__c.Email__c';

export default class ModalForm extends LightningModal {
    @api recordId;
    @api objectApiName = 'Employees__c';
    nameField = EMPLOYEES_NAME;
    cpfField = EMPLOYEES_CPF;
    cargoField = EMPLOYEES_CARGO;
    emailField = EMPLOYEES_EMAIL;

    handleClose() {
        this.close();
    }
}