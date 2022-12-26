const reveal = document.querySelector('.overskrift1')
const reveal2 = document.querySelector('.overskrift2')
const reveal3 = document.querySelector('.overskrift3')
const lryic1 = document.querySelector('.lyric1')
const lryic2 = document.querySelector('.lyric2')
const lryic3 = document.querySelector('.lyric3')

reveal.onclick = function(){
    lryic1.classList.toggle('show')
}

reveal2.onclick = function(){
    lryic2.classList.toggle('show')
}

reveal3.onclick = function(){
    lryic3.classList.toggle('show')
}