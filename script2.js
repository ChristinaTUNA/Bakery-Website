function log() {
  
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
  
    if (email === "" || password === "") {
      alert("Please enter your email and password.");
      return;
    }
  
    const emailRegex = /^[a-z]+@[a-z]+\.[a-z]+$/;
  
    if (!emailRegex.test(email)) {
      alert("Invalid email.");
      return;
    }
  
    if (password == 1234) {
        alert("Login successful.");
        window.location.assign("main2.html");
    }
    else{
        alert("Incorrect password.");
        return;
    }
  }


  function validateLength(phoneNumber) {
    const length = phoneNumber.length;
    if (length < 10 || length > 13) {
      alert("Invalid phone number length. Please enter a 10-digit phone number.");
      return false;
    }
    return true;
  }
  function validateMobileNumber(mobile) {
    const mobileRegex = /^[0-9]+$/;
    return mobileRegex.test(mobile);
  }
  function send() {
    const name1 = document.getElementById("name1").value.trim();
    const name2 = document.getElementById("name2").value.trim();
    const email = document.getElementById("email1").value.trim();
    const mobile = document.getElementById("number").value.trim();
    const message = document.getElementById("message").value.trim();
  
    // Validate form fields
    if (name1 === "") {
      alert("Please enter your first name.");
      return;
    }
    if (name2 === "") {
      alert("Please enter your last name.");
      return;
    }

    if (email ==="") {
      alert("Please enter your email address.");
      return;
    }
    const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    if (!emailRegex.test(email)) {
      alert("Email address invalid.");
      return;
    }
  
    if (mobile === "") {
      alert("Please enter your mobile number.");
      return;
    }
    if (!validateLength(mobile)) {
      alert("Invalid mobile number length. Please enter a 10-digit phone number.");
      return;
    }
    if (!validateMobileNumber(mobile)) {
      alert("Invalid mobile number format. Please enter only digits (0-9).");
      return;
    }
  
    if (message === "") {
      alert("Please write a message.");
      return;
    }
    
    else{
      alert("Form submitted successfully!");
      console.log("First:", name1);
      console.log("Last:", name2);
      console.log("Email:", email);
      console.log("Mobile:", mobile);
      console.log("Message:", message);
      document.getElementById("contactForm").reset();
    }
    
  }
  
  
  
function openNav(){
  const open = document.getElementById('nav-link');
  open.style.width = '90%';
  open.style.padding = '0 10rem';
  open.style.paddingTop = '20%';
  open.style.paddingBottom = '70%';
}

function closeNav(){
  const close = document.getElementById('nav-link');
  close.style.padding = '0';
  close.style.width ='0'
}
function openCart(){
  const open = document.getElementById('cart');
  open.style.width = '300px';
}
function closeCart(){
  const open = document.getElementById('cart');
  open.style.width = '0';
}

function openSearch(){
  const open = document.getElementById('search');
  open.style.transform = 'scaleY(1)';
}
function closeSearch(){
  const open = document.getElementById('search');
  open.style.transform = 'scaleY(0)';
}

window.addEventListener('scroll', function() {
  if (window.scrollY > 100) {
    document.querySelector('.nav-bar').classList.add('scrolled');
  } else {
    document.querySelector('.nav-bar').classList.remove('scrolled');
  }
});

function updateDate() {
  var currentDate = new Date();
  var dateString = currentDate.toDateString();
  document.getElementById('dateDisplay').textContent = dateString;
}

window.onload = updateDate;




