import { Component, OnInit } from '@angular/core';
import { EmployeePersonalDetails } from './employeepersonaldetails';
import { EmployeepersonaldetailsService } from './employeepersonaldetails.service';
import { Router } from '@angular/router';
import { Igender } from '../gender.interface';
import { Imaritalstatus } from '../maritalstatus.interface';

@Component({
  selector: 'app-create-employee-personal-details',
  templateUrl: './create-employee-personal-details.component.html',
  styleUrls: ['./create-employee-personal-details.component.css']
})
export class CreateEmployeePersonalDetailsComponent implements OnInit{

 public  genders:Array<Igender>=[{id:1,name:'Male'},
  {id:2,name:'Female'},{id:3,name:'Transgender'}];
  public genderId:number=1;

  public  maritals:Array<Imaritalstatus>=[{id:1,name:'M'},
  {id:2,name:'S'},{id:3,name:'W'}];
  public maritalstatusId:number=1;
  personal: EmployeePersonalDetails = new EmployeePersonalDetails();
  constructor(private service: EmployeepersonaldetailsService, private router: Router) {}

  ngOnInit(): void {
      
  }

  saveEmployeePersonalDetails(){
    this.service.createEmployeepersonaldetails(this.personal).subscribe(data => {
      console.log(data);
    },
    error => console.log(error));
  }

  onSubmit(){
    console.log(this.personal)
    this.saveEmployeePersonalDetails();
  }

}

