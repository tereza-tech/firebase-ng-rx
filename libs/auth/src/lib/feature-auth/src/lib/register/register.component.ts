//import { DynamicFormComponent, Field, ListErrorsComponent, NgrxFormsFacade } from '@ngrx';
import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Validators, ValidatorFn } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthFacade } from '../../data-access/src/index';
import { FormsModule } from '@ngrx-transactions-app/core-forms'


interface Field {
  type: 'INPUT' | 'TEXTAREA',
  name: string,
  placeholder: string,
  validator?: ValidatorFn[];
  attrs?: any;
}

export interface Errors {
  [key: string]: string;
}


const structure: Field[] = [
  {
    type: 'INPUT',
    name: 'username',
    placeholder: 'Username',
    validator: [Validators.required],
  },
  {
    type: 'INPUT',
    name: 'email',
    placeholder: 'Email',
    validator: [Validators.required],
  },
  {
    type: 'INPUT',
    name: 'password',
    placeholder: 'Password',
    validator: [Validators.required],
    attrs: {
      type: 'password',
    },
  },
];

@Component({
  selector: 'user-register',
  standalone: true,
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css'],
  imports: [RouterModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterComponent implements OnInit, OnDestroy {
  structure$ = this.ngrxFormsFacade.structure$;
  data$ = this.ngrxFormsFacade.data$;

  constructor(private ngrxFormsFacade: NgrxFormsFacade, private facade: AuthFacade) { }

  ngOnInit() {
    this.ngrxFormsFacade.setStructure(structure);
    this.data$ = this.ngrxFormsFacade.data$;
    this.structure$ = this.ngrxFormsFacade.structure$;
  }

  updateForm(changes: any) {
    this.ngrxFormsFacade.updateData(changes);
  }

  submit() {
    this.facade.register();
  }

  ngOnDestroy() {
    this.ngrxFormsFacade.initializeForm();
  }
}
