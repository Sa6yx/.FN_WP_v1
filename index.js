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
                            <td class="${order.shipping === 'Declined'? 'danger': order.shipping === 'pending'? 'warning': 'primary'}">${order.shipping}</td>
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