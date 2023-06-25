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
   vetor : Curso[] | undefined;
  curso = new Curso();

  constructor(private curso_servico:CursoService) {}

  //inicializador
  ngOnInit() {

    this.selecionar();
    //this.Cadastrar();

  }

  //selecao
  selecionar(){

      this.curso_servico.obterCursos().subscribe(

        (res: Curso[]) => {

          this.vetor = res;

        }

      )

  }

   //cadastro
   cadastrar() {

    this.curso_servico.cadastrarCurso(this.curso).subscribe(

      (res: Curso[]) => {

        this.vetor = res;

        //limpar os atributos
        this.curso.nomeCurso;
        this.curso.valorCurso;

        //atualizar a listagem

        this.selecionar();

      }

    )

  }

  //alterar
  alterar() {

     this.curso_servico.atualizarCurso(this.curso).subscribe(

      (res) => {

        this.vetor = res;
        this.curso.nomeCurso;
        this.curso.valorCurso;

        this.selecionar();


      }


    )

  }

  //excluir
  excluir(){

    alert("excluir");

  }

}
