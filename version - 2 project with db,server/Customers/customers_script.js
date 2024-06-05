const { copyFile } = require("fs");

function gotoHomepage(){
var homeButton = document.getElementById('homepage-btn');
window.location.href = '/home.html';
}
document.addEventListener('DOMContentLoaded', () => {
    showContent('higher');
    fetchUsers('higher');
    fetchUsers('normal');
    fetchUsers('nonTech');
});

function showContent(id) {
    const options = document.querySelectorAll('.sidebar .option');
    options.forEach(option => {
        option.classList.remove('active');
    });

    const contents = document.querySelectorAll('.main-content .content');
    contents.forEach(content => {
        content.classList.remove('active');
    });

    document.getElementById(id).classList.add('active');
    document.getElementById('content-' + id).classList.add('active');
}

function openForm(type) {
    document.getElementById('dataForm-' + type).reset();
    document.getElementById('userId-' + type).value = '';
    document.getElementById('formPopup-' + type).style.display = 'block';
}

function closeForm(type) {
    document.getElementById('formPopup-' + type).style.display = 'none';
}

function handleSubmit(event, type) {
    event.preventDefault();

    const userId = document.getElementById('userId-' + type).value;
    const name = document.getElementById('name-' + type).value;
    const email = document.getElementById('email-' + type).value;
    const date_of_birth = document.getElementById('date_of_birth-' + type).value;
    const Mobile_Number = document.getElementById('Mobile_Number-' + type).value;
    const Account_number = document.getElementById('Account_number-' + type).value;
    const Aadhar_number = document.getElementById('Aadhar_number-' + type).value;
    const Address = document.getElementById('Address-' + type).value;

    const method = userId ? 'PUT' : 'POST';
    const url = userId ? `/update-user/${type}/${userId}` : `/save-data/${type}`;

    fetch(url, {
        method: method,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, date_of_birth, Mobile_Number, Account_number, Aadhar_number, Address })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            fetchUsers(type);
            closeForm(type);
        } else {
            alert('Error saving data');
        }
    });
}

function fetchUsers(type) {
    fetch(`/get-users/${type}`)
        .then(response => response.json())
        .then(users => {
            const dataTable = document.getElementById('dataTable-' + type).querySelector('tbody');
            dataTable.innerHTML = '';
            users.forEach(user => {
                const tr = document.createElement('tr');
                tr.innerHTML = `
                    <td>${user.id}</td>
                    <td>${user.name}</td>
                    <td>${user.email}</td>
                    <td>${user.date_of_birthl}</td>
                    <td>${user.Mobile_Number}</td>
                    <td>${user.Account_number}</td>
                    <td>${user.Aadhar_number}</td>
                    <td>${user.Address}</td>
                    <td>
                        <button onclick="openForm('${type}'); populateForm('${type}', ${user.id}, 
                        '${user.name}', '${user.email}', '${user.date_of_birthl}', '${user.Mobile_Number}', '${user.Account_number}',
                        '${user.Aadhar_number}', '${user.Address}')">Edit</button>
                        <button onclick="deleteUser('${type}', ${user.id})">Delete</button>
                    </td>
                `;
                dataTable.appendChild(tr);
            });
        });
}

function populateForm(type, id, name, email, date_of_birth, Mobile_number, Account_number, Aadhar_number, Address) {
    document.getElementById('userId-' + type).value = id;
    document.getElementById('name-' + type).value = name;
    document.getElementById('email-' + type).value = email;
    document.getElementById('date_of_birth-' + type).value = date_of_birth;
    document.getElementById('Mobile_number-' + type).value = Mobile_number;
    document.getElementById('Account_numberemail-' + type).value = Account_number;
    document.getElementById('Aadhar_number-' + type).value = Aadhar_number;
    document.getElementById('Address-' + type).value = Address;
}

function deleteUser(type, id) {
    if (confirm('Are you sure you want to delete this user?')) {
        fetch(`/delete-user/${type}/${id}`, {
            method: 'DELETE'
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                fetchUsers(type);
            } else {
                alert('Error deleting user');
            }
        });
    }
}


// copyFile
// function gotoHomepage(){
//     var homeButton = document.getElementById('homepage-btn');
//     window.location.href = '/home.html';
//     }
//     document.addEventListener('DOMContentLoaded', () => {
//         showContent('higher');
//         fetchUsers('higher');
//         fetchUsers('normal');
//         fetchUsers('nonTech');
//     });
    
//     function showContent(id) {
//         const options = document.querySelectorAll('.sidebar .option');
//         options.forEach(option => {
//             option.classList.remove('active');
//         });
    
//         const contents = document.querySelectorAll('.main-content .content');
//         contents.forEach(content => {
//             content.classList.remove('active');
//         });
    
//         document.getElementById(id).classList.add('active');
//         document.getElementById('content-' + id).classList.add('active');
//     }
    
//     function openForm(type) {
//         document.getElementById('dataForm-' + type).reset();
//         document.getElementById('userId-' + type).value = '';
//         document.getElementById('formPopup-' + type).style.display = 'block';
//     }
    
//     function closeForm(type) {
//         document.getElementById('formPopup-' + type).style.display = 'none';
//     }
    
//     function handleSubmit(event, type) {
//         event.preventDefault();
    
//         const userId = document.getElementById('userId-' + type).value;
//         const name = document.getElementById('name-' + type).value;
//         const email = document.getElementById('email-' + type).value;
    
//         const method = userId ? 'PUT' : 'POST';
//         const url = userId ? `/update-user/${type}/${userId}` : `/save-data/${type}`;
    
//         fetch(url, {
//             method: method,
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({ name, email })
//         })
//         .then(response => response.json())
//         .then(data => {
//             if (data.success) {
//                 fetchUsers(type);
//                 closeForm(type);
//             } else {
//                 alert('Error saving data');
//             }
//         });
//     }
    
//     function fetchUsers(type) {
//         fetch(`/get-users/${type}`)
//             .then(response => response.json())
//             .then(users => {
//                 const dataTable = document.getElementById('dataTable-' + type).querySelector('tbody');
//                 dataTable.innerHTML = '';
//                 users.forEach(user => {
//                     const tr = document.createElement('tr');
//                     tr.innerHTML = `
//                         <td>${user.id}</td>
//                         <td>${user.name}</td>
//                         <td>${user.email}</td>
//                         <td>
//                             <button onclick="openForm('${type}'); populateForm('${type}', ${user.id}, '${user.name}', '${user.email}')">Edit</button>
//                             <button onclick="deleteUser('${type}', ${user.id})">Delete</button>
//                         </td>
//                     `;
//                     dataTable.appendChild(tr);
//                 });
//             });
//     }
    
//     function populateForm(type, id, name, email) {
//         document.getElementById('userId-' + type).value = id;
//         document.getElementById('name-' + type).value = name;
//         document.getElementById('email-' + type).value = email;
//     }
    
//     function deleteUser(type, id) {
//         if (confirm('Are you sure you want to delete this user?')) {
//             fetch(`/delete-user/${type}/${id}`, {
//                 method: 'DELETE'
//             })
//             .then(response => response.json())
//             .then(data => {
//                 if (data.success) {
//                     fetchUsers(type);
//                 } else {
//                     alert('Error deleting user');
//                 }
//             });
//         }
//     }
    