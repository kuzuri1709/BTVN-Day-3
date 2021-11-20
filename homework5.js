// fetch('https://6190932df6bf450017484c2b.mockapi.io/api/Test', {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//         name: 'User 1'
//     })
// })
var fetchData;
var editSubmitBtn = document.getElementById('editSubmit');
const showList = () => {
    let get = fetch('https://6190932df6bf450017484c2b.mockapi.io/api/Test')
        .then(res => {
            return res.json()
        })
        .then(data => {
            fetchData = [...data];
            console.log(data);

            let array = [];
            for (let i of fetchData) {
                let html = `<tr>
                    <td>${i.name}</td>
                    <td>${i.description}</td>
                    <td width="15%"><div class="edit">Edit</div></td>
                    <td ><div class="delete">Delete</div></td>
                </tr>`

                array.push(html);
            }
            let html = `<tr>
                    <th width="20%">Name of book</th>
                    <th width="50%">Description</th>
                </tr>`
            for (let i of array) {
                html += i;
            }
            table.innerHTML = html;
            editBtn = document.getElementsByClassName('edit');
            deleteBtn = document.getElementsByClassName('delete');
            for (let i = 0; i < deleteBtn.length; i++) {
                deleteBtn[i].addEventListener('click', () => {
                    console.log('done');
                    deleteItem(i);
                    setTimeout(() => {
                        showList();
                    }, 1000)
                })

            }
            for (let i = 0; i < editBtn.length; i++) {
                editBtn[i].addEventListener('click', () => {
                    console.log('done edit');
                    editItemChoose(i);
                    
                })
            }
        })
        .catch(error => console.log(error))
}

showList();

var table = document.getElementById('bookList');
var editBtn = document.getElementsByClassName('edit');
var deleteBtn = document.getElementsByClassName('delete');
var sendArray = {};
var editBox = document.getElementById('editBox');
var editedContent = document.getElementsByClassName('changing');



const form = document.getElementsByClassName('info')
const submitBtn = form[2]
submitBtn.addEventListener('click', (e) => {
    e.preventDefault();

    let name = form[0].value;
    let description = form[1].textContent;

    if (name != "" && description != "") {
        console.log(name);
        console.log(description);
        postBook(name, description);
        setTimeout(() => {
            showList();
        }, 1000)
    } else {
        alert('Check your name and description!');
    }
})

const postBook = (name, description) => {
    let send = fetch('https://6190932df6bf450017484c2b.mockapi.io/api/Test', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            description: description,
        })
    })

    console.log(send);
}

const deleteItem = (n) => {
    fetch(`https://6190932df6bf450017484c2b.mockapi.io/api/Test/${fetchData[n].id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
    })
}

const editItemChoose = (n) => {
    editBox.style.visibility = 'visible';
    console.log(editBtn);
    editSubmitBtn.addEventListener('click', (e) => {
        e.preventDefault();
        editItem(n);
        // window.location.reload();
    })
}

const editItem = (n) => {
    if (editedContent[0].textContent != "" && editedContent[1].textContent != "") {
        fetch(`https://6190932df6bf450017484c2b.mockapi.io/api/Test/${fetchData[n].id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: editedContent[0].textContent,
                description: editedContent[1].textContent,
            })
        })
        editBox.style.visibility = 'hidden';
        setTimeout(() => {
            showList();
        }, 1000)
    } else {
        alert("No data!")
    }
}