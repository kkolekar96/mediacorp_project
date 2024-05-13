<?php

require_once __DIR__.'/bootstrap.php';


// Header
$header = fopen('./data/header.json', "r");
$header_contents = fread($header, filesize('./data/header.json'));

// sidebar
$sidebar = fopen('./data/sidebar.json', "r");
$sidebar_contents = fread($sidebar, filesize('./data/sidebar.json'));

// Article
$article = fopen('./data/article.json', "r");
$contents = fread($article, filesize('./data/article.json'));


// Render our view
echo $twig->render('index.html.twig', [
    'content' => json_decode($contents),
    'header' => json_decode($header_contents),
    'sidebar' => json_decode($sidebar_contents),
]);
