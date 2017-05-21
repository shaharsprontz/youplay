import { Component, Injectable } from '@angular/core';
// We will need to import a couple of specific API’s for dealing with reactive forms
import { FormBuilder, FormGroup,FormControl, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'
import { Router, RouterModule } from '@angular/router';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { User } from '../user.interface';
import * as $ from 'jquery';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],

})
export class RegisterComponent {
     public myForm: FormGroup;
    public submitted: boolean;
    public events: any[] = [];

    constructor(private _fb: FormBuilder) { }

    ngOnInit() {
        // the short way
        this.myForm = this._fb.group({
            firsName: ['', [<any>Validators.required, <any>Validators.minLength(5)]],
            lastName: ['', [<any>Validators.required, <any>Validators.minLength(5)]],
            userName: ['', [<any>Validators.required, <any>Validators.minLength(5)]],
            email: ['', [<any>Validators.required, <any>Validators.minLength(5)]],
            password: ['', [<any>Validators.required, <any>Validators.minLength(5)]],
            // address: this._fb.group({
            //     street: ['', <any>Validators.required],
            //     postcode: ['']
            // })
        });

    //     // subscribe to form changes  
    //     this.subcribeToFormChanges();
        
    //     // Update single value
    //     (<FormControl>this.myForm.controls['name'])
    //         .setValue('First Name', { onlySelf: true });
    // }

    // subcribeToFormChanges() {
    //     const myFormStatusChanges$ = this.myForm.statusChanges;
    //     const myFormValueChanges$ = this.myForm.valueChanges;
        
        // myFormStatusChanges$.subscribe(x => this.events.push({ event: 'STATUS_CHANGED', object: x }));
        // myFormValueChanges$.subscribe(x => this.events.push({ event: 'VALUE_CHANGED', object: x }));
    }

    save(model: User, isValid: boolean) {
        this.submitted = true;
        console.log(model, isValid);
    }
}

