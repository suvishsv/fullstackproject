const input= document.querySelector('input[type="file"]');
const errorDiv = document.querySelector('.error');

form.addEventListener('submit',(e)=>{
   
    if(validation()){
         // validation is true.then redirect to another HTML file, e.g., "successpage.html"
         window.location.href = "successpage.html";
         e.preventDefault();
    }
    else
    {
        e.preventDefault();
    } 
});



function validation() {
    const file= input.files[0];
    if(!file){
        const err= new Error("File not selected");
        // console.error(err);
        errorDiv.textContent = err.message;
        return false;
    }

const limit=2000;
const fileSize = file.size / 1024; // Convert bytes to KB

if(fileSize > limit){
    const err=new Error(`File size exceeds ${(fileSize/1000).toFixed(2)} MB`);
    errorDiv.textContent = err.message;;
    return false;
}
else{
    return true;
}

}