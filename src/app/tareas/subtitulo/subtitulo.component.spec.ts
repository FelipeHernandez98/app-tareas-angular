import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubtituloComponent } from './subtitulo.component';
import { TareasServices } from '../services/tareas.service';

describe('SubtituloComponent', () => {
  let component: SubtituloComponent;
  let fixture: ComponentFixture<SubtituloComponent>;

  let service: TareasServices

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubtituloComponent ],
      providers: [TareasServices]
    })
    .compileComponents();

    service = TestBed.inject(TareasServices)
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubtituloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
