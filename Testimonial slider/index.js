const testimonials = [
    {
        name: "Alex periera",
        photoUrl: "boy.webp",
        text: "I made back the purchase price in just 48 hours! You won't regret it. We've used Apple for the last five years. Apple is the most valuable business resource we have EVER purchased."
    },
    {
        name: "Maura J",
        photoUrl: "girl.webp",
        text: "Definitely worth the investment. Thanks for the great service. Thank you so much for your help. Very easy to use."
    },
    {
        name: "Marlyn",
        photoUrl: "laugh.webp",
        text: "Just what I was looking for. Without Apple, we would have gone bankrupt by now. If you want real marketing that works and effective implementation - Apple's got you covered."
    },
];

const imgEl = document.querySelector("img")
const textEl = document.querySelector(".text")
const usernameEl = document.querySelector(".username");



let idx = 0;

updateTestimonial()

function updateTestimonial(){
    const { name, photoUrl, text } = testimonials[idx];
    imgEl.src = photoUrl;
    textEl.innerText = text;
    usernameEl.innerText = name;
    idx++
    if(idx === testimonials.length){
        idx = 0;
    }
    setTimeout(()=>{
        updateTestimonial()

    }, 2000)
}
