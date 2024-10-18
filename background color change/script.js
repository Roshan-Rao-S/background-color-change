var index=0;


function change(){
    const gradients = [
        'linear-gradient(to right, #FF5733, #FF33A8)',
        'linear-gradient(to right, #33FF57, #FFFF33)',
        'linear-gradient(to right, #3357FF, #33FFF9)',
        'linear-gradient(to right, #8D33FF, #33FF57)',
        'linear-gradient(to right, #FF33A8, #FFFF33)'
    ];

    document.getElementsByTagName("body")[0].style.background=gradients[index++];
    if (index > gradients.length-1) {
        index=0;
    }
    document.getElementsByClassName("dark")[0].style.background=gradients[index++];
    if (index > gradients.length-1) {
        index=0;
    }
}