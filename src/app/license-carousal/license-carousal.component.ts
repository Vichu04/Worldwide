import { Component, Input, input } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle'
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-license-carousal',
  standalone: true,
  imports: [CarouselModule,MatSliderModule,MatSlideToggleModule ],
  templateUrl: './license-carousal.component.html',
  styleUrl: './license-carousal.component.css'
})
export class LicenseCarousalComponent {
  constructor(private primengConfig: PrimeNGConfig) {
    // Optionally configure PrimeNG
    this.primengConfig.ripple = true; // For example, enable ripple effect on buttons
  }
  @Input() content: string | undefined;
  images = [
    'assets/images/Carousal/image1.jpg',
    'assets/images/Carousal/image2.jpg',
    'assets/images/Carousal/image3.jpg',
    'assets/images/Carousal/image4.jpg',
    'assets/images/Carousal/image5.jpg',
    'assets/images/Carousal/image6.jpg',
    'assets/images/Carousal/image7.jpg',
    'assets/images/Carousal/image8.jpg',
    // Add more image URLs as needed
  ];

  slides = [
    { id: 1, title: 'Slide 1', description: 'Description 1', imageUrl: 'assets/images/Carousal/image1.jpg'},
    { id: 2, title: 'Slide 2', description: 'Description 2', imageUrl: 'assets/images/Carousal/image2.jpg'},
    { id: 2, title: 'Slide 2', description: 'Description 2', imageUrl: 'assets/images/Carousal/image3.jpg'},
    { id: 2, title: 'Slide 2', description: 'Description 2', imageUrl: 'assets/images/Carousal/image4.jpg'},
    { id: 2, title: 'Slide 2', description: 'Description 2', imageUrl: 'assets/images/Carousal/image5.jpg'},
    { id: 2, title: 'Slide 2', description: 'Description 2', imageUrl: 'assets/images/Carousal/image6.jpg'},
    { id: 2, title: 'Slide 2', description: 'Description 2', imageUrl: 'assets/images/Carousal/image7.jpg'},
    { id: 2, title: 'Slide 2', description: 'Description 2', imageUrl: 'assets/images/Carousal/image8.jpg'},
    // Add more slides as needed
  ];

  currentSlide = 0;
  totalSlides = this.slides.length;

  setCurrentSlide(index: number) {
    this.currentSlide = index;
  }

}
