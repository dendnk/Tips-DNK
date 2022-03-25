avatar-is-loaded



// Выбираем целевой элемент
var target = document.getElementById('__next');

if (target != null)
{
	alert('All is good!');
	
	// Конфигурация observer (за какими изменениями наблюдать)
	const config = {
		attributes: true,
		childList: true,
		subtree: true
	};

	// Колбэк-функция при срабатывании мутации
	const callback = function(mutationsList, observer) {
		for (let mutation of mutationsList) {
			if (mutation.type === 'subtree') {
				
				
				alert('Subtree was modified!');            
			} else if (mutation.type === 'attributes') {
				//alert('The ' + mutation.attributeName + ' attribute was modified.');
			}
		}
	};

	// Создаём экземпляр наблюдателя с указанной функцией колбэка
	const observer = new MutationObserver(callback);

	// Начинаем наблюдение за настроенными изменениями целевого элемента
	observer.observe(target, config);
	
} else 
{
	alert('All is bad!');
}



===================================
window.ue.MyObject.FunctionA(123).then( function(TheReturnedValue) { console.log(TheReturnedValue); alert(TheReturnedValue)} ).catch( function(error){ console.log(error);alert(error) } )

===================================


 // Listen to messages from the iframe
window.addEventListener('message', receiveMessage, false);

// Handle messages from the iframe
function receiveMessage(event) {		
// Check if the received message is a string and a glb url
// if not ignore it, and print details to the console
	if (typeof event.data === 'string' &&
		event.data.startsWith('https://') &&
		event.data.endsWith('.glb')) 
	{	
		window.removeEventListener('message', receiveMessage, false);	
		const url = event.data;
		window.ue.obj.seturl(url);		
	}
}