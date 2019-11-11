import { Component, OnInit } from '@angular/core';
import { HomeFormModel } from '../models/home.form';
import { ApiService } from '../services/home.service';
import { Cidade } from '../models/Cidade';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import {debounceTime, distinctUntilChanged, map} from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home-form',
  templateUrl: './home.form.component.html',
  styleUrls: ['./home.form.component.scss']
})
export class HomeFormComponent implements OnInit {

  public label: HomeFormModel = {
    nome: "Nome completo*",
    email: "E-mail*",
    celular: "Celular*",
    cidade: "Cidade*",
    cargos: "Cargos*"
  }
  public listaCidades: Cidade[]
  public homeForm: FormGroup

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.createForm()
  }

  public createForm(): Object {
    return this.homeForm = new FormGroup({
      cidade: new FormControl(),
    });
  }

  public buscarCidades(): void{
    this.api.getCidades(this.homeForm.get('cidade').value)
    .subscribe(res => {
      this.listaCidades = res    
      console.log(this.listaCidades)
    })
  }

  public buscarCargos():void{
    this.api.getCargos('Info')
    .subscribe(res =>{
      console.log(res)
    })
  }

  public search():void{
    const search = (text$: Observable<string>) =>
    {
        return text$.pipe(debounceTime(200), distinctUntilChanged(), map(term => term.length < 2 ? []
          : this.listaCidades.filter(v => v.Descricao.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10)));
      }

    console.log(search)
  }

}
