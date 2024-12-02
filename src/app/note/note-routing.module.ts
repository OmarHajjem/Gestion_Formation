import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LsNoteComponent } from './components/ls-note/ls-note.component';
import { AjtNoteComponent } from './components/ajt-note/ajt-note.component';
import { UpdNoteComponent } from './components/upd-note/upd-note.component';

const routes: Routes = [
  { path: '', component: LsNoteComponent  },
  { path: 'ajout', component: AjtNoteComponent  },
  { path: 'modif/:id', component: UpdNoteComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NoteRoutingModule { }
