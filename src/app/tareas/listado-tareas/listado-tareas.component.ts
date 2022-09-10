import { Component } from '@angular/core';
import { Tarea } from '../interfaces/tarea';
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

  delete(tarea: Tarea){
    this.tareasServices.deleteTreas(tarea.nombre);
  }

  completar(tarea: Tarea ){
    this.tareasServices.completarTarea(tarea.nombre);
  }
}
