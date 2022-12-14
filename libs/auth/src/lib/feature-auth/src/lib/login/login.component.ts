import { DynamicFormComponent, Field, ListErrorsComponent, NgrxFormsFacade } from '@ngrx-transactions-app/core-forms';
import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthFacade } from 'data-access';

const structure: Field[] = [
  {
    type: 'INPUT',
    name: 'email',
    placeholder: 'Username',
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
  selector: 'cdt-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [ListErrorsComponent, DynamicFormComponent, RouterModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements OnInit, OnDestroy {
  structure$ = this.ngrxFormsFacade.structure$;
  data$ = this.ngrxFormsFacade.data$;

  constructor(private ngrxFormsFacade: NgrxFormsFacade, private facade: AuthFacade) { }

  ngOnInit() {
    this.ngrxFormsFacade.setStructure(structure);
  }

  updateForm(changes: any) {
    this.ngrxFormsFacade.updateData(changes);
  }

  submit() {
    this.facade.login();
  }

  ngOnDestroy() {
    this.ngrxFormsFacade.initializeForm();
  }
}
