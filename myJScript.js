		var general = $('#general');
		var temp = $('#card');
		var source = [
		{
			"classProduced": "irel",
			"classCategories": "drama",
			"label": "Моди",
			"src": "img/modi.jpg",
			"country": "Страна: Ирландия",
			"genre": "Жанр: Драма",
			"description": "Долгое время Моди жила со своим братом в доме, который достался ему по наследству от родителей. Но однажды Чарльз захотел продать своё имущество ради будущего бизнеса, а его сестра оказалась на улице."
		},
		{
			"classProduced": "usa",
			"classCategories": "comedy",
			"label": "Обдолбанный в Бруклине",
			"src": "img/obdolbannyyvbrukline.jpg",
			"country": "Страна: США",
			"genre": "Жанр: Комедия",
			"description": "Дэвид обычный парень из Нью-Йорка, мечтающий стать писателем, но вынужденный работать в офисе на должности консультанта. В свободное время он любит посещать вечеринки, встречаться с друзьями, пить и принимать лёгкие наркотики."
		},
		{
			"classProduced": "usa",
			"classCategories": "fantasy",
			"label": "Северянин",
			"src": "img/severyanin.jpg",
			"country": "Страна: США",
			"genre": "Жанр: Фэнтези",
			"description": "В далёком будущем человечество практически перестало существовать и в своём развитии вернулось на тысячи лет назад. В 2961 году одно из последних племён находится на грани вымирания, а природа продолжает брать своё, уничтожая людей."
		},
		{
			"classProduced": "norway",
			"classCategories": "thriller",
			"label": "Биркебейнеры",
			"src": "img/birkebeynery.jpg",
			"country": "Страна: Норвегия",
			"genre": "Жанр: Боевик",
			"description": "Норвегия, 1204 год. Баглеры при поддержке Дании начинают восстание и даже захватывают власть в некоторых городах. Они собираются уничтожить всех последователей короля и захватить трон."
		},
		{
			"classProduced": "usa",
			"classCategories": "thriller",
			"label": "Ценный груз",
			"src": "img/cenyygruz.jpg",
			"country": "Страна: США",
			"genre": "Жанр: Боевик",
			"description": "Джек великолепно умеет проворачивать любые криминальные сделки и получать с этого немалую выгоду. Он один из лучших грабителей, хороший стратег и настоящий лидер."
		},
		{
			"classProduced": "gb",
			"classCategories": "thriller",
			"label": "6 дней",
			"src": "img/6dney.jpg",
			"country": "Страна: Великобритания",
			"genre": "Жанр: Боевик",
			"description": "Лучшая команда специального назначения получила приказ ворваться в посольство и уничтожить всех преступников, сделав при этом всё возможное, чтобы сохранить жизни заложникам."
		},
		{
			"classProduced": "gb",
			"classCategories": "comedy",
			"label": "Гиппопотам",
			"src": "img/gippopotam.jpg",
			"country": "Страна: Великобритания",
			"genre": "Жанр: Комедия",
			"description": "Некогда талантливый поэт Тэд Уоллес уже давно ничего не пишет, а лишь прозябает свою жизнь. Он превратился в разочаровавшегося в жизни дебошира, который не выходит из дома без бутылки виски."
		},
		{
			"classProduced": "germ",
			"classCategories": "comedy",
			"label": "Безбашенный Ник",
			"src": "img/bezbashenyynik.jpg",
			"country": "Страна: Германия",
			"genre": "Жанр: Комедия",
			"description": "Отважного и совершенно безбашенного полицейского Ника Чиллера отстраняют от службы после очередной его глупой выходки. Сам герой хоть и не доволен таким решением руководства, но всё же пытается найти в своём отпуске положительные стороны."
		},
		{
			"classProduced": "germ",
			"classCategories": "fantasy",
			"label": "Ловушка для привидения",
			"src": "img/lovushkadlyaprivedeniya.jpg",
			"country": "Страна: Германия",
			"genre": "Жанр: Фэнтези",
			"description": "До последнего времени жизнь не самого храброго одиннадцатилетнего мальчика по имени Том была ничем не примечательна, но всё изменило после того, как он переехал в новый дом."
		},
		{
			"classProduced": "germ",
			"classCategories": "comedy",
			"label": "Путь к Элладе",
			"src": "img/putkellade.jpg",
			"country": "Страна: Германия",
			"genre": "Жанр: Комедия",
			"description": "Паладики – тихий и очень живописный греческий остров. На нём нет большого количества туристов и шикарных отелей, но при этом есть красивейшая природа, большие горы, прекрасное море и чистый пляж."
		},
		{
			"classProduced": "rus",
			"classCategories": "drama",
			"label": "Милый Ханс, дорогой Петр",
			"src": "img/milyyhansdorogoypetr.jpg",
			"country": "Страна: Россия",
			"genre": "Жанр: Драма",
			"description": "Незадолго до начала Великой Отечественной войны немецкие инженеры начали трудиться на одном из советских заводов над созданием уникального оптического стекла."
		},
		{
			"classProduced": "rus",
			"classCategories": "fantasy",
			"label": "Форт Росс: В поисках приключений",
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
        			body.find('h2').text(item.label);
                    body.find('.open_popup').attr('src', item.src);
                    body.find('.country').text(item.country);
                    body.find('.genre').text(item.genre);
                    body.find('.description').text(item.description);
                    general.append(body);
                });
            }
        filler(general, temp, source);
// высота по самому высокому контенту
        function setEqualHeight(columns) {
			var tallestcolumn = 0;
			columns.each(function(){
				currentHeight = $(this).height();
				if(currentHeight > tallestcolumn){
					tallestcolumn = currentHeight;
				} 
			});
			columns.height(tallestcolumn);
			}
$(function(){
			setEqualHeight($(".content" > ".right_content"));
// анимация скрытия
			var anim;
        	var elem;
        	function hideElements (elem, anim, speed) {
        		var speed = $('#speed').prop('value');
        		var anim = $('#animation_selection').prop('value');
        		if (anim =='slide'){
        			$(elem).stop();
        			$(elem).slideUp(speed);
        		}
        		else if (anim =='hide'){
        			$(elem).stop();
        			$(elem).hide(speed);
        		}
        		else {
        			$(elem).stop();
        			$(elem).fadeOut(speed);
        		}	
        	}
// анимация отображения
        	function showElements (elem, anim, speed) {
        		
        		var speed = $('#speed').prop('value');
        		var anim = $('#animation_selection').prop('value');
        		if (anim =='slide'){
        			$(elem).stop();
        			$(elem).slideDown(speed);
        		}	
        		else if (anim =='hide'){
        			$(elem).stop();
		          	$(elem).show(speed);
		        }
        		else {
        			$(elem).stop();
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
	          	$("#general div").filter(function(index) {
		          	return $(this).attr("class") === "current currentProduced" || "currentProduced";
		        });
		        elem = $("#general div").not(newSelection);
		        hideElements(elem, anim, speed);

					if ($(this).attr("class") == "current currentProduced") {
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
				$(content).remove();
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
			$('#general').on('click',".delete",function (){
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
		        slideContainer.stop();
		        slideContainer.animate({'margin-left': '-='+width, opacity: 0, height: "hide"}, 500, function() {
		        ++current;
		            if (current > (slides.length-1 && dots.length-1)) {
		                current = 0;
		                slideContainer.css('margin-left', 0);
		            }
		            dots.stop();
		            dots.eq(current).addClass("active");
	                slideContainer.animate({opacity: 1, height: "show"}, 500 );
		        });
		    }
// Остановка слайдера
		    function pauseSlider() {
		        clearInterval(interval);
		    }
// Запуск слайдера по наведению мышки (если был hover, после mouseleave - фильтр по hover сбросится)
		    slider.on('mouseleave', function() 
		    	{interval = setInterval (startSlider, 5000)
		    		newSelection = '.' + $(this).attr("rel");
					$(this).attr("rel") == "all"
		          	elem = $("#general div");
			        showElements (elem, anim, speed);
		    	});
// остановка слайдера по наведению мышки
		    slider.on('mouseenter', pauseSlider);
// Переключение вправо/влево
		    $('.slider_next').on('click', startSlider);

		    $('.slider_prev').on('click',function (){
		   		dots.eq(current).removeClass("active");
		   			slideContainer.stop();
		        	slideContainer.animate({'margin-left': '+='+width, opacity: 0, height: "hide"}, 500, function() {
		                current--;
		                if (current < 0 ) {
		                    current = slides.length-1;
		                    slideContainer.css({'margin-left': '-' + width*(slides.length-1) + 'px'});
		                }
		            dots.stop();    
		            dots.eq(current).addClass("active");
	                slideContainer.animate({opacity: 1, height: "show"}, 500 );
		            });
		        }); 
// Переключение по пагинации
		    $('.slider').on('click', '.dot', function(){
		    	dots.eq(current).removeClass("active");
		    	current = dots.index(this);
		    	slideContainer.stop();
		    	slideContainer.animate({'margin-left': '-' + width*current, opacity: 0, height: "hide"}, 500, function() {
			    	if (current > slides.length-1) {
			            current;
			            slideContainer.css('margin-left', 0);
			        }
			        dots.stop();
		            dots.eq(current).addClass("active");
		            slideContainer.animate({opacity: 1, height: "show"}, 500 );
				}); 	
		    });
// открытие/закрытие формы добавления нового слайдера
			$('#createNewSlide').on('click', function (e){
				$('.newSlide, .overlay').css({'opacity': 1, 'visibility': 'visible'});
				e.preventDefault();
			});
			$('.newSlide .close_newSlide, .overlay').on('click', function (){
				$('.newSlide, .overlay').css({'opacity': 0, 'visibility': 'hidden'});
			});
//фильтрация по наведении мышки (hover) на картинку слайда		
			$('.horisontal_block img').hover(function(){
               	newSelection = '.' + $(this).attr("rel");
				elem = $("#general div").not(newSelection);
		        hideElements(elem, anim, speed);
   
		        if ($(this).attr("rel")) {
		          		newSelection += '.' + $(this).attr("rel");
		          		elem = newSelection;
		          		showElements (elem, anim, speed);
		          	}
			});
// добавление нового слайда
			var new_slide;
			var new_dot;

			$('#slidesForm').on('submit', function(e){

				new_slide = $('.horisontal').find('.horisontal_block:last').clone(true); 
				$(new_slide).find('img').each(function(index, el){

					var file = $('#slidesForm').find('[type="file"]')[index].files[0];
					var reader = new FileReader();
				    reader.onload = (function (el, index) {
				        $(el).attr("src", this.result);
				    }).bind(reader, el , index);

				    if(file) 
				    reader.readAsDataURL(file);
				});

				$('.horisontal_block:last').after(new_slide);
				slides = $('.horisontal_block');
				new_dot = $('.dot_container').find('.dot:last').clone(true);
				$('.dot:last').after(new_dot);
				dots = $('.dot');

				e.preventDefault();
				$('.newSlide, .overlay').css({'opacity': 0, 'visibility': 'hidden'});
			});
// найти фильм по названию и показать его в попап
			var popup = $('.popup');
			var temp = $('#card');
			var content;
			$("#search").autocomplete({
			    minLength: 0,
			    source: source,
			    focus: function(event, ui) {
			        $("#search").val(ui.item.label);
			        return false;
			    },
			    select: function(event, ui) {
			    	$(content).remove();
			    	$(content_popup).remove();
			    	content = $(temp.html());

			        $("#search").val( ui.item.label );
			        content.find('h2').text( ui.item.label );
			        content.find('.open_popup').attr('src', ui.item.src);
                    content.find('.country').text(ui.item.country);
                    content.find('.genre').text(ui.item.genre);
                    content.find('.description').text(ui.item.description);
			        popup.prepend(content);

			        $("#search").val('');
			        $('.popup, .overlay').css({'opacity': 1, 'visibility': 'visible'});
			        return false;
			    }
			});
// открыть/закрыть форму добавления плейлиста
			$('#addPlayList').on('click', function (e){
				$('.newPlayList, .overlay').css({'opacity': 1, 'visibility': 'visible'});
				e.preventDefault();
			});
			$('.newPlayList .close_newPlayList, .overlay').on('click', function (){
				$('.newPlayList, .overlay').css({'opacity': 0, 'visibility': 'hidden'});
			});
// добавить список редактирования
			var editList = $(".editList");
			var playList = $(".playList");
			var editCatalog = $(".editCatalog");
			var catalog = $(".catalog");
			var new_catalog;

			$('#createEditList').one('click', function(){
				$(editList).css({'visibility': 'visible'});
			});
// добавить и сохранить плейлист
			$("#saveList").on('click', function(e){
				var newInput = $('#playListForm').find('#save_newPlayList').val();
				if (newInput == '') {
						alert('Введите название плейлиста');
						$('#save_newPlayList').css('border', '2px solid red');
						return false;
					}
				$('#save_newPlayList').css('border', '2px solid #e0dfdc');	
				$(playList).css({'visibility': 'visible'});		
				new_catalog = $(".editList").find('.editCatalog').clone(true);
				$(new_catalog).removeClass('editCatalog');
				$(new_catalog).addClass('catalog');
				new_catalog.find('h3').text(newInput).append($(".delete:first").clone()
			       .css('display', 'inline'));
				$(".playList h2").after(new_catalog);
				$('.newPlayList, .overlay').css({'opacity': 0, 'visibility': 'hidden'});
				e.preventDefault();
			});
// удаление лишних фильмов в плейлисте, плейлисты
			$('.editList, .playList').on('click',"li .delete",function (){
				$(this).parent("li").remove();
			});
			$('.playList').on('click',"h3 .delete",function (){
				$(this).closest('.catalog').remove();
			});
// свертывание плейлистов
			$(".editCatalog").accordion({
				active: false,
				heightStyle: "content",
		    	collapsible: true
      		});
      		$(".playList").accordion({
      			header: ".catalog > h3",
				active: false,
				heightStyle: "content",
		    	collapsible: true
      		}).sortable({
		        axis: "y",
		        items: ".catalog",
		        stop: function( event, ui ) {
		          ui.item.children("h3").triggerHandler("focusout");
		          $(this).accordion("refresh");
		        }
		      });
// перетаскивание карточек для плейлиста
			$(".tab").draggable({
			    helper: "clone",
			    opacity:0.5,
			    scroll: false
			});
// заполнение списка редактирования, сортировка в нем названий
			$(".editCatalog ol").droppable({
			    activeClass: "ui-state-default",
			    hoverClass: "ui-state-hover",
			    accept: ":not(.ui-sortable-helper)",
			    tolerance:"touch",
			    drop: function(event, ui) {
			       $(this).find(".placeholder").remove();
			       $("<li></li>").text( ui.draggable.find('h2').text())
			       		.append($(".delete:first").clone(true)
			       		.css('display', 'inline')).appendTo(this);
			    }
			}).sortable({
			    items: "li:not(.placeholder)",
			        sort: function() {
			        $(this).removeClass("ui-state-default");
			        }
			    });   
});
			

   