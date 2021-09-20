let table = document.createElement('table');
let body= document.querySelector('body');
let button = document.createElement('input');
body.append(table);

for (let i = 1; i <= 3; i++) {
    let tr = document.createElement('tr');

    button.addEventListener('click', function func() {
        let td = document.createElement('td');
        tr.append(td);

        let change = document.createElement('a');
        change.href = '#';
        change.innerHTML = 'change';
        td.append(change);

        change.addEventListener('click', function () {
            let changes = document.querySelectorAll('a');

            for (let change of changes) {
                // tr.classList.add('redColor');
                tr.classList.toggle('greenColor');
            }
        })

        button.removeEventListener('click', func);
    })

    for (let j = 1; j <= 3; j++) {
        let td = document.createElement('td');
        tr.append(td);
    }

    table.append(tr);
}

/* create button */
button.type = 'submit';
button.value = 'add column';

body.append(button);