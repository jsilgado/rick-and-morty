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
    this.personajesService.getAll()
    .then(response => {
      this.personajes = response['results'];
      this.numPages = response['info'] ['pages'];
    })

  }

  async changePage(pSiguiente) {
    if (pSiguiente) {
      this.currentPage++;
    } else {
      this.currentPage--;
    }
    const response = await this.personajesService.getAll(this.currentPage);
    this.personajes = response ['results'];
  }

}
