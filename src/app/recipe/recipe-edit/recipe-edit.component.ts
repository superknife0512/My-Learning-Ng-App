import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.scss']
})
export class RecipeEditComponent implements OnInit {
  id: string;
  isEdit: boolean = false;

  constructor(private curRoute: ActivatedRoute) { }

  ngOnInit() {
    this.curRoute.params.subscribe((params)=>{
      if(params['id']) {
        this.id = params['id']
        this.isEdit = true;
      }
    })
  }

}
