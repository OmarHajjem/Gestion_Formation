import { Component, effect, EventEmitter, input, Output } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Cours } from '../../../shared/models/cours';

@Component({
  selector: 'app-frm-cours',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatButtonModule,
  ],
  templateUrl: './frm-cours.component.html',
  styleUrl: './frm-cours.component.css'
})
export class FrmCoursComponent {
  initialState = input<Cours>();

  @Output()
  formValuesChanged = new EventEmitter<Cours>();

  @Output()
  formSubmitted = new EventEmitter<Cours>();

  coursForm = this.formBuilder.group({
    idcours: 0,
    nom: ['', [Validators.required, Validators.minLength(3)]],
    nbheure: 0,

  });

  constructor(private formBuilder: FormBuilder){
    effect(() => {
      
      this.coursForm.setValue({
        idcours: this.initialState()?.idcours || 0,
        nom: this.initialState()?.nom || '',
        nbheure: this.initialState()?.nbheure || 0,

      });
    });
  }

  get idcours() {
    return this.coursForm.get('idcours')!;
  }

  get nom() {
    return this.coursForm.get('nom')!;
  }
  get nbheure() {
    return this.coursForm.get('nbheure')!;
  }

  submitForm() {
       
    this.formSubmitted.emit(this.coursForm.value as Cours);
  }

}
