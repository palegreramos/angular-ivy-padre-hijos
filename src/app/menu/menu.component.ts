import { Component, OnInit, Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
 
 @Output() mievento=new EventEmitter<string>();
 minombre:string;

 ejecutarEvento() {
   this.mievento.emit(`Hola padre, soy tu hijo ${this.minombre}`);
 }

  constructor() { }

  ngOnInit() {

 
  }



}