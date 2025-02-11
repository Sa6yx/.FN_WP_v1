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

//========================= CUSTOMERS ================================================================================================//
const Customers = [
    {
        customerName: 'Toji Fushiguro',
        phoneNumber: '+996 500 123 456',
        location: 'Bishkek, Kyrgyzstan',
        status: 'Active',
        profilePicture: 'images/toji.jpg'
    },
    {
        customerName: 'Akylai Aitbekova',
        phoneNumber: '+996 554 675 445',
        location: 'Osh, Kyrgyzstan',
        status: 'Non-active',
        profilePicture: 'images/user3.jpeg'
    },
    {
        customerName: 'Aika Asanova',
        phoneNumber: '+996 707 987 654',
        location: 'Karakol, Kyrgyzstan',
        status: 'Active',
        profilePicture: 'images/user3.jpeg'
    },
    {
        customerName: 'Ruslan Abdykadyrov',
        phoneNumber: '+996 555 121 343',
        location: 'Bishkek, Kyrgyzstan',
        status: 'Non-active',
        profilePicture: 'images/user3.jpeg'
    },
    {
        customerName: 'Gulnara Sadykova',
        phoneNumber: '+996 777 567 890',
        location: 'Jalal-Abad, Kyrgyzstan',
        status: 'Active',
        profilePicture: 'images/user3.jpeg'
    },
    {
        customerName: 'Azamat Tuleberdiev',
        phoneNumber: '+996 550 901 234',
        location: 'Naryn, Kyrgyzstan',
        status: 'Active',
        profilePicture: 'images/user3.jpeg'
    },
    {
        customerName: 'Meerim Zhumasheva',
        phoneNumber: '+996 705 456 789',
        location: 'Talas, Kyrgyzstan',
        status: 'Non-active',
        profilePicture: 'images/user3.jpeg'
    },
    {
        customerName: 'Erlan Baktybekov',
        phoneNumber: '+996 559 876 543',
        location: 'Batken, Kyrgyzstan',
        status: 'Active',
        profilePicture: 'images/user3.jpeg'
    },
    {
        customerName: 'Dinara Esenalieva',
        phoneNumber: '+996 772 345 678',
        location: 'Bishkek, Kyrgyzstan',
        status: 'Active',
        profilePicture: 'images/user3.jpeg'
    },
    {
        customerName: 'Bakyt Abdraimov',
        phoneNumber: '+996 551 789 012',
        location: 'Osh, Kyrgyzstan',
        status: 'Non-active',
        profilePicture: 'images/user3.jpeg'
    },
    {
        customerName: 'Cholponai Kydykeeva',
        phoneNumber: '+996 703 654 321',
        location: 'Karakol, Kyrgyzstan',
        status: 'Active',
        profilePicture: 'images/user3.jpeg'
    },
    {
        customerName: 'Ulan Abdyldaev',
        phoneNumber: '+996 558 210 987',
        location: 'Bishkek, Kyrgyzstan',
        status: 'Active',
        profilePicture: 'images/user3.jpeg'
    },
    {
        customerName: 'Janyl Abdullaeva',
        phoneNumber: '+996 775 890 123',
        location: 'Jalal-Abad, Kyrgyzstan',
        status: 'Non-active',
        profilePicture: 'images/user3.jpeg'
    },
    {
        customerName: 'Samat Atabaev',
        phoneNumber: '+996 553 456 789',
        location: 'Naryn, Kyrgyzstan',
        status: 'Active',
        profilePicture: 'images/user3.jpeg'
    },
    {
        customerName: 'Aidana Askarova',
        phoneNumber: '+996 709 012 345',
        location: 'Talas, Kyrgyzstan',
        status: 'Active',
        profilePicture: 'images/user3.jpeg'
    },
    {
        customerName: 'Kubanychbek Tursunbaev',
        phoneNumber: '+996 557 678 901',
        location: 'Batken, Kyrgyzstan',
        status: 'Non-active',
        profilePicture: 'images/user3.jpeg'
    },
    {
        customerName: 'Aida Alymbekova',
        phoneNumber: '+996 771 234 567',
        location: 'Bishkek, Kyrgyzstan',
        status: 'Active',
        profilePicture: 'images/user3.jpeg'
    },
    {
        customerName: 'Maksat Dzhumagulov',
        phoneNumber: '+996 556 890 123',
        location: 'Osh, Kyrgyzstan',
        status: 'Active',
        profilePicture: 'images/user3.jpeg'
    },
    {
        customerName: 'Zarina Kadyrova',
        phoneNumber: '+996 702 543 210',
        location: 'Karakol, Kyrgyzstan',
        status: 'Non-active',
        profilePicture: 'images/user3.jpeg'
    },
    {
        customerName: 'Temirlan Asanov',
        phoneNumber: '+996 554 109 876',
        location: 'Bishkek, Kyrgyzstan',
        status: 'Active',
        profilePicture: 'images/user3.jpeg'
    },
    {
        customerName: 'Nazgul Abdykerimova',
        phoneNumber: '+996 779 765 432',
        location: 'Jalal-Abad, Kyrgyzstan',
        status: 'Active',
        profilePicture: 'images/user3.jpeg'
    },
    {
        customerName: 'Esen Turdubaev',
        phoneNumber: '+996 552 321 098',
        location: 'Naryn, Kyrgyzstan',
        status: 'Non-active',
        profilePicture: 'images/user3.jpg'
    }
    
];

// func to fill customers table
function fillCustomersTable(customersToShow) {
    const tableBody = document.querySelector('.recent-customers table tbody');
    tableBody.innerHTML = ''; // Clear the table before filling

    customersToShow.forEach(customer => {
        const tr = document.createElement('tr');
        const trContent = `
            <td>
                <div class="profile-photo">
                    <img src="${customer.profilePicture}" alt="${customer.customerName}">
                </div>
            </td>
            <td>${customer.customerName}</td>
            <td>${customer.phoneNumber}</td>
            <td>${customer.location}</td>
            <td class="${customer.status === 'Active' ? 'success' : 'warning'}">${customer.status}</td>
            <td class="primary">Details</td>
        `;
        tr.innerHTML = trContent;
        tableBody.appendChild(tr);
    });
}


fillCustomersTable(Customers.slice(0, 8));

const showAllBtn = document.querySelector('.recent-customers a');

showAllBtn.addEventListener('click', () => {
    if (showAllBtn.textContent === 'Show All') {
        fillCustomersTable(Customers); // Show all customers
        showAllBtn.textContent = 'Show Less';
    } else {
        fillCustomersTable(Customers.slice(0, 8)); // Show only 8 clients
        showAllBtn.textContent = 'Show All';
    }
});