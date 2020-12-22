$(document).ready(function() {
	$('.page__tab_1').addClass('active');
	$('.page__tab_2').click(function(event) {
		$('.page__tab_2').addClass('active');
		$('.page__tab_1').removeClass('active');
		$('.page__tab_3').removeClass('active');
	});
	$('.page__tab_3').click(function(event) {
		$('.page__tab_3').addClass('active');
		$('.page__tab_1').removeClass('active');
		$('.page__tab_2').removeClass('active');
	});
	$('.page__tab_1').click(function(event) {
		$('.page__tab_1').addClass('active');
		$('.page__tab_2').removeClass('active');
		$('.page__tab_3').removeClass('active');
	});
	

let result = document.body.querySelector('.form__result');
document.forms.form.onsubmit = function() {
	let text = this.text.value;
	let name = this.name.value;
	let contact = this.contact.value;
	result.innerHTML = 'Спасибо, ' + name + '! Вы написали следующий текст "'+ text + '" Он отправлен модератору. Если все будет ОК, то мы ответим Вам по номеру ' + contact + ' в течение трех суток';
	return false;
	};
});

