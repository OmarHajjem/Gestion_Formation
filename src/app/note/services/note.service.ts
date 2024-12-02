import { Injectable, signal } from '@angular/core';
import { Note } from '../../shared/models/note';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  private url = 'http://localhost:5200';
  Notes$ = signal<Note[]>([]);
  Note$ = signal<Note>({} as Note);

  constructor(private httpClient: HttpClient) { }

  private refreshNotes() {
    this.httpClient.get<Note[]>(`${this.url}/Note`)
      .subscribe(C => {
        this.Notes$.set(C);
      });
  }

  getNotes() {
    this.refreshNotes();
    return this.Notes$();
  }

  getNote(id: string) {
    this.httpClient.get<Note>(`${this.url}/Note/${id}`).subscribe(C => {
      this.Note$.set(C);
      return this.Note$();
    });
  }

  createNote(Note: Note) {
    return this.httpClient.post(`${this.url}/Note`, Note, { responseType: 'text' });
  }


  updateNotes(id: string, Note: Note) {
    return this.httpClient.put(`${this.url}/Note/${id}`, Note, { responseType: 'text' });
  }

  deleteNotes(id: string) {
    return this.httpClient.delete(`${this.url}/Note/${id}`, { responseType: 'text' });
  }
  
}