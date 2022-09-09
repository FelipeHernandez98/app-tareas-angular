import { Component } from '@angular/core';
import { TareasServices } from '../services/tareas.service';

@Component({
  selector: 'app-subtitulo',
  templateUrl: './subtitulo.component.html'
})
export class SubtituloComponent {
  constructor(private tareasService: TareasServices){
    
  }

  get tareas(){
    return this.tareasService.tareas.length
  }
}
