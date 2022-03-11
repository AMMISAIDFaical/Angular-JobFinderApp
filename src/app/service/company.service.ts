import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CompanyForm } from "../shared/company-form.model";
import { AngularFirestore, AngularFirestoreCollection } from "@angular/fire/firestore";


@Injectable({
  providedIn: 'root'
})

export class CompanyService {

  companyRef!:  AngularFirestoreCollection<CompanyForm>;

  constructor(private fs: AngularFirestore) { }

  companiesForm!: Observable<CompanyForm[]>;



  getCompanies(): Observable<CompanyForm[]> {
    return this.fs.collection<CompanyForm>('company').valueChanges();
  }



  async createNewCompany(companyForm: CompanyForm) {

    const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

    let autoId = ''

    for (let i = 0; i < 20; i++) {
      autoId += CHARS.charAt(
        Math.floor(Math.random() * CHARS.length)
      )
    }

    const data = {
      companyAdr: '',
      phoneNumber: '',
      wilaya: '',
      city: '',
      Offredjob: '',
      companyName: '',
      companyMail: '',
      gender:''
    };
    data["companyAdr"] = companyForm.companyAdr;
    data["phoneNumber"] = companyForm.phoneNumber;
    data["wilaya"] = companyForm.wilaya;
    data["city"] = companyForm.city;
    data["Offredjob"] = companyForm.Offredjob;
    data["companyName"] = companyForm.companyName;
    data["companyMail"] = companyForm.companyMail;
    data["gender"] = companyForm.gender;


    const res = await this.fs.collection('company').doc(autoId).set(data);

  }

  async deleteEmployee(id: string) {
    const res = await this.fs.collection('company').doc(id).delete();

  }

}
