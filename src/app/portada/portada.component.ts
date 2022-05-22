import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-portada',
  templateUrl: './portada.component.html',
  styleUrls: ['./portada.component.css']
})
export class PortadaComponent implements OnInit {

 @Input() ahijo: string;

  constructor() { }

  ngOnInit() {
  }

}