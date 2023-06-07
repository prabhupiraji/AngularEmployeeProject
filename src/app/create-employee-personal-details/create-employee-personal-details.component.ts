import { Component, OnInit } from '@angular/core';
import { EmployeePersonalDetails } from './employeepersonaldetails';
import { EmployeepersonaldetailsService } from './employeepersonaldetails.service';
import { Router } from '@angular/router';
import { Igender } from '../gender.interface';
import { Imaritalstatus } from '../maritalstatus.interface';
import { HttpClient } from '@angular/common/http';
import { DropdownService } from '../dropdown-service.service';
import { Idropdown } from '../dropdown.interface';

@Component({
  selector: 'app-create-employee-personal-details',
  templateUrl: './create-employee-personal-details.component.html',
  
  styleUrls: ['./create-employee-personal-details.component.css']
})
export class CreateEmployeePersonalDetailsComponent implements OnInit{
  //  public locationId:number;
  // private _locations: any[] = [];

  dropdownValues: any;
  mySelect=[];
 
 public  genders:Array<Igender>=[{id:1,name:'Male'},
  {id:2,name:'Female'},{id:3,name:'Transgender'}];
  public genderId:number=1;

  public  maritals:Array<Imaritalstatus>=[{id:1,name:'M'},
  {id:2,name:'S'},{id:3,name:'W'}];
  public maritalstatusId:number=1;
  personal: EmployeePersonalDetails = new EmployeePersonalDetails();
  constructor(private service: EmployeepersonaldetailsService, private router: Router, private http: HttpClient,private dropdownService: DropdownService) {}

  ngOnInit(): void {
      // this.loadlocations();
      this.dropdownService.getDropdownValues().subscribe(
        (data:any) => {
          this.dropdownValues = data;
        },
        error => {
          console.error('Error:', error);
        }
      );
    
  }
  // loadlocations(){
  //   this.http.get('http://localhost:9086/getlocations').subscribe((result: any)=>
  //   {
  //     this.locations=result.data;
  //   })
  // }

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

