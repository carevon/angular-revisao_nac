import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../crud.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  // variavel global
  users:any;
  constructor(private crudService:CrudService) { }

  async ngOnInit() {
    var users = await this.crudService.list();
    console.log(users)
    this.users = users['data']
  }
}
