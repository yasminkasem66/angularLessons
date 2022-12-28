import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { debounceTime } from 'rxjs/operators';
import { Observable, of, from, fromEvent, Subscription } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { __param } from 'tslib';

@Component({
  selector: 'app-likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.scss']
})
export class LikesComponent implements OnInit {
  @Input('likesCount') likesCount: number = 0;
  title!: string;
  color!: string;
  buttonSubscription!: any;
  @Input('isFavorite') isSelected: boolean = false;
  @Output() jasmin = new EventEmitter();
  @ViewChild('btn', { static: true }) button!: ElementRef;
  promiseData!: string;
  promiseDataAsync!: Promise<string>;
  obsData: any
  obsDataAsync!: Observable<any>
  sub!: Subscription
  imgURl!: string;
  placeHolder!: string;
  data!: any[];

  constructor() {
    setTimeout(() => {
      this.imgURl = 'https://source.unsplash.com/user/c_v_r.png';
      this.data.push({ name: 'fff', age: 1, speed: 1 }
      )
    }, 3000);

    this.placeHolder = "https://via.placeholder.com/350x150";

    this.data = [
      { name: 'jasmin', age: 25, speed: 20 },
      { name: 'Ali', age: 35, speed: 10 },
      { name: 'Mohamed', age: 30, speed: 5 },
    ]
  }

  ngAfterViewInit() {
    this.buttonClick();
  }


  buttonClick() {
    this.buttonSubscription = fromEvent(this.button.nativeElement, 'click')
      .pipe(debounceTime(300))
      .subscribe((res: any) => console.log(res));
  }


  ngOnDestroy() {
    this.buttonSubscription.unsubscribe()
  }

  // onClick(){
  // this.isSelected =!this.isSelected;
  //  if(this.isSelected) {
  //    this.likesCount++;
  //    return;
  //  }
  //  this.likesCount--;
  // }


  // onClick(){
  //  if(this.isSelected) {
  //   this.likesCount--;
  //   this.isSelected =!this.isSelected;
  //  }else{
  //   this.likesCount++;
  //   this.isSelected =!this.isSelected;
  //  }
  // }

  onClick() {
    this.likesCount += this.isSelected ? -1 : 1;
    this.isSelected = !this.isSelected;
    this.jasmin.emit(this.isSelected);
  }



  ngOnInit(): void {
    console.log("xx");
    this.getPromise().then((data: string) => {
      this.promiseData = data
    });
    this.promiseDataAsync = this.getPromise()
    this.obsDataAsync = this.getObservable()
    this.getData()
  }

  // Async pipe with promise and observable 
  getPromise() {
    return new Promise<string>((resolve, reject) => {
      setTimeout(() => {
        resolve('Hello World')
      }, 3000)
    })
  }

  getObservable() {
    return ajax.getJSON('https://jsonplaceholder.typicode.com/todos/1');
  }

  getData() {
    this.sub = this.getObservable().subscribe((data) => {
      console.log({ data });
      this.obsData = data

    })
  }

}
