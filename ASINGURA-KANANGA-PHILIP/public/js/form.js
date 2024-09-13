const form = document.getElementById('form')


const nameErr = document.getElementById('nameError')
const genderErr = document.getElementById('genderError')
const dobErr = document.getElementById('dobError')
const nationalityErr = document.getElementById('nationalityError')
const contactErr = document.getElementById('contactError')
const emailErr = document.getElementById('emailError')
const boxErr = document.getElementById('boxError')
const econtactErr = document.getElementById('econtactError')
const passportErr = document.getElementById('passportError')
const visaErr = document.getElementById('visaError')
const fromErr = document.getElementById('fromError')
const toErr = document.getElementById('toError')

const success = document.getElementById('success')






form.addEventListener('submit',(e)=>{
    

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


    const validEmail =/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

    // let age = dob - Date.now()



    let validFields = true

    if(fName === ''){
        nameErr.textContent = "Invalid name"
        validFields = false
    }
    if(gender === ''){
        genderErr.textContent= "Please enter gender"
        validFields = false
    }
    if(nation === ''){
        nationalityErr.textContent= "Please enter country"
        validFields = false
    }
    if(box === ''){
        boxErr.textContent= "Please enter POBOX"
        validFields = false
    }
    if(visa === ''){
        visaErr.textContent= "please add file"
        validFields = false
    }




    if( dob === ''){
        dobErr.textContent= "Invalid DOB"
        validFields = false
    }
    if( phone === ''){
        contactErr.textContent= "Invalid contact"
        validFields = false
    }
    if( !validEmail.test(email)){
        emailErr.textContent= "Invalid email"
        validFields = false
    }
    if( ephone === ''){
        econtactErr.textContent= "Invalid contact"
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
    
    // success.textContent = "Form has been submitted successfully"
    // success.style.border = "solid 2px green"

    if(validFields === false){
        e.preventDefault()
    }
})