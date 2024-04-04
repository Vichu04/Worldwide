import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LicenseCarousalComponent } from './license-carousal.component';

describe('LicenseCarousalComponent', () => {
  let component: LicenseCarousalComponent;
  let fixture: ComponentFixture<LicenseCarousalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LicenseCarousalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LicenseCarousalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
