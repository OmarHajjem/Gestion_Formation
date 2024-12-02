import { Component, OnInit, WritableSignal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CoursService } from '../../services/cours.service';
import { Cours } from '../../../shared/models/cours';

@Component({
  selector: 'app-lst-cours',
  standalone: true,
  imports: [RouterModule, MatTableModule, MatButtonModule, MatCardModule],
  templateUrl: './lst-cours.component.html',
  styleUrl: './lst-cours.component.css'
})
export class LstCoursComponent implements OnInit{
  courss$ = {} as WritableSignal<Cours[]>;

  displayedColumns: string[] = [
    'col-nom',
    'col-nbheure',
    'col-action',
  ];


  constructor(private coursService: CoursService) {}

  ngOnInit() {
    this.fetchCourss();
  }

  public deleteCours(id: string): void {
    this.coursService.deleteCours(id).subscribe({
      next: () => this.fetchCourss(),
    });
  }

  private fetchCourss(): void {
    this.courss$ = this.coursService.Courss$;
    this.coursService.getCourss();
  }



}
