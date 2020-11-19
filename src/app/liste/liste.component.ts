import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService} from '../service.service';
@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {
  produits:any=[];
  constructor(private serv:ServiceService ,private route:Router)  { }

  ngOnInit(): void {
    this.serv.getProduits().subscribe(
      (data)=> {this.produits=data},
      (err) => {console.log(err)}
    );
  }

  delete(id:number){
    this.serv.deleteProduit(id).subscribe(
      (data)=> {this.ngOnInit();this.route.navigate(['liste']);},
      (err) => {console.log(err)}
    )
  }
}
