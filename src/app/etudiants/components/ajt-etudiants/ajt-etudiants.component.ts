import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';
import { EtudiantService } from '../../services/etudiants.service';
import { Etudiant } from '../../../shared/models/etudiant';
import { FrmEtudiantsComponent } from '../frm-etudiants/frm-etudiants.component';

@Component({
  selector: 'app-ajt-etudiants',
  standalone: true,
  imports: [
    FrmEtudiantsComponent, 
    MatCardModule
  ],
  templateUrl: './ajt-etudiants.component.html',
  styleUrl: './ajt-etudiants.component.css'
})
export class AjtEtudiantsComponent {
  constructor(
    private router: Router,
    private etudiantService: EtudiantService
  ) {}

  stringToNumber(str:string) {
    let s = str.toString().split(',');
    let ch = "";
    for (let i = 0; i < s.length; i++) {
      ch += s[i];
    }
  
    return Number(ch);
  }

  addEtudiant(etudiant: Etudiant) {
    let e ={
      "idetd":this.stringToNumber(etudiant.idetd.toString()),
      "nom":etudiant.nom,
      "adresse":etudiant.adresse,
      "section":etudiant.section,
      "cin":etudiant.cin,    
          }

 
    this.etudiantService.createEtudiant(e).subscribe({
      next: () => {
        this.router.navigate(['/etudiants']);
      },
      error: (error) => {
        alert('Creation d`etudiant échouée');
        console.error(error);
      },
    });
    this.etudiantService.getEtudiants();
  }

}
