import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from "@angular/router"

import { UserService }  from './services/user.service';


@Component({
    selector: 'bas-opening_cashier',
    templateUrl: 'opening_cashier.component.html',
    styleUrls: ['opening_cashier.component.css']
})
export class OpeningCashierComponent {

    private descriptionError: string = '';
    private visibleError: boolean = false;

    private descriptionSuccess: string = '';
    private visibleSuccess: boolean = false;

    public form: FormGroup;

    constructor(private formBuilder: FormBuilder, private router: Router) {
        this.form = this.formBuilder.group({
            number_cashier: [{value: '1', disabled: true}],
            login: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

    onSubmit() {
        let userService = new UserService;
        let login = this.form.get('login').value;
        let password = this.form.get('password').value;
        let result = userService.login(login, password);

        if (result[0]) {
            this.displaySuccess('Login realizado com sucesso !', () => {
                this.router.navigate(['/sale']);
            });
            return;
        }
        this.displayError('Vocë digitou usuário ou senha inválida!');
    }

    /**
     * @param message 
     */
    private displayError(message: string) : void {
        this.descriptionError = message;
        this.visibleError = true;
        setTimeout(() => this.visibleError = false, 2000);
    }

    /**
     * @param message 
     */
    private displaySuccess(message: string, callback: any) : void {
        this.descriptionSuccess = message;
        this.visibleSuccess = true;
        setTimeout(() => {
            this.visibleSuccess = false
            setTimeout(() => callback(), 250);
        }, 1000);
    }
 }