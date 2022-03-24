const textElement - document.getElementById('text')
const optionButtons = document.getElementById('option-buttons')

function startGame() {

}

function showTextNode(texctNodeIndex) {
    const textNode = textNodes.find(textNode => textNode.id === texctNodeIndex)
    textElement.innerText = textNode.text
    while (optionButtonsElement.firstchild) {
        optionButtonsElement.removeChild(optionButtonsElement.firstchild) 


    }

    textNode.options.forEach(option => {
        if (showOption(option)) {
                const buttion = document.createElement('button')
                buttion.innerText = option.text
                buttion.classList.add('btn')
                buttion.addEventListener('click', () => selectOption(option))
                optionButtonElement.appendChild(button)
        }


    }

    ) 
        


}

function showOption(option) {
    return true

}

function selectOption(option) {


}

const textNodes = [
{
    id: 1,
    text: 'You look around your surroundings before.... ',
    options:[
        {
            text: 'you get out the car.'
            nextText: 2
    

        },
            {
                text: ' you kick the door windows out and try to get out head first '
                nextText: 3

            }
                {
                    text: 'scream for help.'
                     nextText: 4


                 }
                        {
                         text: 'You sit back and lay down and wait for help to come.'
                        getState: {twd: true}
                        nextText: 5


                        }
                                id: 2,
                                 text: 'You hear sirens coming your way. You crashed in a ditch and you see the dead in front of you. You decide to...'
                                options: [
                                {
                                     text: 'you go out the drivers door.'
                                        nextText: 1
                                }
                                    {
                                        text: 'You go out the back windshield and kick a zombie away from you in order to get away'
                                        nextText: 2
                                    }
        

                                        ]
                                            id: 3,
                                            text: 'You see a firetruck with sirens going your direction'
                                            options: [
                                                {
                                                    text: 'You begin sprinting to the front side of the firetruck'
                                                    nextText: 1
                                                }

                                                {
                                                    text: ' You begin to sprint to the backside of the firetruck'
                                                    next: 2

                                                ]


                                                }

                                                    id: 4,
                                                    text: 'you have been holding onto the firetruck for 10 minutes and see a barricade of cars. You see a man hop out the truck to greet you and he lets you know everything that had happened.'

                                                    id: 5,
                                                    text: 'You are told about a camp that is west bound and asks for your help getting there and offers an axe.'
                                                    options: [
                                                        {
                                                            text: 'You agree to fight alongside him and take the axe'
                                                            nextText: 1
                                                        }
                                                            text: 'You do not agree to fight alongside him and just stay behind him'
                                                            nextText: 2


                                                    ]





                                            ]

                                        


                                    ]






                                }




]