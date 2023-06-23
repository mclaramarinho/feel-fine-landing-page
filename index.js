/*SECTION -> FAQ*/
//Getting the opened accordion items to collapse when another one is opened
const faqButtons = Array.from(document.querySelectorAll('.accordion-button'));

for (let i = 0; i < faqButtons.length; i++) {
    faqButtons[i].addEventListener('click', function() {
        var index = i;
        for(let j = 0; j < faqButtons.length; j++){
            if(j != index){
                document.querySelectorAll('.accordion-collapse')[j].classList.remove("show");
            }
        }
    })
}