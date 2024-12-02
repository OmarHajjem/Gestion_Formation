import { Component, OnInit, WritableSignal } from '@angular/core';
import { FrmCoursComponent } from '../frm-cours/frm-cours.component';
import { MatCardModule } from '@angular/material/card';
import { ActivatedRoute, Router } from '@angular/router';
import { CoursService } from '../../services/cours.service';
import { Cours } from '../../../shared/models/cours';

@Component({
  selector: 'app-upd-cours',
  standalone: true,
  imports: [
    FrmCoursComponent, MatCardModule
  ],
  templateUrl: './upd-cours.component.html',
  styleUrl: './upd-cours.component.css'
})
export class UpdCoursComponent implements OnInit {
  cours = {} as WritableSignal<Cours>;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private coursService: CoursService
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (!id) {
      alert('Manque Id');
    }

    this.coursService.getCours(id!);
    this.cours = this.coursService.Cours$;
  }

  stringToNumber(str: string) {
    let s = str.toString().split(',');
    let ch = "";
    for (let i = 0; i < s.length; i++) {
      ch += s[i];
    }

    return Number(ch);
  }

  editCours(cours: Cours) {

    let c = {
      "idcours": this.stringToNumber(cours.idcours.toString()),
      "nom": cours.nom,
      "nbheure": this.stringToNumber(cours.nbheure.toString())
    }

    this.coursService
      .updateCours(this.cours()._id || '', c)
      .subscribe({
        next: () => {
          this.router.navigate(['/cours']);
        },
        error: (error) => {
          alert('Modification echouee!');
          console.error(error);
        },
      });
  }

}
