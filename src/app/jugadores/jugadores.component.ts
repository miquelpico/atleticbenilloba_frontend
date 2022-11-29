import { Component, OnInit } from '@angular/core';
import { BackendService } from '../services/backend.service';

@Component({
  selector: 'app-jugadores',
  templateUrl: './jugadores.component.html',
  styleUrls: ['./jugadores.component.css']
})
export class JugadoresComponent {
equipo: any
constructor(private backend:BackendService) { }

ngOnInit(): void {
  this.backend.getMiembros().subscribe((equipo) => {
    this.equipo = equipo;
    console.log(this.equipo);
  })
}

}
