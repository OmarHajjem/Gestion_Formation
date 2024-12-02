import { Component, WritableSignal } from '@angular/core';
import { FrmEtudiantsComponent } from '../frm-etudiants/frm-etudiants.component';
import { MatCardModule } from '@angular/material/card';
import { Etudiant } from '../../../shared/models/etudiant';
import { ActivatedRoute, Router } from '@angular/router';
import { EtudiantService } from '../../services/etudiants.service';

@Component({
  selector: 'app-upd-etudiants',
  standalone: true,
  imports: [
    FrmEtudiantsComponent,
    MatCardModule
  ],
  templateUrl: './upd-etudiants.component.html',
  styleUrl: './upd-etudiants.component.css'
})
export class UpdEtudiantsComponent {
  etudiant = {} as WritableSignal<Etudiant>;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private etudiantService: EtudiantService
  ) { }
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (!id) {
      alert('Manque Id');
    }

    this.etudiantService.getEtudiant(id!);
    this.etudiant=this.etudiantService.etudiant$;
  }
  stringToNumber(str: string) {
    let s = str.toString().split(',');
    let ch = "";
    for (let i = 0; i < s.length; i++) {
      ch += s[i];
    }

    return Number(ch);
  }
    editEtudiant(etudiant:Etudiant){
  let e ={
    "idetd":this.stringToNumber(etudiant.idetd.toString()),
    "nom":etudiant.nom,
    "adresse":etudiant.adresse,
    "section":etudiant.section,
    "cin":etudiant.cin,    
        }
        
        this.etudiantService.updateEtudiant(this.etudiant()._id||'',e)
        .subscribe({
          next : ()=>{
            this.router.navigate(['/etudiants']);
          },
          error:(error)=>{
            alert('Modification echouee!');
            console.error(error);
          },
         })
    }
              

    

}
