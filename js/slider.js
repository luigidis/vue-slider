// console.log('slider')

const slides = [
	'./img/01.jpg',
	'./img/02.jpg',
	'./img/03.jpg',
	'./img/04.jpg',
	'./img/05.jpg',
]

const app = new Vue ({
	el: '#root',
	data: {
		slides,
		currentIndex: 0,
	},
	methods: {
		nextSlide () {
			this.currentIndex++
			if (this.currentIndex === 5) {
				this.currentIndex = 0
			}
		},
		prevSlide () {
			this.currentIndex--
			// console.log(this.currentIndex)
			if (this.currentIndex === -1) {
				// console.log('call back')
				this.currentIndex = 4
			}
		},
		
	},
})