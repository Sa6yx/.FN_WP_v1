const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn")
const closeBtn = document.querySelector("#close-btn")

const themeToggler = document.querySelector(".theme-toggler")

//show sidebar
menuBtn.addEventListener('click', () => {
    sideMenu.style.display = 'block';
})

//close sidebar
closeBtn.addEventListener('click', () => {
    sideMenu.style.display = 'none';
})

//change theme
themeToggler.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme-variables');

    themeToggler.querySelector('i:nth-child(1)').classList.toggle('active');
    themeToggler.querySelector('i:nth-child(2)').classList.toggle('active');
})

const Customers = [
    {
        customerName: 'Toji Fushiguro',
        phoneNumber: '+996 500 123 456',
        location: 'Bishkek, Kyrgyzstan',
        status: 'Active'
    },
    
];

// func to fill table
function fillCustomersTable(customersToShow) {
    const tableBody = document.querySelector('.recent-customers table tbody');
    tableBody.innerHTML = ''; // Clearing the table before filling

    customersToShow.forEach(customer => {
        const tr = document.createElement('tr');
        const trContent = `
                            <td>${customer.customerName}</td>
                            <td>${customer.phoneNumber}</td>
                            <td>${customer.location}</td>
                            <td class="${customer.status === 'Active'? 'success': 'warning'}">${customer.status}</td>
                            <td class="primary">Details</td>
                            `;
        tr.innerHTML = trContent;
        tableBody.appendChild(tr);
    });
}


fillCustomersTable(Customers.slice(0, 5));

const showAllBtn = document.querySelector('.recent-customers a');

showAllBtn.addEventListener('click', () => {
    if (showAllBtn.textContent === 'Show All') {
        fillCustomersTable(Customers);
        showAllBtn.textContent = 'Show Less';
    } else {
        fillCustomersTable(Customers.slice(0, 5));
        showAllBtn.textContent = 'Show All';
    }
});