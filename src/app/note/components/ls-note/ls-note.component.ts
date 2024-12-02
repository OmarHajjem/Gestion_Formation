import { Component, WritableSignal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { Note } from '../../../shared/models/note';
import { NoteService } from '../../services/note.service';

@Component({
  selector: 'app-ls-note',
  standalone: true,
  imports: [RouterModule,MatTableModule,MatButtonModule,MatCardModule],
  templateUrl: './ls-note.component.html',
  styleUrl: './ls-note.component.css'
})
export class LsNoteComponent {
  notes$= {} as WritableSignal<Note[]>;
  displayedColumns: string[] = [
    'col-idetd',
    'col-idcours',
    'col-valeur',
    'col-action',
  ];
  constructor(private noteservice: NoteService){}
  ngOnInit(){
    this.fetchnotes()
  }

  public deleteNote(id: string): void {
    this.noteservice.deleteNotes(id).subscribe({
      next: () => this.fetchnotes(),
    });
  }
  private fetchnotes(){

    this.notes$=this.noteservice.Notes$;
    this.noteservice.getNotes();
  }
}
