$(document).ready(function() {
	$('#add').click(function() {
		if ($('#item-name').val().length == 0) {
			$('#error').css('display', 'block');
		} else {
			$('#error').fadeOut();
			var item = $('#item-name').val();
			var color = '#'+Math.random().toString(16).substr(2,6);
			var div = $('<div class="list-item"><h2>'+item+'</h2></div>').css('background-color', color);
			$('#list-column').prepend(div);
			$('#item-name').val("");
		}
	});
	$('div').on('click', '.list-item', function(event) {
        event.stopPropagation();
        $(this).toggleClass('checked-off');
	})
	$('div').on('dblclick', '.list-item', function() {
		$(this).fadeOut();
	})
});