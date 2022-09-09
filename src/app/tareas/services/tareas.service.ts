import { Injectable } from "@angular/core";
import { Tarea } from "../interfaces/tarea";

@Injectable()
export class TareasServices {
    tareas: Array<Tarea> = [
        { 
            nombre: "Barrer",
            completada: false
        },
        { 
            nombre: "Trapear",
            completada: false 
        },
        { 
            nombre: "Cocinar",
            completada: false
        },
        { 
            nombre: "Estudiar",
            completada: false
        },
      ];

    deleteTreas(){
        this.tareas.pop();
    }
}