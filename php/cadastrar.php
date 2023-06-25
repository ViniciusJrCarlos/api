<?php

include ("conexao.php");

$obterDados = file_get_contents("php://input");

//extrair os dados do json

$extrair =  json_decode($obterDados);

//separar os dados do json

$nomeCurso = $extrair->cursos->nomeCurso;
$valorCurso = $extrair->cursos->valorCurso;


$sql = "INSERT INTO cursos (nomeCurso, valorCurso) VALUES ('$nomeCurso', $valorCurso)";
mysqli_query($conexao, $sql);

//exportar os dados cadastrados
$curso = [

  'nomeCurso' => $nomeCurso,
  'valorCurso' => $valorCurso

];

//json_encode(['curso'] => $curso);

json_encode(['cursos'=>$curso]);
///$extrair2 = json_encode((['curso']=>$extrair2));
?>

