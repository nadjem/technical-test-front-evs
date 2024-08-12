import {Component, inject, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Store} from "@ngrx/store";
import * as ItemAction from "../../store/actions";
import {Router} from "@angular/router";

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrl: './item-form.component.scss'
})
export class ItemFormComponent implements OnInit{
  private store = inject(Store);
  private router = inject(Router);
  private formBuilder = inject(FormBuilder);
  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    email: new FormControl(''),
  });
  submitted = false;

  ngOnInit() {
    this.form = this.formBuilder.group(
      {
        username: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]]
      }
    );
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    this.store.dispatch(ItemAction.addItem({data:this.form.value}));
    this.router.navigate(['/']);
  }

  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }

}
