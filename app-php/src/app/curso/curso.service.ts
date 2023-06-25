import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Curso } from './curso';
import { Observable } from 'rxjs';
//import { } from './'

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  //url api php

  url = "http://localhost/api/php/";

  vetor! : Curso[];
  //res!:string;

  constructor(private http: HttpClient) { }

  //obter todos os cursos

  obterCursos():Observable<Curso[]>{

    return this.http.get(this.url+'listar')

    .pipe(map((res) => {

        this.vetor = (res(["cursos"]));
        //(['cursos'=>$cursos]);
        //
        return this.vetor;

      })
    )

  }

  //cadastrar cursos res: Curso[]

  cadastrarCurso(c:Curso): Observable<Curso[]> {

    return this.http.post(this.url+'cadastrar', {cursos:c})

    .pipe(map((res) => {

      this.vetor.push(res(['cursos']));
      return this.vetor;
    }))


  }
    // REMOVER CURSO
    removerCurso(c:Curso): Observable<Curso[]>{

    const params = new HttpParams().set("idCurso", c.idCurso.toString());

    return this.http.delete(this.url+'excluir', {params: params})
    .pipe(map((res) => {

      const filtro = this.vetor.filter((curso) => {

        return +curso['idCurso'] !== +c.idCurso;

      });

      return this.vetor = filtro;

    }))

  }

  //ATUALIZAR CURSO

    atualizarCurso(c:Curso): Observable<Curso[]> {

      //executa a alteraçao da url
      return this.http.put(this.url+'alterar', {cursos: c})


      //percorrer o vetor para saber qual é o id do curso alterado
      .pipe(map((res) => {

      const cursoAlterado = this.vetor.find((item) => {
      return +item['idCurso'] === +['idCurso'];


      });

      //alterar o valor do vetor local

      if(cursoAlterado) {

        cursoAlterado['nomeCurso'] = c['nomeCurso'];
        cursoAlterado['valorCurso'] = c['valorCurso'];

      }

      //retorno do valor

      return this.vetor;

    }))

  }

}
