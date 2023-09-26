import { AbstractControl, FormArray, FormGroup, Validators } from '@angular/forms';
import { Alerts } from './alerts';

export class ValidatorForm extends Validators {

    static validateForm(form: FormGroup, message?: string): boolean {
        this.markInvalidFields(form);
        if (!form.valid) {
            Alerts.warning('Atención', message || 'Falta llenar campos obligatorios', 'Entendido');
        }
        return form.valid;
    }

    static markInvalidFields(form?: FormGroup): void {
        for (const i in form.controls) {
            form.controls[i].setValue(form.controls[i].value);
            form.controls[i].markAsDirty();
        }
    }


    static validateArrayForm(formArray: FormArray): boolean {
        let valid: boolean = true;
        formArray.controls.forEach(form => {
            if (!this.validateForm(form as FormGroup)) {
                valid = false;
            }
        });
        return valid;
    }


    static noNumbersValidator(control: AbstractControl): { [key: string]: boolean } | null {
        const value = control.value;
        const regex = /\d/;
        if (regex.test(value)) {
            return { 'noNumbers': true };
        }
        return null;
    }
}
