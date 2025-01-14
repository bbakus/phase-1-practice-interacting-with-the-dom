

function counterCount(){
    const counter = document.querySelector('#counter')
    let total = parseInt(counter.textContent)
    let isRunning = true
    setInterval(() => {
        if (isRunning) {
          total += 1;
         counter.textContent = total;
        }
    }, 1000)
    let pauseButton = document.querySelector('#pause');
    pauseButton.addEventListener('click', () => {
        isRunning = !isRunning;  
        pauseButton.textContent = isRunning ? 'pause' : 'resume';
    })
     
            let plusButton = document.querySelector('#plus')
            plusButton.addEventListener('click', () => {
            total += 1
            })
                let minusButton = document.querySelector('#minus')
                minusButton.addEventListener('click', () => {
                total -= 1
                })
    let likeHeart = document.querySelector('#heart');
    const likeContainer = document.querySelector('.likes');
    const likeMessage = document.createElement('p');
    likeContainer.appendChild(likeMessage)
    likeHeart.addEventListener('click', () => {
    likeMessage.textContent = `${counter.textContent} likes`;
    })
    let form = document.querySelector('#comment-form')
    let textInput = document.querySelector('#comment-input')
    form.addEventListener('submit', (event) => {
        event.preventDefault()
        let fuckingDiv = document.querySelector('#list')
        fuckingP = document.createElement('p')
        fuckingDiv.appendChild(fuckingP)
        fuckingP.textContent = textInput.value

    })  
}







document.addEventListener('DOMContentLoaded', () =>{
    counterCount()



})



