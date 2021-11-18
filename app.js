window.addEventListener("load", ()=>{
    const sounds = document.querySelectorAll(".sound");
    const pads = document.querySelectorAll(".pads div");
    const visual = document.querySelector('.visual');
    const colors = [
        "#db4019e1",
        "#f8760b",
        "#f7e016",
        "#11df45",
        "#1db1df",
        "#4034e6",
        "#7122cc"
    ];
    const textColor = document.querySelector('.heading');
    const pad1 = document.querySelector('.pad1');
    const pad2 = document.querySelector('.pad2');
    const pad3 = document.querySelector('.pad3');
    const pad4 = document.querySelector('.pad4');
    const pad5 = document.querySelector('.pad5');
    const pad6 = document.querySelector('.pad6');
    const pad7 = document.querySelector('.pad7');

    //Change Text Animation function
    
    pad1.addEventListener('click', function(){
        textColor.style.color = "#db4019e1";
    });
    pad2.addEventListener('click', function(){
        textColor.style.color = "#f8760b";
    });
    pad3.addEventListener('click', function(){
        textColor.style.color = "#f7e016";
    });
    pad4.addEventListener('click', function(){
        textColor.style.color = "#11df45";
    });
    pad5.addEventListener('click', function(){
        textColor.style.color = "#1db1df";
    });
    pad6.addEventListener('click', function(){
        textColor.style.color = "#4034e6";
    });
    pad7.addEventListener('click', function(){
        textColor.style.color = "#7122cc";
    });

    //Sound
    pads.forEach((pad, index )=> {
        pad.addEventListener('click', function(){
            sounds[index].currentTime =0;
            sounds[index].play();

            createBubbles(index);
        });
    });

    //Bubble Function
    const createBubbles = (index)=>{
        const bubble = document.createElement("div");
        visual.appendChild(bubble);
        bubble.style.backgroundColor = colors[index];
        bubble.style.animation = 'jump 1s ease';
        bubble.addEventListener('animationend', function(){
            visual.removeChild(this);
        });
    };
});