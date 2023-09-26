import Swal, { SweetAlertResult } from 'sweetalert2';
const COLOR_DEFAULT = '#2A6F97';
const BTN_ACCEPT = 'Entendido';
const BTN_CANCEL = 'Cancelar';



export class Alerts {

    static mandatoryFileds(): void {
        Swal.fire({
            title: 'Atención',
            text: 'Debe completar todos los campos obligatorios',
            icon: 'warning',
            confirmButtonText: BTN_ACCEPT,
            confirmButtonColor: COLOR_DEFAULT,
            heightAuto: false
        });
    }

    static success(title: string, text: string, buttonText: string): void {
        Swal.fire({
            icon: 'success',
            title,
            html: text,
            confirmButtonText: buttonText,
            confirmButtonColor: COLOR_DEFAULT,
            heightAuto: false,
        });
    }

    static info(title: string, text: string, buttonText: string, ): void {
        Swal.fire({
            icon: 'info',
            iconColor: COLOR_DEFAULT,
            title,
            html: text,
            confirmButtonText: buttonText,
            confirmButtonColor: COLOR_DEFAULT,
            heightAuto: false,
        });
    }

    static warning(title: string, text: string, buttonText: string): void {
        Swal.fire({
            icon: 'warning',
            title,
            html: text,
            confirmButtonText: buttonText,
            confirmButtonColor: '#828282',
            heightAuto: false,
        });
    }


    static confirmDelete(html: string, confirmButtonText?: string): Promise<SweetAlertResult> {
        return Swal.fire({
            html,
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: COLOR_DEFAULT,
            cancelButtonColor: '#828282',
            confirmButtonText: confirmButtonText || 'Eliminar',
            cancelButtonText: BTN_CANCEL,
            reverseButtons: true,
            heightAuto: false,
        });
    }

  
}