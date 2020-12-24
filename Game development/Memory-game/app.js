document.addEventListener('DOMContentLoaded', () => {

    const cardArray = [{
            name: 'fries',
            img: 'images/fries.png'
        },
        {
            name: 'cheeseburger',
            img: 'images/cheeseburger.png'
        },
        {
            name: 'ice-cream',
            img: 'images/ice-cream.png'
        },
        {
            name: 'pizza',
            img: 'images/pizza.png'
        },
        {
            name: 'milkshake',
            img: 'images/milkshake.png'
        },
        {
            name: 'hotdog',
            img: 'images/hotdog.png'
        },
        {
            name: 'fries',
            img: 'images/fries.png'
        },
        {
            name: 'cheeseburger',
            img: 'images/cheeseburger.png'
        },
        {
            name: 'ice-cream',
            img: 'images/ice-cream.png'
        },
        {
            name: 'pizza',
            img: 'images/pizza.png'
        },
        {
            name: 'milkshake',
            img: 'images/milkshake.png'
        },
        {
            name: 'hotdog',
            img: 'images/hotdog.png'
        }
    ]

    cardArray.sort(() => 0.5 - Math.random());




    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result');
    var cardChosen = []
    var cardsIdChosen = []
    var cardsWon = []


    function createBoard() {

        for (let i = 0; i < cardArray.length; i++) {

            var card = document.createElement('img');
            card.setAttribute('src', 'images/blank.png');
            card.setAttribute('data-id', i);
            card.addEventListener('click', flipcard)
            grid.appendChild(card);

        }

    }

    // check for match 
    function checkResult() {
        var cards = document.querySelectorAll('img')
        const optionIdOne = cardsIdChosen[0]
        const optionIdTwo = cardsIdChosen[1]
        if (cardChosen[0] === cardChosen[1]) {
            alert("You found a match")
            cards[optionIdOne].setAttribute('src', 'images/white.png')
            cards[optionIdTwo].setAttribute('src', 'images/white.png')
            cardsWon.push(cardChosen)
        } else {
            cards[optionIdOne].setAttribute('src', 'images/blank.png')
            cards[optionIdTwo].setAttribute('src', 'images/blank.png')
            alert("Better luck next Time")

        }

        cardChosen = []
        cardsIdChosen = []
        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length === cardArray.length / 2) {
            resultDisplay.textContent = 'You won'

        }

    }




    // flip your card

    function flipcard() {
        var cardId = this.getAttribute('data-id')
        cardChosen.push(cardArray[cardId].name)
        cardsIdChosen.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardChosen.length === 2) {
            setTimeout(checkResult, 500)
        }
        
    }

    createBoard()
})