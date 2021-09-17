let table = document.querySelector('table');
let button_add_row = document.querySelector('#button_add_row');
let button_add_column = document.querySelector('#button_add_column');

for (let i = 1; i <= 3; i++) {
    let tr = document.createElement('tr');

    for (let j = 1; j <= 3; j++) {
        let td = document.createElement('td');
        tr.appendChild(td);
    }
    table.appendChild(tr);

};

button_add_column.addEventListener('click', function func() {
    let rows = document.querySelectorAll('tr');

    for (let row of rows) {
        let td = document.createElement('td');
        row.appendChild(td);
        button_add_column.removeEventListener('click', func);

        let remove = document.createElement('a');
        remove.href = '#';
        remove.innerHTML = 'remove';
        td.appendChild(remove);

        remove.addEventListener('click', function(event) {
            row.parentElement.removeChild(row);
            event.preventDefault();
        });

    }
});


