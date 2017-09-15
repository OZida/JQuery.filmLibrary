		

		var general = $('#general');
		var temp = $('#card');
		var source = [
		{

			"classProduced": "irel",
			"classCategories": "drama",
			"title": "Моди",
			"src": "img/modi.jpg",
			"country": "Страна: Ирландия",
			"genre": "Жанр: Драма",
			"description": "Долгое время Моди жила со своим братом в доме, который достался ему по наследству от родителей. Но однажды Чарльз захотел продать своё имущество ради будущего бизнеса, а его сестра оказалась на улице."
		},
		{
			"classProduced": "usa",
			"classCategories": "comedy",
			"title": "Обдолбанный в Бруклине",
			"src": "img/obdolbannyyvbrukline.jpg",
			"country": "Страна: США",
			"genre": "Жанр: Комедия",
			"description": "Дэвид обычный парень из Нью-Йорка, мечтающий стать писателем, но вынужденный работать в офисе на должности консультанта. В свободное время он любит посещать вечеринки, встречаться с друзьями, пить и принимать лёгкие наркотики."
		},
		{
			"classProduced": "usa",
			"classCategories": "fantasy",
			"title": "Северянин",
			"src": "img/severyanin.jpg",
			"country": "Страна: США",
			"genre": "Жанр: Фэнтези",
			"description": "В далёком будущем человечество практически перестало существовать и в своём развитии вернулось на тысячи лет назад. В 2961 году одно из последних племён находится на грани вымирания, а природа продолжает брать своё, уничтожая людей."
		},
		{
			"classProduced": "norway",
			"classCategories": "thriller",
			"title": "Биркебейнеры",
			"src": "img/birkebeynery.jpg",
			"country": "Страна: Норвегия",
			"genre": "Жанр: Боевик",
			"description": "Норвегия, 1204 год. Баглеры при поддержке Дании начинают восстание и даже захватывают власть в некоторых городах. Они собираются уничтожить всех последователей короля и захватить трон."
		},
		{
			"classProduced": "usa",
			"classCategories": "thriller",
			"title": "Ценный груз",
			"src": "img/cenyygruz.jpg",
			"country": "Страна: США",
			"genre": "Жанр: Боевик",
			"description": "Джек великолепно умеет проворачивать любые криминальные сделки и получать с этого немалую выгоду. Он один из лучших грабителей, хороший стратег и настоящий лидер."
		},
		{
			"classProduced": "gb",
			"classCategories": "thriller",
			"title": "6 дней",
			"src": "img/6dney.jpg",
			"country": "Страна: Великобритания",
			"genre": "Жанр: Боевик",
			"description": "Лучшая команда специального назначения получила приказ ворваться в посольство и уничтожить всех преступников, сделав при этом всё возможное, чтобы сохранить жизни заложникам."
		},
		{
			"classProduced": "gb",
			"classCategories": "comedy",
			"title": "Гиппопотам",
			"src": "img/gippopotam.jpg",
			"country": "Страна: Великобритания",
			"genre": "Жанр: Комедия",
			"description": "Некогда талантливый поэт Тэд Уоллес уже давно ничего не пишет, а лишь прозябает свою жизнь. Он превратился в разочаровавшегося в жизни дебошира, который не выходит из дома без бутылки виски."
		},
		{
			"classProduced": "germ",
			"classCategories": "comedy",
			"title": "Безбашенный Ник",
			"src": "img/bezbashenyynik.jpg",
			"country": "Страна: Германия",
			"genre": "Жанр: Комедия",
			"description": "Отважного и совершенно безбашенного полицейского Ника Чиллера отстраняют от службы после очередной его глупой выходки. Сам герой хоть и не доволен таким решением руководства, но всё же пытается найти в своём незапланированном отпуске положительные стороны."
		},
		{
			"classProduced": "germ",
			"classCategories": "fantasy",
			"title": "Ловушка для привидения",
			"src": "img/lovushkadlyaprivedeniya.jpg",
			"country": "Страна: Германия",
			"genre": "Жанр: Фэнтези",
			"description": "До последнего времени жизнь не самого храброго одиннадцатилетнего мальчика по имени Том была ничем не примечательна, но всё изменило после того, как он переехал в новый дом."
		},
		{
			"classProduced": "germ",
			"classCategories": "comedy",
			"title": "Путь к Элладе",
			"src": "img/putkellade.jpg",
			"country": "Страна: Германия",
			"genre": "Жанр: Комедия",
			"description": "Паладики – тихий и очень живописный греческий остров. На нём нет большого количества туристов и шикарных отелей, но при этом есть красивейшая природа, большие горы, прекрасное море и чистый пляж."
		},
		{
			"classProduced": "rus",
			"classCategories": "drama",
			"title": "Милый Ханс, дорогой Петр",
			"src": "img/milyyhansdorogoypetr.jpg",
			"country": "Страна: Россия",
			"genre": "Жанр: Драма",
			"description": "Незадолго до начала Великой Отечественной войны немецкие инженеры начали трудиться на одном из советских заводов над созданием уникального оптического стекла."
		},
		{
			"classProduced": "rus",
			"classCategories": "fantasy",
			"title": "Форт Росс: В поисках приключений",
			"src": "img/fortross.jpg",
			"country": "Страна: Россия",
			"genre": "Жанр: Фэнтези",
			"description": "Двое молодых российских журналистов по заданию редакции едут в далекий Сан-Франциско для того, чтобы сделать сюжет о Форт Россе, русском укреплении XIX века в Америке."
		}];
// наполнение карточек
		function filler(general, temp , s) {
			
			s.forEach(function(item) {

            		var body = $(temp.html());
            		
        			body.addClass('all');
        			body.addClass(item.classProduced);
        			body.addClass(item.classCategories);
        			body.find('h2').text(item.title);
                    body.find('.open_popup').attr('src', item.src);
                    body.find('.country').text(item.country);
                    body.find('.genre').text(item.genre);
                    body.find('.description').text(item.description);
                    general.append(body);
                });
            }
        filler(general, temp, source);
					
        $(function() {
// анимация скрытия
			var anim;
        	var elem;
        	function hideElements (elem, anim, speed) {
        		var speed = $('#speed').prop('value');
        		var anim = $('#animation_selection').prop('value');
        		if (anim =='slide'){
        			$(elem).slideUp(speed);
        		}
        		else if (anim =='hide'){
        			$(elem).hide(speed);
        		}
        		else {
        			$(elem).fadeOut(speed);
        		}	
        	}
// анимация отображения
        	function showElements (elem, anim, speed) {
        		
        		var speed = $('#speed').prop('value');
        		var anim = $('#animation_selection').prop('value');
        		if (anim =='slide'){
        			$(elem).slideDown(speed);
        		}	
        		else if (anim =='hide'){
		          	$(elem).show(speed);
		        }
        		else {
        			$(elem).fadeIn(speed);
		        }
        	}	
		        	
// фильтр	
			var newSelection = "";
          	$("#categories a, #produced a").on('click', function(){
 	
                

	            $("#categories a").removeClass("current");
	            $("#categories a").removeClass("currentProduced");
	          	$(this).addClass("current");
	          		
	          	$("#produced a").removeClass("currentProduced");
	          	$("#produced a").removeClass("current");
	          	$(this).addClass("currentProduced");

	          	newSelection = '.' + $(this).attr("rel");

	          	
	          	$("#general div").filter(function( index ) {
		          	return $( this ).attr( "class" ) === "current currentProduced" || "currentProduced";
		        });
		        elem = $("#general div").not(newSelection);
		        hideElements(elem, anim, speed);

					if ($( this ).attr( "class" ) == "current currentProduced") {
		          		newSelection += '.' + $(this).attr("rel");
		          		elem = newSelection;
		          		showElements (elem, anim, speed);
		          	}
		          	if ($(this).attr("rel") == "all") {
		          		elem = $("#general div");
			        	showElements (elem, anim, speed);
			        }

	    	});	
// открытие/закрытие попапа
          	var content_popup;
          	$('#general').on('click','img.open_popup', function (e){
				$(content_popup).remove();
				if( $(this).is("img.open_popup") ){
					content_popup = $(this).parent('div').clone();
					$('.popup').prepend(content_popup);
				}
				$('.popup, .overlay').css({'opacity': 1, 'visibility': 'visible'});
				e.preventDefault();
			});
			$('.popup .close_popup, .overlay').click(function (){
				$('.popup, .overlay').css({'opacity': 0, 'visibility': 'hidden'});
			});
			
// удаление карточки
			$(document).on('click',".delete",function (e){
				$(this).parent("div").remove();
				
			});
// открытие/закрытие формы добавления новой карточки
			$('#createNewTab').on('click', function (e){
				$('.newTab, .overlay').css({'opacity': 1, 'visibility': 'visible'});
				e.preventDefault();
			});
			$('.newTab .close_newTab, .overlay').click(function (){
				$('.newTab, .overlay').css({'opacity': 0, 'visibility': 'hidden'});
			});

// добавление новой карточки
			var general = $('#general');
			var temp = $('#card');
			$('#addTab').on('click', function (e){
 
				e.preventDefault();

				var data = $('#myForm').serializeArray();
				var values = {};

				var file = $('#myForm').find('[type="file"]')[0].files[0];				
				
				$.each(data,function(){
					values[this.name] = this.value;
				});

				var body = $(temp.html());
				var option_country = $('#countryName option:selected').attr('rel');
				var option_genre = $('#genreName option:selected').attr('rel');

				body.addClass('all');
				body.addClass(option_country);
				body.addClass(option_genre);
				body.find('h2').text(values.newTitle);

				body.find('.country').text(values.countryName);
				body.find('.genre').text(values.genreName);
				body.find('.description').text(values.newDescription);

				var reader = new FileReader();
				    reader.onload = function (e) {
				      
				        body.find('.open_popup').attr("src", e.target.result);
				        general.append(body);
				        
				    };

				    if(file) 
				    reader.readAsDataURL(file);
				$('.newTab, .overlay').css({'opacity': 0, 'visibility': 'hidden'});
			});
// СЛАЙД
			var width = 1113;
		    var current = 0;

		    var slider = $('.slider');
		    var slideContainer = $('.horisontal');
		    var slides = $('.horisontal_block');
		    
		    var dots = $('.dot');
		    
		    var interval //= setInterval (startSlider, 5000);

			dots.eq(0).addClass("active");
// Запуск слайдера
		    function startSlider() {
		        dots.eq(current).removeClass("active");
		        slideContainer.animate({'margin-left': '-='+width, opacity: 0, height: "hide"}, 500, function() {
		        ++current;
		            if (current > (slides.length-1 && dots.length-1)) {
		                current = 0;
		                slideContainer.css('margin-left', 0);
		            }
		            dots.eq(current).addClass("active");
	                slideContainer.animate({opacity: 1, height: "show"}, 500 );
		        });
		    }
// Остановка слайдера
		    function pauseSlider() {
		        clearInterval(interval);
		    }
// Запуск/остановка слайдера по наведению мышки
		    slider.on('mouseleave', function() 
		    	{interval = setInterval (startSlider, 5000)
		    	});
		    slider.on('mouseenter', pauseSlider);
// Переключение вправо/влево
		    $('.slider_next').on('click', startSlider);

		    $('.slider_prev').on('click',function (){
		   		dots.eq(current).removeClass("active");
		        	slideContainer.animate({'margin-left': '+='+width, opacity: 0, height: "hide"}, 500, function() {
		                current--;
		                if (current < 0 ) {
		                    current = slides.length-1 && dots.length-1;
		                    slideContainer.css({'margin-left': '-' + width*(slides.length-1) + 'px'});
		                }
		            dots.eq(current).addClass("active");
	                slideContainer.animate({opacity: 1, height: "show"}, 500 );
		            });
		        }); 
// Переключение по пагинации
		    $('.slider').on('click', '.dot', function(){
		    	dots.eq(current).removeClass("active");
		    	current = dots.index(this);
		    	slideContainer.animate({'margin-left': '-' + width*current, opacity: 0, height: "hide"}, 500, function() {
			    	if (current > slides.length-1) {
			            current;
			            slideContainer.css('margin-left', 0);
			        }
		            dots.eq(current).addClass("active");
		            slideContainer.animate({opacity: 1, height: "show"}, 500 );
				}); 	
		    });

// открытие/закрытие формы добавления нового слайдера
			$('#createNewSlide').on('click', function (e){
				$('.newSlide, .overlay').css({'opacity': 1, 'visibility': 'visible'});
				e.preventDefault();
			});
			$('.newSlide .close_newSlide, .overlay').click(function (){
				$('.newSlide, .overlay').css({'opacity': 0, 'visibility': 'hidden'});
			});

//фильтрация по наведении мышки на картинку слайда			
			$('.horisontal_block img').hover(function(){
				
               	$( this ).find( "newSelection" ).remove();
               	newSelection = '.' + $(this).attr("rel");
				elem = $("#general div").not(newSelection);
		        hideElements(elem, anim, speed);
		        
		        if ($( this ).attr( "rel" )) {
		          		newSelection += '.' + $(this).attr("rel");
		          		elem = newSelection;
		          		showElements (elem, anim, speed);
		          	}
			});
			
			// var width = 1113;
		 //    var current = 0;

		 //    var slider = $('.slider');
		    // var slideContainer = $('.horisontal');
		 //    var slides = $('.horisontal_block');
		 //    slides.length = $('.horisontal_block').length;
		 //    var dots = $('.dot');
			
			var new_slide;
			$('#addSlide').on('click', function(){
				// new_slide = $('.horisontal').find('.horisontal_block:last').clone(true); 
				// console.log(new_slide);
				// t = $(new_slide.html());
				// // t.addClass('horisontal_block');

				// $('.horisontal_block:last').append(t);
				// slides.length = $('.horisontal_block').length;
				    
				//     //   new_slide = $('.horisontal_block:last').clone(true)
				//     //   console.log(new_slide)
				//     //     body.prepend(new_slide);
				//     // slides.length = $('.horisontal_block').length;
				//     // slideContainer.append(t);

			});
			

			

    });