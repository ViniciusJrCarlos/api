import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Curso } from './curso';
import { CursoService } from './curso.service';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {

  //url base da api
 //url = "http://localhost/api/php/";

  //vetor de cursos

  //vetor = null;
   vetor : Curso[];
  curso = new Curso();

  constructor(private curso_servico:CursoService) {}

  //inicializador
  ngOnInit() {

    this.Selecionar();

  }

  //cadastro
  Cadastrar():void {

    alert("Cadastro");

  }

  //selecao
  Selecionar() {

      this.curso_servico.obterCursos().subscribe(

        (res: Curso[]) => {

          this.vetor = res;

        }

      )

  }

  //alterar
  Alterar():void {

    alert("alterar");

  }

  //excluir
  Excluir():void {

    alert("excluir");

  }







}
