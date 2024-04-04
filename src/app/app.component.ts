import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./shared/header/header.component";
import { FooterComponent } from "./shared/footer/footer.component";
import { HomeComponent } from "./home/home.component";
import { LicenseCarousalComponent } from "./license-carousal/license-carousal.component";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, HeaderComponent, FooterComponent,
       HomeComponent, LicenseCarousalComponent,FormsModule,CommonModule]
})
export class AppComponent {
  title = 'WorldWideSite';
  cbmVisible: boolean = false;

  // constructor(private cbmService: CbmService) {
  //   this.cbmService.cbmVisible$.subscribe(visible => this.cbmVisible = visible);
  // }
}
