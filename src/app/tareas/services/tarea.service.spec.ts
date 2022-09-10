import { TareasServices } from './tareas.service';

describe('TraeaService', () => {
    let service: TareasServices;

    beforeEach(()=>{
        service = new TareasServices();
    })

    it('ToBe: Debe verificar que mi servicio inicie con 4 tareas', ()=>{
        expect(service.tareas.length).toBe(4);
    })
})