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
    this.refreshShoolList();
  }
  resetForm(form?: NgForm) {
    if (form) {
      console.log(this.schoolService.schoolSelected._id);
      form.resetForm(); }

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
    if (this.schoolService.schoolSelected._id == '') {
      console.log('selected id on submit is' + this.schoolService.schoolSelected._id);
      this.schoolService.postEmployee(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshShoolList();
        M.toast({ html: 'Saved successfully', classes: 'rounded' });

      });
    } else {
      this.schoolService.putEmployee(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshShoolList();
        M.toast({ html: 'Updated successfully', classes: 'rounded' });
      });
    }
  }

  refreshShoolList() {
    this.schoolService.getEmployeeList().subscribe((res) => {
      this.schoolService.schools = res as School[];
    });
  }

  onEdit(sch: School) {
    this.schoolService.schoolSelected = sch;
  }

  onDelete(_id: string, form: NgForm) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.schoolService.deleteEmployee(_id).subscribe((res) => {
        this.refreshShoolList();
        this.resetForm(form);
        M.toast({ html: 'Deleted successfully', classes: 'rounded' });
      });
    }
  }


}
