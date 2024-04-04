import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncoTermsComponent } from './inco-terms.component';

describe('IncoTermsComponent', () => {
  let component: IncoTermsComponent;
  let fixture: ComponentFixture<IncoTermsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IncoTermsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IncoTermsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
