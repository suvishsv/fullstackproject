const container = document.querySelector('.container');
const btns= document.querySelectorAll('.btn');
const imagelist=["1","2","3","4","5"];


let index = 0;
btns.forEach((button) => {
    button.addEventListener('click', () => {
        if(button.classList.contains('btn-left')){
            index--;
            if(index < 0){
                index = imagelist.length - 1;
            }
            console.log(index);
             container.style.background =`url("images/${imagelist[index]}.jpg") center/cover fixed no-repeat `
        }
           
        else{
            index++;
            if(index >= imagelist.length){
                index = 0;
            }
            container.style.background = `url("images/${imagelist[index]}.jpg") center/cover fixed no-repeat`
        }
    })
})