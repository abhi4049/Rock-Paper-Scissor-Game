const rocksId = document.getElementById("rock")
const paperId = document.getElementById("paper")
const scissorsId = document.getElementById("scissor")

const details = document.getElementById("details")

let playerScore = document.getElementById("playerScore")
let computerScore = document.getElementById("computerScore")

const result = document.getElementById("result")

console.log(rocksId.attributes.id.value, paperId.attributes.id.value, scissorsId.attributes.id.value)

rocksId.addEventListener('click', () => {
	const randomValue = ["rock", "paper", "scissor"][Math.floor(Math.random() * 3)]
	const myRockValue = rocksId.attributes.id.value
	console.log("Player: " + myRockValue, "Computer: " + randomValue)
	if (myRockValue === randomValue) {
		result.innerText = "TIE !!!"
		result.style.color = 'white'
	} else {
		if (myRockValue === "rock" && randomValue === "scissor") {
			result.innerText = "Player Won !!!"
			result.style.color = ' rgb(97, 202, 97)'
		} else {
			result.innerText = "Computer Won !!!"
			result.style.color = 'red'
		}
	}
	playerScore.innerHTML = `<h3>${myRockValue}</h3>`
	computerScore.innerHTML = (`<h3>${randomValue}</h3>`)

})
paperId.addEventListener('click', () => {
	const randomValue = ["rock", "paper", "scissor"][Math.floor(Math.random() * 3)]
	const myPaperValue = paperId.attributes.id.value
	console.log("Player: " + myPaperValue, "Computer: " + randomValue)
	if (myPaperValue === randomValue) {
		result.innerText = "TIE !!!"
		result.style.color = 'white'
	} else {
		if (myPaperValue === "paper" && randomValue === "rock") {
			result.innerText = "Player Won !!!"
			result.style.color = ' rgb(97, 202, 97)'
		} else {
			result.innerText = "Computer Won !!!"
			result.style.color = 'red'
		}
	}
	playerScore.innerHTML = `<h3>${myPaperValue}</h3>`
	computerScore.innerHTML = (`<h3>${randomValue}</h3>`)

})
scissorsId.addEventListener('click', () => {
	const randomValue = ["rock", "paper", "scissor"][Math.floor(Math.random() * 3)]
	const myScissorValue = scissorsId.attributes.id.value
	console.log("Player: " + myScissorValue, "Computer: " + randomValue)
	if (myScissorValue === randomValue) {
		result.innerText = "TIE !!!"
		result.style.color = 'white'
	} else {
		if (myScissorValue === "scissor" && randomValue === "paper") {
			result.innerText = "Player Won !!!"
			result.style.color = ' rgb(97, 202, 97)'
		} else {
			result.innerText = "Computer Won !!!"
			result.style.color = 'red'
		}
	}
	playerScore.innerHTML = `<h3>${myScissorValue}</h3>`
	computerScore.innerHTML = (`<h3>${randomValue}</h3>`)

}) 