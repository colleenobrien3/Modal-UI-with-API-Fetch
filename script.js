const url = "https://rickandmortyapi.com/api/character/"



for (i=1; i<20; i++){
let baseUrl = url + i	
fetch(baseUrl)
  .then(res => {
  	return res.json();
  })
  .then(res => {
  	newElement = document.createElement('span')
  	newElement.classList.add('div')
    newElement.style.backgroundImage=`url(${res.image})`
  	let level1 = document.querySelector('.level1')
  	level1.appendChild(newElement)
  	console.log(newElement)
  	let newModal = document.createElement('span')
	 newModal.classList.add('modal')
	newModal.classList.add('hidden')
  newModal.innerText = 'Name: ' + res.name
  document.querySelector('body').appendChild(newModal)
	// newElement.appendChild(newModal)
	newElement.addEventListener('click', popUp)
	function popUp(event){
    console.log(event.target)
	newModal.classList.toggle('hidden')
}
	newModal.addEventListener('click', hide)
	function hide(){
		if(newModal.classList.contains('hidden')===false){
		newModal.classList.toggle('hidden')
		console.log(newModal)}
	}
  })
  .catch(err => {
    console.log("something went wrong...", err);
  });
}


// class Species {
// 	constructor(name,type,about,pic){
// 		this.name=name
// 		this.type=type
// 		this.about=about
// 	}
// }

// const Charmander = new Species('Charmander','fire','likes fire', '../images/charmander.jpeg')
// const Squirtle = new Species('Squirtle', 'water', 'likes water', '../images/squirtle.jpeg')
// const Bulbasaur = new Species('Bulbasaur', 'grass', 'likes grass', '../images.bulbasaur.png')


// let pokeArray = [Charmander, Squirtle, Bulbasaur]



// pokeArray.forEach(createNewDiv)

// function createNewDiv(item){
// 	let newElement = document.createElement('span')
// 	let newModal = document.createElement('span')
// 	newModal.classList.add('modal')
// 	newModal.classList.add('hidden')
// 	newElement.appendChild(newModal)
// 	newElement.classList.add('div')
// 	// newElement.innerText=item.name
// 	let newImage = document.createElement('img')
// 	newImage.src=item.pic
// 	newElement.appendChild(newImage)
// 	let newButton = document.createElement('button')
// 	newButton.innerText = 'Learn more.'
// 	newElement.appendChild(newButton)
// 	document.querySelector('.level1').appendChild(newElement)

// }

// let spans = document.querySelectorAll('.div')

// spans.forEach(item=>{
// 	item.addEventListener('click', popUp)
// })

// function popUp(event){
// 	console.log(event.target)
// 	newModal.classList.toggle('hidden')
// }
