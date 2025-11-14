$(function(){

	function addNewTask(a, b){
		$('#left-column h4').remove();
		$('.task-blog').prepend('<div class=new-task><div class=top><h3>'+a+'</h3><button class=cross-button></button><button class=folding-button></button></div><div class=bot><h6>'+b+'</h6></div></div>');
		$('#name').val('');
		$('#info').val('');
		$('.new-task').css({
			'margin-bottom':'20px'
		});
		$('.top').css({
			'width': '470px',
			'background-color': 'white',
			'height':'50px',
			'border-bottom': '1px solid #e5e5e5'
		});
		$('h3').css({
			'padding-left': '20px',
			'margin-right':'10px',
			'float': 'left'
		});
		$('.bot').css({
			'width': '470px',
			'background-color': 'white',
			'margin-bottom': '20px',
			'height':'80px'
		})
		$('h6').css({
			'padding-left': '20px',
			'padding-top': '10px',
			'color': 'grey',
			'margin':'0px'
			
		});
		$('.cross-button').css({
			'padding': '0',
			'border': 'none',
			'margin-top': '22px',
			'float': 'left',
			'background-image': 'url(img/cross.png)',
			'width': '17px',
			'height': '17px'
		});
		$('.folding-button').css({
			'padding': '0',
			'border': 'none',
			'margin': '24px 24px 0 0',
			'float': 'right',
			'background-image': 'url(img/fold.png)',
			'width': '8px',
			'height': '7px',

		});

	}

	$('.task-blog').on('click', '.cross-button', function(){
		$(this).closest('.new-task').remove();
	});
	$('.task-blog').on('click', '.folding-button', function(){
		var $task = $(this).closest('.new-task');
    	$task.find('.bot').slideToggle(500);

    	var topHeight = $task.find('.top').outerHeight();
    	$task.find('.top').animate({
        		'height': (topHeight === 50 ? 80 : 50), 
        		
    	}, 500);
    	$(this).toggleClass('rotated');
	});

	$('#submit-button').on('click', function(){
		addNewTask($('#name').val(), $('#info').val());
		return false;
	});

});
