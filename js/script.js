document.addEventListener('DOMContentLoaded',()=>{
    console.log('js cargado');
    const firstName=document.getElementById('first-name');
    const lastName=document.getElementById('last-name');
    const email=document.getElementById('email');
    const queryInputs=document.querySelectorAll('input[name="query"]');
    const message=document.getElementById('message');
    const consentCheck=document.getElementById('consentId');
    const form=document.querySelector('form');
    const fNameValidation=document.getElementById('first-name-validation');
    const lNameValidation=document.getElementById('last-name-validation');
    const emailValidation=document.getElementById('email-validation');
    const qValidation=document.getElementById('query-validation');
    const mValidation=document.getElementById('message-validation');
    const consentValidation=document.getElementById('consent-validation');
    const sectionArea=document.querySelector('section');
   
    function verifiedFirstName(){
        if(firstName.value.trim() === ''){
            fNameValidation.style.visibility='visible';
            return false;
        }else{
            fNameValidation.style.visibility='hidden';
            return true;
        }
    }

    function verifiedLastName(){
        if(lastName.value.trim() ===''){
            lNameValidation.style.visibility='visible';
            return false;
        }else{
            lNameValidation.style.visibility='hidden';
            return true;
        }
    }

    function verifiedEmail(){
        if(email.value.trim() ===''){
            emailValidation.style.visibility='visible';
            return false;
        }else{
            emailValidation.style.visibility='hidden';
            return true;
        }
    }

    function verifiedQuery(){
        const isChecked=Array.from(queryInputs).some(radio => radio.checked);
        if(!isChecked){
            qValidation.style.visibility='visible';
            return false;
        }else{
            qValidation.style.visibility='hidden';
            return true;
        }
    }

    function verifiedMessage(){
        if(message.value.trim()===''){
            mValidation.style.visibility='visible';
            return false;
        }else{
            mValidation.style.visibility='hidden';
            return true;
        }
    }

    function verifiedConsent(){
        if(consentCheck.checked===false){
            consentValidation.style.visibility='visible';
            return false;
        }else{
            consentValidation.style.visibility='hidden';
            return true;
        }
    }

    verifiedFirstName();
    verifiedLastName();  
    verifiedEmail();  
    verifiedQuery();
    verifiedMessage();
    verifiedConsent();

    form.addEventListener('submit',(e)=>{
        e.preventDefault();
        
        // verificamos que todos los campor estan rellenos y mostramos el error en el que no lo esta
        if(verifiedFirstName() && verifiedLastName() && verifiedEmail() && verifiedQuery() &&       verifiedMessage() && verifiedConsent()){
            console.log('entra en el if');
            sectionArea.style.visibility='visible';
        }else{
            
            console.log('no son todas correctas');
        }
    });

    firstName.addEventListener('input',verifiedFirstName);
    lastName.addEventListener('input',verifiedLastName);
    email.addEventListener('input',verifiedEmail);
    message.addEventListener('input',verifiedMessage);
    consentCheck.addEventListener('click',verifiedConsent);
    queryInputs.forEach(radio => {
        radio.addEventListener('click', verifiedQuery);
    });

});