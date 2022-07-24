import {Component, OnInit} from '@angular/core';
import {AuthServices} from "../../services/auth.services";
import {Router} from "@angular/router";

@Component({
  selector: 'app-site-layout',
  templateUrl: './site-layout.component.html',
  styleUrls: ['./site-layout.component.css']
})
export class SiteLayoutComponent implements OnInit {
  links = [
    {url: '/overview', name: 'Обзор'},
    {url: '/order', name: 'Готові шаблони'},
    {url: '/categories', name: 'Створити шаблон'},
    {url: '/about', name: 'Про нас'}
  ]

  constructor(private auth: AuthServices,
              private router: Router
  ) {
  }

  ngOnInit(): void {
  }

  logout(event: Event) {
    event.preventDefault()
    this.auth.logout()
    this.router.navigate(['/login'])

  }
}
