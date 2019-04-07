import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


import { SchoolService } from '../shared/school.service';
import { School } from '../shared/school.model';

declare var M: any;

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
    if (form) {
      console.log('the form value is ');
      console.log(form.value);
      form.reset();
    }
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
    };
  }

  onSubmit(form: NgForm) {
    if (form.value._id == "") {
      this.schoolService.postEmployee(form.value).subscribe((res) => {
        this.resetForm(form);
        //this.refreshEmployeeList();
        M.toast({ html: 'Saved successfully', classes: 'rounded' });
      });
    }
  }


}
