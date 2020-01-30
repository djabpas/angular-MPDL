import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie/movie.service';
import { HttpClient } from '@angular/common/http';
import { Movie } from 'src/app/model/Movie';

@Component({
  selector: 'app-exercice2',
  templateUrl: './exercice2.component.html',
  styleUrls: ['./exercice2.component.scss']
})
export class Exercice2Component implements OnInit {
  data: Movie [];
  
  constructor(private $serv: MovieService) { }

  ngOnInit() {
  }
  AwidData() {
    
    this.$serv.GetData().subscribe(      
      s => this.data = s,
      error => {
        alert('error !!' + error.status);
        console.log(error);
      }
      
    );
    alert('results !!' + this.data);
    alert('results1 !!' + this.data.values);
  }

}
