import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionEstrategicaComponent } from './gestion-estrategica.component';

describe('GestionEstrategicaComponent', () => {
  let component: GestionEstrategicaComponent;
  let fixture: ComponentFixture<GestionEstrategicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionEstrategicaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionEstrategicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
