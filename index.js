const balloon = document.getElementById('air-balloon')
const cloudOne = document.getElementById('cloud-one')
const cloudTwo = document.getElementById('cloud-two')
const cloudThree = document.getElementById('cloud-three')
const cloudFour = document.getElementById('cloud-four')
const cloudFive = document.getElementById('cloud-five')
const html = document.getElementById('html')
const javascript = document.getElementById('javascript')
const css = document.getElementById('css')

function move(){
    const incrementer = window.scrollY


    // The '10' refers to the height from the bottom of the sky section.
    // This was added in the css file. Refer styles.css
    balloon.style.bottom = 10 + incrementer * 0.1 + '%'
    
    cloudOne.style.bottom = 40 + incrementer * 0.12 + '%'
    cloudOne.style.marginLeft = 40 + incrementer * 0.1 + '%'

    cloudTwo.style.bottom = 70 + incrementer * 0.14 + '%'
    cloudTwo.style.marginLeft = 70 + incrementer * 0.15 + '%'

    cloudThree.style.bottom = 75 + incrementer * 0.16 + '%'
    cloudThree.style.marginRight = 70 + incrementer * 0.2 + '%'

    cloudFour.style.bottom = 60 + incrementer * 0.13 + '%'
    cloudFour.style.marginRight = 30 + incrementer * 0.1 + '%'

    cloudFive.style.bottom = 70 + incrementer * 0.2 + '%'
    cloudFive.style.marginRight = 5 + incrementer * 0.12 + '%'

    javascript.style.marginRight = 55 + incrementer * 0.6 + '%'

    html.style.marginRight = 43 + incrementer * 0.4 + '%'
    
    css.style.marginRight = 31 + incrementer * 0.2 + '%'

}

window.addEventListener('scroll', move)