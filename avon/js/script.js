const colors = document.querySelectorAll('.productCard__colorItem')
const downBtn = document.querySelector('.btn')
const productColor = document.querySelector('.productCard__nameColor')
let newActiveColor = document.querySelector('.productCard__colorItem_active')
let colorName = newActiveColor.dataset.colorName

for (const color of colors) {
	color.addEventListener("click", () => {
		clearColorName()
		clearActiveClasses()
		color.classList.add('productCard__colorItem_active')
		newActiveColor = document.querySelector('.productCard__colorItem_active')
		colorName = newActiveColor.dataset.colorName
		productColor.innerHTML += " " + colorName
	})
}

function clearActiveClasses() {
	colors.forEach((color) => {
		color.classList.remove('productCard__colorItem_active')
	})
}

function clearColorName() {
	productColor.innerHTML= "Оттенок:"
}

downBtn.addEventListener('click', () => {
	alert("Товар оттенка " + colorName + " в корзине")
})
