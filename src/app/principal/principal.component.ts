import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

apadre:string="a";
bpadre:string;

getMensaje(e) {
  this.bpadre=e;
  console.log(e);
};

  constructor() { }

  ngOnInit() {
  }

}