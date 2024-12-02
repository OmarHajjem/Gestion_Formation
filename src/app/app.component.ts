import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MatToolbarModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'Gestion_Formation';
  constructor(public router: Router) {}

  ngOnInit() {
    // this.router.navigate(['/cours'], { skipLocationChange: true });
    // this.router.navigate(['/etudiants'], { skipLocationChange: true });
    this.router.navigate(['/note'], { skipLocationChange: true });


  }
}
