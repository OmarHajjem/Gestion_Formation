import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { Cours } from '../../shared/models/cours';

@Injectable({
  providedIn: 'root'
})
export class CoursService {
  private url = 'http://localhost:5200';
  Courss$ = signal<Cours[]>([]);
  Cours$ = signal<Cours>({} as Cours);

  constructor(private httpClient: HttpClient) { }

  private refreshCourss() {
    this.httpClient.get<Cours[]>(`${this.url}/Cours`)
      .subscribe(C => {
        this.Courss$.set(C);
      });
  }

  getCourss() {
    this.refreshCourss();
    return this.Courss$();
  }

  getCours(id: string) {
    this.httpClient.get<Cours>(`${this.url}/Cours/${id}`).subscribe(C => {
      this.Cours$.set(C);
      return this.Cours$();
    });
  }

  createCours(Cours: Cours) {
    return this.httpClient.post(`${this.url}/Cours`, Cours, { responseType: 'text' });
  }


  updateCours(id: string, Cours: Cours) {
    return this.httpClient.put(`${this.url}/Cours/${id}`, Cours, { responseType: 'text' });
  }

  deleteCours(id: string) {
    return this.httpClient.delete(`${this.url}/Cours/${id}`, { responseType: 'text' });
  }
  
}
