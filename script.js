$(document).ready(function () {

   

    var scroll_pos = 0;
    $(document).scroll(function () {
        scroll_pos = $(this).scrollTop();
        if (scroll_pos > 1800) { // if scroll past a certain pixel
            $("body").css('background-color', '#16161d'); // change the bottom color // elgengroid

        }
        else {
            $("body").css('background-color', '#0D0D0D'); // black


        }
    });
});



var cursor = document.getElementById('cursor'); // cursor follow

document.addEventListener('mousemove', function (e) {
    var x = e.clientX;
    var y = e.clientY;
    cursor.style.left = x + "px";
    cursor.style.top = y + "px";


});


let listItems = [...document.querySelectorAll('.reveal li')]; // spread function all list items into an array 


let options = {
    rootMargin: '-10%',
    // threshold: 0.0
}
let observer = new IntersectionObserver(showItem, options);//function triggered when items come into view port

function showItem(entries) {

    entries.forEach(entry => {
        console.log(entries);
        if (entry.isIntersecting) // child element is the span
        {
            entry.target.children[0].classList.add('active');
            observer.unobserve(entry.target);
        }
        else {
            return;
        }

    })

}

listItems.forEach(item => { //split all the ltters up into indi spans, to perform seperate animations

    observer.observe(item);

})







let showing = [...document.querySelectorAll('.appear')]; // spread function all list items into an array 

let options2 = {
    rootMargin: '40%',
    // threshold: 0.0
}
let observer1 = new IntersectionObserver(showItems, options2);//function triggered when items come into view port

function showItems(entries1) {

    entries1.forEach(entry1 => {
        if (entry1.isIntersecting) // child element is the span
        {
            entry1.target.classList.add('show');
            observer1.unobserve(entry.target);
        }
        else {
            return;
        }

    })

}

showing.forEach(item1 => { //split all the ltters up into indi spans, to perform seperate animations

    observer1.observe(item1);

})









let showingEarlier = [...document.querySelectorAll('.appearE')]; // spread function all list items into an array 

let options3 = {
    rootMargin: '20%',
    threshold: 0.0
}
let observer2 = new IntersectionObserver(showItems, options3);//function triggered when items come into view port

function showItems(entries2) {

    entries2.forEach(entry2 => {
        if (entry2.isIntersecting) // child element is the span
        {
            entry2.target.classList.add('show1');
            observer2.unobserve(entry2.target);
        }
        else {
            return;
        }

    })

}

showingEarlier.forEach(item2 => { //split all the ltters up into indi spans, to perform seperate animations

    observer2.observe(item2);

})






//button goes to top of the page

function topFunction() {

    $('html, body').animate({ scrollTop: 0 }, 'slow'); // top function
}



const text = document.querySelector('.photo-text-spin p'); // select the paragraph with the words and assign to constant called text
text.innerHTML = text.innerText.split("").map(  // split  by the spaces and map to new element
    (char, i) => // takig in the characters present in the words and assigning it to i 
        `<span style="transform:rotate(${i * 8}deg)" > ${char} </span>` // formig new span element  with style transform and put the seperated characters in the span element andd style based on the css
).join(" ") // join my the spaces







