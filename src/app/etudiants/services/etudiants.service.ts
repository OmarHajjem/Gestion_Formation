import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { Etudiant } from '../../shared/models/etudiant';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {
  private url = 'http://localhost:5200';
  etudiants$ = signal<Etudiant[]>([]);
  etudiant$ = signal<Etudiant>({} as Etudiant);

  constructor(private httpClient: HttpClient) { }

  private refreshEtudiants() {
    this.httpClient.get<Etudiant[]>(`${this.url}/Etudiants`)
      .subscribe(E => {
        this.etudiants$.set(E);
      });
  }

  getEtudiants() {
    this.refreshEtudiants();
    return this.etudiants$();
  }

  getEtudiant(id: string) {
    this.httpClient.get<Etudiant>(`${this.url}/Etudiants/${id}`).subscribe(E => {
      this.etudiant$.set(E);
      return this.etudiant$();
    });
  }

  createEtudiant(Etudiant: Etudiant) {
    return this.httpClient.post(`${this.url}/Etudiants`, Etudiant, { responseType: 'text' });
  }


  updateEtudiant(id: string, Etudiant: Etudiant) {
    return this.httpClient.put(`${this.url}/Etudiants/${id}`, Etudiant, { responseType: 'text' });
  }

  deleteEtudiant(id: string) {
    return this.httpClient.delete(`${this.url}/Etudiants/${id}`, { responseType: 'text' });
  }
  
}
