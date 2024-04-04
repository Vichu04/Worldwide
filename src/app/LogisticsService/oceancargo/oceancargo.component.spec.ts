import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OceancargoComponent } from './oceancargo.component';

describe('OceancargoComponent', () => {
  let component: OceancargoComponent;
  let fixture: ComponentFixture<OceancargoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OceancargoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OceancargoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
