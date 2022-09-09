import { Component } from '@angular/core';
import { TareasServices } from '../services/tareas.service';

@Component({
  selector: 'app-listado-tareas',
  templateUrl: './listado-tareas.component.html',
  styleUrls: ['./listado-tareas.component.css']
})
export class ListadoTareasComponent {
  constructor( private tareasServices: TareasServices ){

  }

  get tareas(){
    return this.tareasServices.tareas
  }

  delete(){
    this.tareasServices.deleteTreas();
  }
}
