import { Component } from '@angular/core';
import { FrmCoursComponent } from '../../../cours/components/frm-cours/frm-cours.component';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';
import { NoteService } from '../../services/note.service';
import { Note } from '../../../shared/models/note';
import { FrmNoteComponent } from "../frm-note/frm-note.component";

@Component({
  selector: 'app-ajt-note',
  standalone: true,
  imports: [FrmNoteComponent,
    MatCardModule, FrmNoteComponent],
  templateUrl: './ajt-note.component.html',
  styleUrl: './ajt-note.component.css'
})
export class AjtNoteComponent {
  constructor(
    private router: Router,
    private noteService: NoteService
  ) {}
  stringToNumber(str:string) {
    let s = str.toString().split(',');
    let ch = "";
    for (let i = 0; i < s.length; i++) {
      ch += s[i];
    }
  
    return Number(ch);
  }
  addnote(note: Note) {
    let c ={
        "idetd":this.stringToNumber(note.idetd.toString()),
        "idcours":this.stringToNumber(note.idcours.toString()),
        "valeur":this.stringToNumber(note.valeur.toString())
    }

 
    this.noteService.createNote(c).subscribe({
      next: () => {
        this.router.navigate(['/note']);
      },
      error: (error) => {
        alert('Creation du note échouée');
        console.error(error);
      },
    });
    this.noteService.getNotes();
  }

}
