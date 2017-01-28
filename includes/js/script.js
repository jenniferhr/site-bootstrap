/*

My Custom JS
============

Author:  Jennifer Helen
Updated: January 2017
Notes: Tutorial de Brad Hussey

*/

$(function(){
	$('#alertMe').click(function(e) {

		e.preventDefault();

		$('#successAlert').slideDown();

	});

	$('a.pop').click(function(e) {
		e.preventDefault();
	});

	$('a.pop').popover();

	$('[rel="tooltip"]').tooltip();
});