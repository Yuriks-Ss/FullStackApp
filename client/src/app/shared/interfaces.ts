import {Data} from "@angular/router";

export interface User {
  email: string
  password: string
}

export interface Message {
  message: string
}

export interface Category {
  name: string
  surname: string,
  surnames: string,
  gender:string,
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
  certificateY:string,
  wifeInfo: string,
  fatherInfo: string,
  matherInfo: string,
  addressParents: string,
  army: string,
  armyInfo: string,
  armyInfo1: string,
  date?: Data,
  imageSrc?: string
  user?: string
  _id?: string
}

