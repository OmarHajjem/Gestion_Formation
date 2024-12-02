import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LstEtudiantsComponent } from './components/lst-etudiants/lst-etudiants.component';
import { AjtEtudiantsComponent } from './components/ajt-etudiants/ajt-etudiants.component';
import { UpdEtudiantsComponent } from './components/upd-etudiants/upd-etudiants.component';

const routes: Routes = [
  {path:'',component :LstEtudiantsComponent},
  {path:'ajout',component :AjtEtudiantsComponent},
  {path:'modif/:id',component :UpdEtudiantsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EtudiantsRoutingModule { }
