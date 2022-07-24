import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Category, Message} from "../interfaces";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class CategoriesServices {
  constructor(private http: HttpClient) {
  }

  fetch(): Observable<Category[]> {
    return this.http.get<Category[]>('/api/category')
  }

  getById(id: string): Observable<Category> {
    return this.http.get<Category>(`/api/category/${id}`)
  }

  create(name: string,
         surname: string,
         surnames: string,
         gender: string,
         institute: string,
         specialty: string,
         birthday: string,
         passport1: string,
         passportNumber: string,
         passportInfo: string,
         DPA: string,
         telephone: string,
         homeAddress: string,
         language: string,
         studentFor: string,
         finances: string,
         zaklad: string,
         diplomInfo:string,
         certificateY: string,
         wifeInfo: string,
         fatherInfo: string,
         matherInfo: string,
         addressParents: string,
         army: string,
         armyInfo: string,
         armyInfo1: string,
         date?: Date,
         image?: File): Observable<Category> {

    const fd = new FormData()

    if (image) {
      fd.append('image', image, image.name)
    }
    fd.append('name', name)
    fd.append('surname', surname)
    fd.append('surnames', surnames)
    fd.append('institute', institute)
    fd.append('specialty', specialty)
    fd.append('gender', gender)
    fd.append('birthday', birthday)
    fd.append('passport1', passport1)
    fd.append('passportNumber', passportNumber)
    fd.append('passportInfo', passportInfo)
    fd.append('DPA', DPA)
    fd.append('telephone', telephone)
    fd.append('homeAddress', homeAddress)
    fd.append('language', language)
    fd.append('studentFor', studentFor)
    fd.append('finances', finances)
    fd.append('zaklad', zaklad)
    fd.append('diplomInfo', diplomInfo)
    fd.append('certificateY', certificateY)
    fd.append('wifeInfo', wifeInfo)
    fd.append('fatherInfo', fatherInfo)
    fd.append('matherInfo', matherInfo)
    fd.append('addressParents', addressParents)
    fd.append('army', army)
    fd.append('armyInfo', armyInfo)
    fd.append('armyInfo1', armyInfo1)
    // @ts-ignore
    fd.append('date', date)


    return this.http.post<Category>('/api/category', fd)
  }

  update(id: string | undefined,
         name: string,
         surname: string,
         surnames: string,
         gender: string,
         institute: string,
         specialty: string,
         birthday: string,
         passport1: string,
         passportNumber: string,
         passportInfo: string,
         DPA: string,
         telephone: string,
         homeAddress: string,
         language: string,
         studentFor: string,
         finances: string,
         zaklad: string,
         diplomInfo:string,
         certificateY: string,
         wifeInfo: string,
         fatherInfo: string,
         matherInfo: string,
         addressParents: string,
         army: string,
         armyInfo: string,
         armyInfo1: string,
         date?: Date,
         image?: File): Observable<Category> {

    const fd = new FormData()

    if (image) {
      fd.append('image', image, image.name)
    }
    fd.append('name', name)
    fd.append('surname', surname)
    fd.append('surnames', surnames)
    fd.append('institute', institute)
    fd.append('specialty', specialty)
    fd.append('gender', gender)
    fd.append('birthday', birthday)
    fd.append('passport1', passport1)
    fd.append('passportNumber', passportNumber)
    fd.append('passportInfo', passportInfo)
    fd.append('DPA', DPA)
    fd.append('telephone', telephone)
    fd.append('homeAddress', homeAddress)
    fd.append('language', language)
    fd.append('studentFor', studentFor)
    fd.append('finances', finances)
    fd.append('zaklad', zaklad)
    fd.append('diplomInfo', diplomInfo)
    fd.append('certificateY', certificateY)
    fd.append('wifeInfo', wifeInfo)
    fd.append('fatherInfo', fatherInfo)
    fd.append('matherInfo', matherInfo)
    fd.append('addressParents', addressParents)
    fd.append('army', army)
    fd.append('armyInfo', armyInfo)
    fd.append('armyInfo1', armyInfo1)
    // @ts-ignore
    fd.append('date', date)


    return this.http.patch<Category>(`/api/category/${id}`, fd)
  }

  delete(id: string): Observable<Message> {
    return this.http.delete<Message>(`/api/category/${id}`)
  }


}
