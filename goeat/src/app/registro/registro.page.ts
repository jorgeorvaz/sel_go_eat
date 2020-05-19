import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  checked : boolean = false;
  constructor() { }

  ngOnInit() {
  }
  addValue(e): void {
    var isChecked = e.currentTarget.checked;
  }
}
