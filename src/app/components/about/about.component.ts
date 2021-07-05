import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  name: string ='';
  age: string ='';
  constructor(private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.router.params.subscribe((params)=>{
      for (const key in params){
        console.log(params[key]);
      }
    });
    this.name = String(this.router.snapshot.paramMap.get('name'))
  }

}
