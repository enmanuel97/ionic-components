import {Component, OnInit, ViewChild} from '@angular/core';
import {IonInfiniteScroll} from '@ionic/angular';

@Component({
  selector: 'app-infinite',
  templateUrl: './infinite.page.html',
  styleUrls: ['./infinite.page.scss'],
})
export class InfinitePage implements OnInit {

  @ViewChild(IonInfiniteScroll) inifiniteScroll: IonInfiniteScroll;

  data: any[] = Array(20);

  constructor() { }

  ngOnInit() {
  }

  loadData(event) {

    setTimeout(() => {

      if(this.data.length > 50) {
        this.inifiniteScroll.complete();
        this.inifiniteScroll.disabled = true;
        return;
      }
      const nuevoArr = Array(20);

      this.data.push(...nuevoArr);
      // event.target.complete();
    }, 2000);

    this.inifiniteScroll.complete();

  }
}
