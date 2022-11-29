import { Component, OnInit } from '@angular/core';
import { BackendService } from '../services/backend.service';

@Component({
  selector: 'app-jugadores',
  templateUrl: './jugadores.component.html',
  styleUrls: ['./jugadores.component.css']
})
export class JugadoresComponent implements OnInit {
  miembros: any
  jugadores: any
  tecnicos: any

  constructor(private backend: BackendService) { }

  ngOnInit(): void {
    this.backend.getMiembros().subscribe((miembros: any) => {
      this.miembros = miembros;
      this.jugadores = miembros.filter((miembro: any) => { return miembro.tipo == 1; })
      this.tecnicos = miembros.filter((miembro: any) => { return miembro.tipo == 2; })
      console.log(this.miembros);
    })
  }

}
