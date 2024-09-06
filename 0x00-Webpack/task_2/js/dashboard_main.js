import logo from '../assets/holberton-logo.jpg';
import '../css/main.css';
import $ from 'jquery';
import _ from 'lodash';

$(document).ready(function() {
    $('body').append('<img id="logo">');
    $('#logo').css('background-image', `url(${logo})`);
    $('#logo').css('background-size', '200px 200px')
    $('body').append("<p>Holberton Dashboard</p>");
    $('body').append('<p>Dashboard data for the students</p>');
    $('body').append('<button>Click here to get started</button>');
    $('body').append("<p id='count'></p>");
    $('body').append('<p>Copyright - Holberton School</p>');
    
    let counter = 0;
    function updateCounter() {
        counter++;
        $('#count').text(`${counter} clicks on the button`);
    };
    $('button').on('click', _.debounce(updateCounter, 500));
});
