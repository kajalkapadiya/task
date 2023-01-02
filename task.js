document.querySelector('.btn').addEventListener('click', submit);

function submit(e) {
    e.preventDefault();

    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const number = document.querySelector('#number').value;

    const obj = {
        name,
        email,
        number
    }

    const myobj = JSON.stringify(obj);
    localStorage.setItem(name, myobj);

    // add also after submit
    const button = document.createElement('button');
    const button1 = document.createElement('button');
    button.className = 'btn btn-danger btn-sm float-right delete';
    button1.className = 'btn btn-primary btn-sm float-right delete';
    button.appendChild(document.createTextNode('delete'));
    button1.appendChild(document.createTextNode('edit'));

    const x = document.createElement('h4');
    x.className = 'h4';
    const nameText = document.createTextNode(name + " " + email + " " + number + " ");

    x.appendChild(nameText);
    x.appendChild(button);
    x.appendChild(button1);

    const submit = document.querySelector('.btn');
    submit.after(x);

    button.onclick = function (e) {
        e.preventDefault();

        localStorage.removeItem(name);
        x.removeChild(nameText);
        x.removeChild(button);
        x.removeChild(button1);
    }
    button1.onclick = function (el){
        el.preventDefault();

        document.querySelector('#name').value = obj.name;
        document.querySelector('#email').value = obj.email;
        document.querySelector('#number').value = obj.number;

        localStorage.removeItem(name);
        x.removeChild(nameText);
        x.removeChild(button);
        x.removeChild(button1);
    }
}