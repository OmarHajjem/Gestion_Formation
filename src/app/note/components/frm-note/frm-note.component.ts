import { Component, effect, EventEmitter, input, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { Note } from '../../../shared/models/note';

@Component({
  selector: 'app-frm-note',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatButtonModule,
  ],
  templateUrl: './frm-note.component.html',
  styleUrl: './frm-note.component.css'
})
export class FrmNoteComponent {
  initialState = input<Note>();

  @Output()
  formValuesChanged = new EventEmitter<Note>();

  @Output()
  formSubmitted = new EventEmitter<Note>();

  noteForm = this.formBuilder.group({
    idcours: 0,
    idetd:0,
    valeur: 0,

  });

  constructor(private formBuilder: FormBuilder){
    effect(() => {
      
      this.noteForm.setValue({
        idcours: this.initialState()?.idcours || 0,
        idetd:this.initialState()?.idetd || 0,
        valeur: this.initialState()?.valeur || 0,

      });
    });
  }

  get idcours() {
    return this.noteForm.get('idcours')!;
  }

  get idetd() {
    return this.noteForm.get('idetd')!;
  }
  get valeur() {
    return this.noteForm.get('valeur')!;
  }

  submitForm() {
       
    this.formSubmitted.emit(this.noteForm.value as Note);
  }

}
