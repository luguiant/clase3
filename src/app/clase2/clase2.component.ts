import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-clase2',
  templateUrl: './clase2.component.html',
  styleUrls: ['./clase2.component.scss']
})
export class Clase2Component implements OnInit {

  private validateRoute: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.validateRoute = this.route.paramMap;
    console.log(this.validateRoute);
  }

}
