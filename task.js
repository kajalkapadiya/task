document.querySelector('.btn').addEventListener('click', submit);

function submit(e) {
    e.preventDefault();

    const name = document.querySelector('#name').value;

    const obj = {
        email: document.querySelector('#email').value,
        number: document.querySelector('#number').value
    }

    const myobj = JSON.stringify(obj);
    localStorage.setItem(name, myobj);

    // add also after submit
    const info = JSON.parse(localStorage.getItem(name))

    const x = document.createElement('h4');
    x.className = 'h4';
    const nameText = document.createTextNode(name);
    const infoText = document.createTextNode(info);

    x.appendChild(nameText, infoText);

    const submit = document.querySelector('.btn');
    submit.after(x);
}