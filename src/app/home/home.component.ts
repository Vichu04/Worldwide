import { Component} from '@angular/core';
// import { CarouselModule  } from 'primeng/carousel';
import {RouterModule} from '@angular/router'
import {CommonModule } from '@angular/common';
import {AnimateModule} from 'primeng/animate';
import {AnimateOnScrollModule} from 'primeng/animateonscroll';
import {LicenseCarousalComponent } from "../license-carousal/license-carousal.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [AnimateModule,RouterModule, CommonModule, AnimateOnScrollModule, LicenseCarousalComponent]
})
export class HomeComponent {

  constructor() {
    }
    ngOnInit(): void {
  }
}
  
