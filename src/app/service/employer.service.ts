import { Injectable } from "@angular/core";
import { EmployeeCv } from "../shared/employee-cv.model";
import { AngularFirestore } from "@angular/fire/firestore";
import { Observable } from "rxjs";


@Injectable({
  providedIn: 'root'
})

export class EmployeeService {



  constructor(private fs: AngularFirestore) {

  }

  employeeCVs!: Observable<EmployeeCv[]>;


  getEmployees(): Observable<any[]> {
    return this.fs.collection('employee-cv').valueChanges();
  }


  async createNewEmployee(employee_cv: EmployeeCv) {

    const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

    let autoId = ''

    for (let i = 0; i < 20; i++) {
      autoId += CHARS.charAt(
        Math.floor(Math.random() * CHARS.length)
      )
    }

    const data = {
      FullName : '',
      CompanyName : '',
      adress : '',
      age : '',
      city : '',
      degree : '',
      email :'',
      gener :'',
      job : '',
      phoneNumber : '',
      school : '',
      wilaya : '',
    };
    data["FullName"] = employee_cv.FullName;
    data["CompanyName"] = employee_cv.companyName;
    data["adress"]= employee_cv.adress;
    data["age"]= employee_cv.age;
    data["city"]= employee_cv.city;
    data["degree"]= employee_cv.degree;
    data["email"]= employee_cv.Email;
    data["gener"]= employee_cv.gener;
    data["phoneNumber"]= employee_cv.phoneNumber;
    data["school"]= employee_cv.school;
    data["wilaya"]= employee_cv.wilaya;
    data["job"]= employee_cv.job;

    // Add a new document in collection "cities" with ID 'LA'
    const res = await this.fs.collection('employee-cv').doc(autoId).set(data);

  }

  async deleteEmployee(id : string ){
    const res = await this.fs.collection('employee-cv').doc(id).delete();

  }



}




