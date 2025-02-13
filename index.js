const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn")
const closeBtn = document.querySelector("#close-btn")

const themeToggler = document.querySelector(".theme-toggler")

//Clock
function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const timeString = `${hours} : ${minutes} : ${seconds}`;
    document.getElementById('clock').textContent = timeString;
  }

  updateClock(); // Call the function once to initialize the clock
  setInterval(updateClock, 1000); // Update the clock every second

//show sidebar
menuBtn.addEventListener('click', () => {
    sideMenu.style.display = 'block';
})

//close sidebar
closeBtn.addEventListener('click', () => {
    sideMenu.style.display = 'none';
})

//change theme
document.addEventListener("DOMContentLoaded", () => {
    const themeToggler = document.querySelector(".theme-toggler");
    if (!themeToggler) return; // If there is no switch, abort the execution

    const body = document.body;

    // Function for applying the topic
    function applyTheme(theme) {
        if (theme === "dark") {
            body.classList.add("dark-theme-variables");
            themeToggler.querySelector('i:nth-child(1)').classList.remove('active');
            themeToggler.querySelector('i:nth-child(2)').classList.add('active');
        } else {
            body.classList.remove("dark-theme-variables");
            themeToggler.querySelector('i:nth-child(1)').classList.add('active');
            themeToggler.querySelector('i:nth-child(2)').classList.remove('active');
        }
    }

    // Load the theme on page load
    const savedTheme = localStorage.getItem("theme") || "light";
    applyTheme(savedTheme);

    // Theme switch handler
    themeToggler.addEventListener("click", () => {
        const newTheme = body.classList.contains("dark-theme-variables") ? "light" : "dark";
        localStorage.setItem("theme", newTheme);
        applyTheme(newTheme);
    });
});

//fill orders in table
function fillOrdersTable(ordersToShow) {
    const tableBody = document.querySelector('table tbody');
    tableBody.innerHTML = '';

    ordersToShow.forEach(order => {
        const tr = document.createElement('tr');
        const trContent = `
                            <td>${order.productName}</td>
                            <td>${order.productNumber}</td>
                            <td>${order.paymentStatus}</td>
                            <td class="${order.shipping === 'Declined'? 'danger': order.shipping === 'Pending'? 'warning': 'primary'}">${order.shipping}</td>
                            <td class="primary">Details</td>
                            `;
        tr.innerHTML = trContent;
        tableBody.appendChild(tr);
    });
}


fillOrdersTable(Orders.slice(0, 5));

const showAllBtn = document.querySelector('.recent-orders a');

showAllBtn.addEventListener('click', () => {
    if (showAllBtn.textContent === 'Show All') {
        fillOrdersTable(Orders);
        showAllBtn.textContent = 'Show Less';
    } else {
        fillOrdersTable(Orders.slice(0, 5));
        showAllBtn.textContent = 'Show All';
    }
});

//============== SETTINGS =============================================================================================================//
// Updating the user name
function updateUsername() {
    const newUsername = document.getElementById('username').value;
    if (newUsername) {
        alert(`Имя пользователя изменено на: ${newUsername}`);
    } else {
        alert('Пожалуйста, введите новое имя пользователя.');
    }
}

// Updating your profile picture
function updateProfilePicture(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            document.getElementById('profile-picture').src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
}

// Updating contact information
function updateContactInfo() {
    const newEmail = document.getElementById('email').value;
    const newPhone = document.getElementById('phone').value;
    if (newEmail || newPhone) {
        alert(`Контактная информация обновлена:\nEmail: ${newEmail}\nТелефон: ${newPhone}`);
    } else {
        alert('Пожалуйста, введите новый email или номер телефона.');
    }
}

// Password update
function updatePassword() {
    const currentPassword = document.getElementById('current-password').value;
    const newPassword = document.getElementById('new-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (newPassword !== confirmPassword) {
        alert('Новый пароль и подтверждение пароля не совпадают.');
        return;
    }

    if (currentPassword && newPassword) {
        alert('Пароль успешно изменен.');
        
    } else {
        alert('Пожалуйста, заполните все поля.');
    }
}

function removePaymentMethod(methodId) {
    // logic <>
    console.log(`Удаление платежного метода: ${methodId}`);
    alert(`Платежный метод ${methodId} удален.`);
}