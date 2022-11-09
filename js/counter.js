function countForCounter(){
    const counters = document.querySelectorAll(".counter");
    counters.forEach((counter) => {
        if(counter.innerHTML === '0'){
            let speed=parseInt(counter.getAttribute("speed-ms"));
            let interval=setInterval(()=>{
            const target = parseInt(counter.getAttribute("target-count"));
            let current = parseInt(counter.innerText);
            counter.innerHTML = current+1;
            if (current > target) {
                clearInterval(interval);
            }
        }, speed);
        }
     });
}

function resetForCounter(){
    const counters = document.querySelectorAll(".counter");
    counters.forEach((counter_reset) => {counter_reset.innerHTML=0;});
}

const counterSection=document.getElementById("counter-section");
window.onscroll = () =>{
    let viewportHeight = window.innerHeight;
    let current = window.scrollY;
    // let height = counterSection.offsetHeight;
    let top = counterSection.offsetTop;
    let bottom= top - viewportHeight;
    if(current>bottom && current<top){
        countForCounter();
    }else{
        resetForCounter()
    }
}