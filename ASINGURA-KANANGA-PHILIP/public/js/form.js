const form = document.getElementById('form')

let nameErr = document.getElementById('nameError')
let genderErr = document.getElementById('genderError')
let dobErr = document.getElementById('dobError')
let nationalityErr = document.getElementById('nationalityError')
let contactErr = document.getElementById('contactError')
let emailErr = document.getElementById('emailError')
let boxErr = document.getElementById('boxError')
let econtactErr = document.getElementById('econtactError')
let passportErr = document.getElementById('passportError')
let visaErr = document.getElementById('visaError')
let fromErr = document.getElementById('fromError')
let toErr = document.getElementById('toError')

const success = document.getElementById('success')






form.addEventListener('submit',(e)=>{
    validFields = true
    const fName = document.getElementById('fullname').value
    const gender = document.getElementById('gender').value
    const dob = document.getElementById('dob').value
    const nation = document.getElementById('nationality').value
    const phone = document.getElementById('contact').value
    const email = document.getElementById('email').value
    const box = document.getElementById('box').value
    const ephone = document.getElementById('ephone').value
    const passport = document.getElementById('passport').value
    const visa = document.getElementById('visa').value
    const from = document.getElementById('from').value
    const to = document.getElementById('to').value
    

    nameErr.textContent = ''
    genderErr.textContent = ''
    dobErr.textContent = ''
    nationalityErr.textContent = ''
    contactErr.textContent = ''
    emailErr.textContent = ''
    boxErr.textContent = ''
    econtactErr.textContent = ''
    passportErr.textContent = ''
    visaErr.textContent = ''
    fromErr.textContent = ''
    toErr.textContent = ''









    if(fName === ''){
        nameErr.textContent= "Invalid name"
        validFields = false
    }
    if(gender === ''){
        nameErr.textContent= "Please enter gender"
        validFields = false
    }
    if(nation === ''){
        nameErr.textContent= "Please enter country"
        validFields = false
    }
    if(box === ''){
        nameErr.textContent= "Please enter POBOX"
        validFields = false
    }
    if(visa === ''){
        nameErr.textContent= "please add file"
        validFields = false
    }




    if( dob === ''){
        dobErr.textContent= "Invalid DOB"
        validFields = false
    }
    if( phone === ''){
        phoneErr.textContent= "Invalid contact"
        validFields = false
    }
    if( email === ''){
        emailErr.textContent= "Invalid email"
        validFields = false
    }
    if( ephone === ''){
        ephoneErr.textContent= "Invalid contact"
        validFields = false
    }
    if( passport === ''){
        passportErr.textContent= "Invalid Passport Number"
        validFields = false
    }
    if( from === ''){
        fromErr.textContent= "Invalid City"
        validFields = false
    }
    if( to === ''){
        toErr.textContent= "Invalid City"
        validFields = false
    }
    
    success.textContent = "Form has been submitted successfully"
    success.style.border = "solid 2px green"

    if(!validFields){
        e.preventDefault()
    }
})