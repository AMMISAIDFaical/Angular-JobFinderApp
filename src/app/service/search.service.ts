import { Injectable } from "@angular/core";
import { AngularFirestore, AngularFirestoreCollection } from "@angular/fire/firestore";
import { Observable, observable } from "rxjs";
import { CompanyForm } from "../shared/company-form.model";
import { ICompany } from "../shared/company.model";

@Injectable({
  providedIn: 'root'
})

export class SearchService {

  constructor(private firestore: AngularFirestore) { }

  company!: Observable<CompanyForm | null>;
  companiesCollection!: AngularFirestoreCollection<CompanyForm>;

  getCompanies(): Observable<any[]> {
    return this.firestore.collection('company').valueChanges();
  }

 


  getFiltredCompanies(Offredjob: string, wilaya: string) {
    return this.companiesCollection = this.firestore.collection<CompanyForm>('company', ref => {
      // Compose a query using multiple .where() methods
      return ref
        .where('Offredjob', '==', Offredjob)
        .where('wilaya', '==', wilaya);
    });

  }



}
