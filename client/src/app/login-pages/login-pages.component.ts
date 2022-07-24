import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthServices} from "../shared/services/auth.services";
import {Subscription} from "rxjs";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {MaterialService} from "../shared/classes/material.service";

@Component({
  selector: 'app-login-pages',
  templateUrl: './login-pages.component.html',
  styleUrls: ['./login-pages.component.css']
})
export class LoginPagesComponent implements OnInit, OnDestroy {
  //form : FormGroup 50/50
  form: any = FormGroup
  aSub: Subscription = new Subscription;

  constructor(private auth: AuthServices,
              private router: Router,
              private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.form = new FormGroup({
      //name: new FormControl(null,[Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
    })
    this.route.queryParams.subscribe((params: Params)=>{
      if (params['registered']){
        MaterialService.toast('you enter for system')
        //enter system

      } else if (params['accessDenied']){
        MaterialService.toast('enter for system')
        //first enter the system
      }else if (params['sessionFailed']){
        MaterialService.toast("session time is over, enter for system again")
      }
    })
  }

  ngOnDestroy() {
    if (this.aSub) {
      this.aSub.unsubscribe()
    }
  }

  onSubmit() {
    this.form.disable()
    this.aSub = this.auth.login(this.form.value).subscribe(
      () => this.router.navigate(['/overview']),
      error => {
        MaterialService.toast(error.error.message)
        this.form.enable()
      }
    )
  }
}
