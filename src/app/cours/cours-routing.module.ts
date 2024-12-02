import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LstCoursComponent } from './components/lst-cours/lst-cours.component';
import { AjtCoursComponent } from './components/ajt-cours/ajt-cours.component';
import { UpdCoursComponent } from './components/upd-cours/upd-cours.component';

const routes: Routes = [
  { path: '', component: LstCoursComponent  },
  { path: 'ajout', component: AjtCoursComponent  },
  { path: 'modif/:id', component: UpdCoursComponent  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursRoutingModule { }
