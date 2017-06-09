function sameCol() {

	var sameColWrapper = document.querySelectorAll('[data-sameColWrapper]')

	if(sameColWrapper) {
		Array.prototype.forEach.call(sameColWrapper, function(e, i) {
			
			var sameColClient = []
			var sameColClientHeight = []

			Array.prototype.forEach.call(e.querySelectorAll('[data-sameCol]'), function(e) {
				sameColClient.push(e)
			})

			sameColClient.forEach(function(e) {
				e.style.height = 'auto'
				sameColClientHeight.push(e.offsetHeight)
			})

			sameColClient.forEach(function(e) {
				e.style.height = Math.max.apply(null, sameColClientHeight) + 'px'
			})
		})
	}

}
