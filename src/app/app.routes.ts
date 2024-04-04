import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AircargoComponent } from './LogisticsService/aircargo/aircargo.component';
import { OceancargoComponent } from './LogisticsService/oceancargo/oceancargo.component';
import { TransportationComponent } from './LogisticsService/transportation/transportation.component';
import { WarehousingComponent } from './LogisticsService/warehousing/warehousing.component';
import { CustomsComponent } from './LogisticsService/customs/customs.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ContainerNotesComponent } from './Resources/container-notes/container-notes.component';
import { IncoTermsComponent } from './Resources/inco-terms/inco-terms.component';
import { FormsDocumentsComponent } from './Resources/forms-documents/forms-documents.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'AirCargo', component: AircargoComponent },
    { path: 'OceanCargo', component: OceancargoComponent },
    { path: 'Transportation', component: TransportationComponent },
    { path: 'Warehousing', component: WarehousingComponent },
    { path: 'Customs', component: CustomsComponent },
    { path: 'AboutUs', component: AboutUsComponent },
    { path: 'ContactUs', component: ContactUsComponent },
    { path: 'ContainerNotes', component: ContainerNotesComponent },
    { path: 'IncoTerms', component: IncoTermsComponent },
    { path: 'Documents', component: FormsDocumentsComponent },
    { path: 'ContactUs', component: ContactUsComponent },
];
    
