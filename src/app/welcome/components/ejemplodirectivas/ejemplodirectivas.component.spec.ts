import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjemplodirectivasComponent } from './ejemplodirectivas.component';

describe('EjemplodirectivasComponent', () => {
  let component: EjemplodirectivasComponent;
  let fixture: ComponentFixture<EjemplodirectivasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EjemplodirectivasComponent]
    });
    fixture = TestBed.createComponent(EjemplodirectivasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
