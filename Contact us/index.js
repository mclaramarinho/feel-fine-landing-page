document.querySelector('form').addEventListener('invalid', function(event){
        event.preventDefault();
}, true)



document.querySelector("button").addEventListener('click', function(){
    var invalids = Array.from(document.querySelectorAll(':invalid'));
    
    if(!invalids.includes('name')){
        document.querySelector(".inv-name").classList.add('hidden');
    }

    if(!invalids.includes('email')){
        document.querySelector(".inv-email").classList.add('hidden');
    }

    if(!invalids.includes('agree')){
        document.querySelector(".inv-agree").classList.add('hidden');
    }

    for(let i = 0; i < invalids.length; i++){
        let current = invalids[i].getAttribute('name');
        switch (current){
            case 'name':
                document.querySelector(".inv-name").classList.remove('hidden');
                break;
            case 'email':
                document.querySelector(".inv-email").classList.remove('hidden');
                break;
            case 'agree':
                document.querySelector(".inv-agree").classList.remove('hidden');
                break;
        }
    }

    var textareaContent = document.querySelector('textarea').textLength;
    if(textareaContent === 0){
        document.querySelector(".inv-msg").classList.remove('hidden');
    }else{
        document.querySelector(".inv-msg").classList.add('hidden');
    }

    var selectValue = document.querySelector('select').value;
    if(selectValue==='Select option...'){
        document.querySelector(".inv-reason").classList.remove('hidden');
    }else{
        document.querySelector(".inv-reason").classList.add('hidden');
    }
})
