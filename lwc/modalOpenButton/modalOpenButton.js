import { LightningElement } from 'lwc';
import ModalEmployee from 'c/modalEmployee';

export default class ModalOpenButton extends LightningElement {
    async handleClick() {
        const openModal = await ModalEmployee.open({
            size: 'small',
            description: 'Accessible description of modal\'s purpose',
            content: 'Passed into content api',
        })
        console.log(openModal);
    }
}