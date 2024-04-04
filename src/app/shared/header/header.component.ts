import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputNumberModule } from 'primeng/inputnumber';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatRadioModule } from '@angular/material/radio';

interface Unit {
  name: string;
  code: string;
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule,InputGroupModule,MatRadioModule,MatButtonModule,MatDialogModule,InputNumberModule,InputGroupAddonModule,FormsModule,DropdownModule,CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
// [x: string]: string|any[]|null|undefined;


 Unit: {Name :string, code : string;}[] =
 [ {Name :'Inches', code : 'in'},{Name : 'Centimeter',code :'cm'}];

 selectedUnit : any;

constructor(private dialog: MatDialog) { }


  length: number = 0;
  width: number = 0;
  height: number = 0;
  cbm: number = 0;
  showCbm : boolean = false;

 
  
  calculateCBM() {
    // Calculation logic based on selected unit
    if (this.length && this.width && this.height) {
      let conversionFactor = 1; // Default to centimeters
      debugger;
      if (this.selectedUnit.code == 'in') {
        // Convert inches to centimeters
        conversionFactor = 2.54;
      }
      this.cbm = ((conversionFactor * this.length) * (conversionFactor *this.width) * (conversionFactor *this.height)) / ( 1000000); // Convert to cubic meters
    } else {
      this.cbm = 0;
    }
    this.showCbm = true;
  }

  closeCbm(){
    this.showCbm = false;
    this.length = 0;
    this.width = 0;
    this.height = 0;
    this.cbm = 0;
    this.selectedUnit = null;
  }
  

  menuitems = [
    {linkid:1,linkName:'Home',linkUrl:'home'},
    {linkid:2,linkName:'Air Freight',linkUrl:'airfreight'},
    {linkid:3,linkName:'Ocean Freight',linkUrl:'oceanfreight'},
    {linkid:4,linkName:'Transportation',linkUrl:'transportation'},
    {linkid:5,linkName:'Warehousing',linkUrl:'warehousing'},
    {linkid:6,linkName:'Customs Brokering',linkUrl:'customsbrokering'},
    {linkid:7,linkName:'Forms/Documents',linkUrl:'documents'},
    {linkid:8,linkName:'Knowledge Base',linkUrl:'knowledgebase'},
    {linkid:9,linkName:'About Us',linkUrl:'aboutus'},
    {linkid:8,linkName:'Contact Us',linkUrl:'contactus'},
  ];

}
