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

    deleteTreas(nombreTarea: string ){
        this.tareas = this.tareas.filter(tarea => tarea.nombre !== nombreTarea)
    }

    completarTarea(nombreTarea: string){
        const tarea: Tarea = this.tareas.find((tarea) => {
           return tarea.nombre === nombreTarea
        })!;
        tarea.completada = !tarea.completada;
    }
}