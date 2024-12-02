import { Component } from '@angular/core';
import { FrmCoursComponent } from '../frm-cours/frm-cours.component';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';
import { CoursService } from '../../services/cours.service';
import { Cours } from '../../../shared/models/cours';

@Component({
  selector: 'app-ajt-cours',
  standalone: true,
  imports: [
    FrmCoursComponent, 
    MatCardModule
  ],
  templateUrl: './ajt-cours.component.html',
  styleUrl: './ajt-cours.component.css'
})
export class AjtCoursComponent {
  constructor(
    private router: Router,
    private coursService: CoursService
  ) {}


  stringToNumber(str:string) {
    let s = str.toString().split(',');
    let ch = "";
    for (let i = 0; i < s.length; i++) {
      ch += s[i];
    }
  
    return Number(ch);
  }

  addCours(cours: Cours) {
    let c ={
        "idcours":this.stringToNumber(cours.idcours.toString()),
        "nom":cours.nom,
        "nbheure":this.stringToNumber(cours.nbheure.toString())
    }

 
    this.coursService.createCours(c).subscribe({
      next: () => {
        this.router.navigate(['/cours']);
      },
      error: (error) => {
        alert('Creation du cours échouée');
        console.error(error);
      },
    });
    this.coursService.getCourss();
  }

}
