import { Component, OnInit, WritableSignal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { Etudiant } from '../../../shared/models/etudiant';
import { EtudiantService } from '../../services/etudiants.service';

@Component({
  selector: 'app-lst-etudiants',
  standalone: true,
  imports: [RouterModule,MatTableModule,MatButtonModule,MatCardModule],
  templateUrl: './lst-etudiants.component.html',
  styleUrl: './lst-etudiants.component.css'
})
export class LstEtudiantsComponent implements OnInit {
  etudiantss$ = {} as WritableSignal<Etudiant[]>;

  displayedColumns: string[] = [
    'col-nom',
    'col-adresse',
    'col-section',
    'col-cin',
    'col-action',
  ];


  constructor(private etudiantService: EtudiantService) {}

  ngOnInit() {
    this.fetchEtudiantss();
  }

  public deleteEtudiant(id: string): void {
    this.etudiantService.deleteEtudiant(id).subscribe({
      next: () => this.fetchEtudiantss(),
    });
  }

  private fetchEtudiantss(): void {
    this.etudiantss$ = this.etudiantService.etudiants$;
    this.etudiantService.getEtudiants();
  }



}
