import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { style } from '@angular/animations';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'myPortfolioProject';
  personalInformationName = '';
  personalInformationEmail = '';
  personalInformationPhone = '';
  personalInformationAddress = '';
  qualification = [{ school: '', degree: '', year: '' }];
  submitted: boolean = false;
  showHeading: boolean = true;

  //Function to add Qualification
  addQualification() {
    this.qualification.push({ school: '', degree: '', year: '' });
  }
  //Submitted button
  submit() {
    //changed to true when clicked
    this.submitted = true;
    this.showHeading = false;
  }

  //edit button
  edit() {
    this.submitted = false;
    this.showHeading = true;
  }
}
