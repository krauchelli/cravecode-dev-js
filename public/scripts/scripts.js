//test alert, remove this later
//alert("Script is working!");

document.addEventListener('DOMContentLoaded', () => {
    const questions = document.querySelectorAll('.faq .question');

    questions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.querySelector('.answer');
            answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const sidebarItems = document.querySelectorAll(".sidebar-item");

    sidebarItems.forEach(item => {
        item.addEventListener("mouseover", () => {
            item.querySelector(".text").style.display = "inline";
        });

        
    });
});

function enableEditing() {
    const addressField = document.getElementById('address');
    addressField.disabled = false;
    addressField.focus();
    addressField.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault(); 
            confirmEditing();
        }
    });
}

function confirmEditing() {
    const addressField = document.getElementById('address');
    addressField.disabled = true;
}

document.querySelector('.edit-button').addEventListener('click', enableEditing);



function loginShow() {
    var loginPopup = document.getElementById('login-popup');
    loginPopup.style.display = 'flex';
}

function closeLogin() {
    var loginPopup = document.getElementById('login-popup');
    loginPopup.style.display = 'none';
}

function regisShow() {
    var loginPopup = document.getElementById('regis-popup');
    loginPopup.style.display = 'flex';
}

function closeRegis() {
    var loginPopup = document.getElementById('regis-popup');
    loginPopup.style.display = 'none';
}

function confirmLogout(event) {
    var userConfirmed = confirm("Are you sure you want to logout?");
    if (userConfirmed) {
        fetch('/logout', {
            method: 'POST',
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            // If the logout was successful, redirect to the home page
            window.location.href = '/';
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });
    }
    event.preventDefault(); // Prevent navigation regardless of confirmation
}


function ShowQR() {
    var loginPopup = document.getElementById('qr-popup');
    loginPopup.style.display = 'flex';
}

function closeQR() {
    var loginPopup = document.getElementById('qr-popup');
    loginPopup.style.display = 'none';
    // memanggil button checkout
    $('#checkoutTrigger').click();
}

