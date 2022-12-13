import { Component } from '@angular/core';
import { PersonajesService } from './personajes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  personajes: any[];

  currentPage: number;
  numPages: number;

  constructor(
    private personajesService: PersonajesService
  ) {
    this.currentPage = 1;
  }

  ngOnInit() {

    this.personajesService.getAll().subscribe(data => {
      this.personajes = data['results'];
      this.numPages = data['info'] ['pages'];
    });

  }

  async changePage(pSiguiente) {
    if (pSiguiente) {
      this.currentPage++;
    } else {
      this.currentPage--;
    }

    this.personajesService.getAll(this.currentPage).subscribe(data => {
      this.personajes = data['results'];
      this.numPages = data['info'] ['pages'];
    });

  }

}
