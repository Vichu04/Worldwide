import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerNotesComponent } from './container-notes.component';

describe('ContainerNotesComponent', () => {
  let component: ContainerNotesComponent;
  let fixture: ComponentFixture<ContainerNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContainerNotesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContainerNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
