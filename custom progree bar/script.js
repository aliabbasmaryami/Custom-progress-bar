const progress = document.querySelector(".progress_done");

setTimeout(()=>{
    progress.style.opacity = 1;
    progress.style.width= progress.getAttribute('data-done') + "%";
    
}, 500)
