import { Component, effect, EventEmitter, input, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { Etudiant } from '../../../shared/models/etudiant';

@Component({
  selector: 'app-frm-etudiants',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatButtonModule,
  ],
  templateUrl: './frm-etudiants.component.html',
  styleUrl: './frm-etudiants.component.css'
})
export class FrmEtudiantsComponent {
  initialState = input<Etudiant>();

  @Output()
  formValuesChanged = new EventEmitter<Etudiant>();

  @Output()
  formSubmitted = new EventEmitter<Etudiant>();

  etudiantForm = this.formBuilder.group({
    idetd: 0,
    nom: ['', [Validators.required, Validators.minLength(3)]],
    adresse: ['', [Validators.required, Validators.minLength(3)]],
    section: ['', [Validators.required, Validators.minLength(3)]],
    cin: ['', [Validators.required, Validators.maxLength(8)]],
  });
  constructor(private formBuilder: FormBuilder){
    effect(() => {
      
      this.etudiantForm.setValue({
        idetd: this.initialState()?.idetd || 0,
        nom: this.initialState()?.nom ||'',
        adresse: this.initialState()?.adresse || '',
        section: this.initialState()?.section || '',
        cin: this.initialState()?.cin || ''
      });
    });
   }
   get idetd() {
    return this.etudiantForm.get('idetd')!;
  }

  get nom() {
    return this.etudiantForm.get('nom')!;
  }
  get adresse() {
    return this.etudiantForm.get('adresse')!;
  }
  get section() {
    return this.etudiantForm.get('section')!;
  }
  get cin() {
    return this.etudiantForm.get('cin')!;
  }

  submitForm() {
       
    this.formSubmitted.emit(this.etudiantForm.value as Etudiant);
  }

}
  
