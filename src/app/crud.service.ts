import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  // variaveis globais
  url:string="https://reqres.in/api/users"

  // referencia as classes
  constructor(private http:HttpClient ) { }

  // função que lsita usúarios
  async list(){
    console.log(this.url)
    return await this.http.get(this.url).toPromise()
  }
}
