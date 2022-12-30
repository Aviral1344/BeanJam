

const forms= document.querySelector(".forms"),
    pwShowHide= document.querySelectorAll(".eye-icon"),
    links= document.querySelectorAll(".link");

pwShowHide.forEach(eyeIcon =>
    {
        eyeIcon.addEventListener("click",() =>
        {
            let pwFields = eyeIcon.parentElement.parentElement.querySelectorAll(".password");
            pwFields.forEach(password => {
                if(password.type === "password")
                {
                    password.type = "text";
                    eyeIcon.classList.replace("bxs-hide", "bxs-show");
                    return;
                }
                password.type = "password";
                eyeIcon.classList.replace("bxs-show", "bxs-hide");
            })
 
        })
    })


links.forEach(link =>
    {
        link.addEventListener("click", e =>
        {
            e.preventDefault();
            forms.classList.toggle("show-signup");
        })
    })

document.getElementById("signup_button").addEventListener("click", signup);

var firebaseConfig = {
    apiKey: "AIzaSyB2MmNbTTTHEhuJ0DMMjMFO8lGpelwOB_4",
    authDomain: "beanjam-7a98e.firebaseapp.com",
    databaseURL: "https://beanjam-7a98e-default-rtdb.firebaseio.com",
    projectId: "beanjam-7a98e",
    storageBucket: "beanjam-7a98e.appspot.com",
     messagingSenderId: "361212926453",
    appId: "1:361212926453:web:a0c057737022028f8228bc"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth()
const database = firebase.database()


//Signup function
function signup(){
    var email= document.getElementById("emailS").value;
    var password= document.getElementById("pwdS").value;
    var Uname= document.getElementById("full_name").value;

    if(validate_email(email)==false){
        alert("Invalid Email Id")
        return
    }

    if(validate_password(password)==false){
        alert("Pasword should be 8 charecters or longer")
        return
    }

    if(validate_field(email)==false || validate_field(password)==false || validate_field(Uname)==false){
        alert("One or more fields are empty")
        return
    }

    auth.createUserWithEmailAndPassword(email, password)
    .then(function(){

        var user= auth.currentUser
        var database_ref = database.ref()

        var user_data= {
            email: email,
            name: Uname,
            last_login: Date.now()
        }
            database_ref.child('user/' + user.uid).set(user_data)
            alert('User created')

        })

    .catch(function(error){
        var error_message= error.message
        alert(error_message)
    })
}

function validate_email(email){
    var expression = /^[^@]+@\w+(\.\w+)+\w$/
    if (expression.test(email)== true){
        return true;
    }
    else{
        return false
    }
}

function validate_password(password){
    if(password.length<8){
        return false;
    }
    else{
        return true;
    }
}

function validate_field(field){
    if(field == null){
        return false
    }

    if(field.length<=0){
        return false
    }
    else{
        return true
    }
}

