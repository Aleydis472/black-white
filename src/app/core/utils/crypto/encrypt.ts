import * as CryptoJS from 'crypto-js';


export class Encrypt {
    
    private static key = 'Ya_I-*$)85Sa_r$)5298ly=+/+*6)63#%-55=(/(-gf758-9+I-))¡--j+vh?(/=/*-63#Mb-r';
    
    static encrypted(text:string):string {
        const cipherText = CryptoJS.AES.encrypt(text, this.key).toString();
        return cipherText;
    }

    static decrypted(text:string):string {
        const decryptedText = CryptoJS.AES.decrypt(text, this.key).toString(CryptoJS.enc.Utf8);
        return decryptedText;
    }
}