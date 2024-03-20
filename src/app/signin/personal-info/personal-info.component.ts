import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss'],
})
export class PersonalInfoComponent {

  constructor(private router: Router) { }


  handlePersonalInfo() {
    this.router.navigate(['signin/selfie'])
  }
}
