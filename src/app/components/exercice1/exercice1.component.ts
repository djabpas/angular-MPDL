import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { interval } from 'rxjs';
import { MovieService } from 'src/app/services/movie/movie.service';
import { error } from 'protractor';




@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.scss']
})
export class Exercice1Component implements OnInit {
  
  @ViewChild('hrHand',{static:false}) hrHand:ElementRef;
  @ViewChild('minHand',{static:false}) minHand:ElementRef;
  @ViewChild('secHand',{static:false}) secHand:ElementRef;



  constructor(private $ser: MovieService) { }

  AffichData() {
    this.$ser.GetData().subscribe(
      s => alert('OK'),
      err => {
        alert('error');
        console.log(err);
      }
    );
  }

  ngOnInit() {
    setInterval(() =>{
      const date= new Date();
      this.updateClock(date);
    },1000);

  }
  updateClock(date){
    this.secHand.nativeElement.style.transform='rotate('+ date.getSeconds() * 6 +'deg)';
    this.minHand.nativeElement.style.transform='rotate('+date.getMinutes() * 6+'deg)';
    this.hrHand.nativeElement.style.transform='rotate('+(date.getHours() * 30 + date.getMinutes() * 0.5 )+'deg)';
    
  }

}


