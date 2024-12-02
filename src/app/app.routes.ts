import { Routes } from '@angular/router';

export const routes: Routes = [
    //{ path: 'cours', loadChildren: () => import('./cours/cours.module').then(m => m.CoursModule) },
    { path: 'etudiants', loadChildren: () => import('./etudiants/etudiants.module').then(m => m.EtudiantsModule) },
    { path: 'note', loadChildren: () => import('./note/note.module').then(m => m.NoteModule) }

];
