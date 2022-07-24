import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CategoriesServices} from "../../shared/services/categories.services";
import {switchMap} from "rxjs/operators";
import {of} from "rxjs";
import {MaterialService} from "../../shared/classes/material.service";
import {Category} from "../../shared/interfaces";

@Component({
  selector: 'app-categories-form',
  templateUrl: './categories-form.component.html',
  styleUrls: ['./categories-form.component.css']
})
export class CategoriesFormComponent implements OnInit {


  form: any = FormGroup
  isNew = true
  answer = ''
  answer2 = ''
  answer3 = ''
  answer4 = ''
  answer5 = ''
  institute = this.answer
  gender = this.answer2
  language = this.answer3
  studentFor = this.answer4
  finances = this.answer5


  // @ts-ignore
  category: Category


  constructor(private route: ActivatedRoute,
              private categoriesService: CategoriesServices,
              private router: Router
  ) {

  }

  ngOnInit(): void {
    this.form = new FormGroup(
      {
        name: new FormControl(null, Validators.required),
        surname: new FormControl(null, Validators.required),
        surnames: new FormControl(null, Validators.required),
        answer2: new FormControl(null, Validators.required),
        answer: new FormControl(null, Validators.required),
        specialty: new FormControl(null, Validators.required),
        birthday: new FormControl(null, Validators.required),
        passport1: new FormControl('-'),
        passportNumber: new FormControl(null, Validators.required),
        passportInfo: new FormControl(null, Validators.required),
        DPA: new FormControl(null, Validators.required),
        telephone: new FormControl(null, Validators.required),
        homeAddress: new FormControl(null, Validators.required),
        answer3: new FormControl(null, Validators.required),
        answer4: new FormControl(null, Validators.required),
        answer5: new FormControl(null, Validators.required),
        zaklad: new FormControl(null, Validators.required),
        diplomInfo: new FormControl(null, Validators.required),
        certificateY: new FormControl(null, Validators.required),
        wifeInfo: new FormControl('-', ),
        fatherInfo: new FormControl('-', ),
        matherInfo: new FormControl('-', ),
        addressParents: new FormControl('-',),
        army: new FormControl('-', ),
        armyInfo: new FormControl('-',),
        armyInfo1: new FormControl('-',)


      })


    // this.route.params.subscribe((params: Params) => {
    //   if (params['id']) {
    //     this.isNew = false
    //   }
    // })

    this.form.disable()

    this.route.params
      .pipe(
        switchMap(
          (params: Params) => {
            if (params['id']) {
              this.isNew = false
              return this.categoriesService.getById(params['id'])
            }
            return of(null)
          }
        )
      )
      .subscribe(
        category => {
          if (category) {
            this.category = category
            this.form.patchValue({
              name: category.name,
              surname: category.surname,
              surnames: category.surnames,
              answer2: category.gender,
              answer: category.institute,
              specialty: category.specialty,
              birthday: category.birthday,
              passport1: category.passport1,
              passportNumber: category.passportNumber,
              passportInfo: category.passportInfo,
              DPA: category.DPA,
              telephone: category.telephone,
              homeAddress: category.homeAddress,
              answer3: category.language,
              answer4: category.studentFor,
              answer5: category.finances,
              zaklad: category.zaklad,
              diplomInfo:category.diplomInfo,
              certificateY:category.certificateY,
              wifeInfo: category.wifeInfo,
              fatherInfo: category.fatherInfo,
              matherInfo: category.matherInfo,
              addressParents: category.addressParents,
              army: category.army,
              armyInfo: category.armyInfo,
              armyInfo1: category.armyInfo1,
              //date: Date,
            })
            MaterialService.updateTextInputs()
          }
          this.form.enable()
        },
        error => MaterialService.toast(error.error.message)
      )
  }

  deleteCategory() {
    const decision = window.confirm(`You are sure you want to delete category "${this.category.name}"`)

    if (decision) {
      // @ts-ignore
      this.categoriesService.delete(this.category._id)
        .subscribe(
          response => MaterialService.toast(response.message),
          error => MaterialService.toast(error.error.message),
          () => this.router.navigate(['/categories'])
        )
    }
  }

  onSubmit() {
    let obs$
    this.form.disable()

    if (this.isNew) {
      //create
      obs$ = this.categoriesService.create(
        this.form.value.name,
        this.form.value.surname,
        this.form.value.surnames,
        this.form.value.answer2,
        this.form.value.answer,
        this.form.value.specialty,
        this.form.value.birthday,
        this.form.value.passport1,
        this.form.value.passportNumber,
        this.form.value.passportInfo,
        this.form.value.DPA,
        this.form.value.telephone,
        this.form.value.homeAddress,
        this.form.value.answer3,
        this.form.value.answer4,
        this.form.value.answer5,
        this.form.value.zaklad,
        this.form.value.diplomInfo,
        this.form.value.certificateY,
        this.form.value.wifeInfo,
        this.form.value.fatherInfo,
        this.form.value.matherInfo,
        this.form.value.addressParents,
        this.form.value.army,
        this.form.value.armyInfo,
        this.form.value.armyInfo1,
      )

    } else {
      //update
      obs$ = this.categoriesService.update(
        this.category._id,
        this.form.value.name,
        this.form.value.surname,
        this.form.value.surnames,
        this.form.value.answer2,
        this.form.value.answer,
        this.form.value.specialty,
        this.form.value.birthday,
        this.form.value.passport1,
        this.form.value.passportNumber,
        this.form.value.passportInfo,
        this.form.value.DPA,
        this.form.value.telephone,
        this.form.value.homeAddress,
        this.form.value.answer3,
        this.form.value.answer4,
        this.form.value.answer5,
        this.form.value.zaklad,
        this.form.value.diplomInfo,
        this.form.value.certificateY,
        this.form.value.wifeInfo,
        this.form.value.fatherInfo,
        this.form.value.matherInfo,
        this.form.value.addressParents,
        this.form.value.army,
        this.form.value.armyInfo,
        this.form.value.armyInfo1,

      )
    }
    obs$.subscribe(
      category => {
        this.category = category
        MaterialService.toast('edits is save')
        this.form.enable()
      },
      error => {
        MaterialService.toast(error.error.message)
        this.form.enable()
      }
    )

  }



}
