import { Component, WritableSignal } from '@angular/core';
import { FrmNoteComponent } from '../frm-note/frm-note.component';
import { MatCardModule } from '@angular/material/card';
import { Note } from '../../../shared/models/note';
import { ActivatedRoute, Router } from '@angular/router';
import { NoteService } from '../../services/note.service';

@Component({
  selector: 'app-upd-note',
  standalone: true,
  imports: [
    FrmNoteComponent, MatCardModule

  ],
  templateUrl: './upd-note.component.html',
  styleUrl: './upd-note.component.css'
})
export class UpdNoteComponent {
  note = {} as WritableSignal<Note>;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private noteService: NoteService
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (!id) {
      alert('Manque Id');
    }

    this.noteService.getNote(id!);
    this.note = this.noteService.Note$;
  }

  stringToNumber(str: string) {
    let s = str.toString().split(',');
    let ch = "";
    for (let i = 0; i < s.length; i++) {
      ch += s[i];
    }

    return Number(ch);
  }

  editnote(note: Note) {

    let c = {
      "idetd": this.stringToNumber(note.idetd.toString()),
      "idcours":  this.stringToNumber(note.idcours.toString()),
      "valeur": this.stringToNumber(note.valeur.toString())
    }

    this.noteService
      .updateNotes(this.note()._id || '', c)
      .subscribe({
        next: () => {
          this.router.navigate(['/note']);
        },
        error: (error) => {
          alert('Modification echouee!');
          console.error(error);
        },
      });
  }

}
