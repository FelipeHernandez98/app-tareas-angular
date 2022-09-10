import { TareasServices } from './tareas.service';

describe('TraeaService', () => {
    let service: TareasServices;

    beforeEach(()=>{
        service = new TareasServices();
    })

    it('ToBe: Debe verificar que mi servicio inicie con 4 tareas', ()=>{
        expect(service.tareas.length).toBe(4);
    })

    it('Delete: deberia borrar una tarea', ()=>{

        service.deleteTreas("Barrer");
        expect(service.tareas.length).toBe(3);
    })

    it('No delete: No deberia borrar una tarea, porque no existe', ()=>{
        service.deleteTreas("Cantar");
        expect(service.tareas.length).toBe(4);
    })
})