import $ from  "jquery";
import "./header.css";

$('body').append('<header></header>');
$('header').append('<img id="logo" width="200px" height="200px">');
$('header').append('<h1>Holberton Dashboard</h1>');
console.log("Init header");
