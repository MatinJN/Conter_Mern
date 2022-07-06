let plus = document.querySelector('.plus')
let reset = document.querySelector('.reset')
let minus = document.querySelector('.minus')
let h1 = document.querySelector('#h1')

let count = 1;
plus.addEventListener('click',function() {
    count++;
    h1.innerHTML = count;
})

reset.addEventListener('click',function() {
    count = 0;
    h1.innerHTML = count;
})

minus.addEventListener('click',function() {
    count--;
    if (count < 1) {
        alert('Minimum deyer 1 olmalidir')
        
    }
    h1.innerHTML = count;
})







