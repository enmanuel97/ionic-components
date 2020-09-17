import { Component, OnInit } from '@angular/core';
import {PopoverController} from "@ionic/angular";

@Component({
  selector: 'app-popover-info',
  templateUrl: './popover-info.component.html',
  styleUrls: ['./popover-info.component.scss'],
})
export class PopoverInfoComponent implements OnInit {
  items = Array(10);
  constructor(public popoverController: PopoverController) {}

  ngOnInit() {}

  onClick(valor: number) {
    this.popoverController.dismiss({
      item: valor
    });
  }
}
