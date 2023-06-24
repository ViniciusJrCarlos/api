<?php

include("conexao.php");

$sql = "SELECT * FROM cursos";

$executar = mysqli_query($conexao, $sql);

//vetor
$cursos = [];

//indice

$indice = 0;

while($linha = mysqli_fetch_assoc($executar)) {

  $cursos[$indice]['idCurso'] = $linha['idCurso'];
  $cursos[$indice]['nomeCurso'] = $linha['nomeCurso'];
  $cursos[$indice]['valorCurso'] = $linha['valorCurso'];

  $indice++;
}

//json

json_encode(['cursos'=>$cursos]);

//var_dump($cursos);

?>
