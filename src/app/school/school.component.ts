import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


import { SchoolService } from '../shared/school.service';
import { School } from '../shared/school.model';

@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.css'],
  providers: [SchoolService]
})
export class SchoolComponent implements OnInit {

  constructor(private schoolService: SchoolService) { }

  ngOnInit() {
    this.resetForm();
  }
  resetForm(form?: NgForm) {
    if (form) 
      form.reset();
    this.schoolService.schoolSelected = {
      _id: '',
      name: '',
      Address: '',
      City: '',
      Telephone: '',
      Email: '',
      Owner: '',
      Slogan: '',
      Logo: ''
    }
  }
}
