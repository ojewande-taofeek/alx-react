import logo from '../../assets/holberton-logo.jpg';
import "./header.css";
import $ from 'jquery';

$(document).ready(function() {
    $('body').append('<img id="logo">');
    $('#logo').css('background-image', `url(${logo})`);
    $('#logo').css('background-size', '200px 200px');
    $('body').append('<h1>Holberton Dashboard</h1>');
    console.log("Init header");
});
