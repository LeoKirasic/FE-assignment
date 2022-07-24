import uniqid from 'uniqid';

let data = JSON.parse(localStorage.getItem('data')) || [];

class Employee {
  constructor() {
    const self = this;
    this.items = document.querySelector('.items');
    this.render();

    document
      .querySelector('.add-button')
      .addEventListener('click', this.create.bind(this));
    document
      .querySelector('.btn-update')
      .addEventListener('click', this.update.bind(this));

    document.addEventListener('click', (event) => {
      if (event.target.classList.contains('btn-delete')) {
        self.remove(event);
        localStorage.setItem('data', JSON.stringify(data));
      }
      if (event.target.classList.contains('btn-edit')) {
        Employee.renderEditForm(event);
      }
    });
  }

  render() {
    this.items.innerHTML = '';

    data.forEach((item) => {
      const list = document.createElement('ul');
      list.classList.add('list');

      this.createDomElements(item.id);
      this.ime.insertAdjacentHTML('afterbegin', item.ime);
      this.prezime.insertAdjacentHTML('afterbegin', item.prezime);
      this.email.insertAdjacentHTML('afterbegin', item.email);
      this.adresa.insertAdjacentHTML('afterbegin', item.adresa);
      this.brojMobitela.insertAdjacentHTML('afterbegin', item.brojMobitela);

      list.appendChild(this.ime);
      list.appendChild(this.prezime);
      list.appendChild(this.email);
      list.appendChild(this.adresa);
      list.appendChild(this.brojMobitela);

      this.items.appendChild(list);
    });
  }

  createDomElements(id) {
    this.ime = document.createElement('li');
    this.prezime = document.createElement('li');
    this.email = document.createElement('li');
    this.adresa = document.createElement('li');
    this.brojMobitela = document.createElement('li');

    this.edit = document.createElement('button');
    this.delete = document.createElement('button');

    this.edit.classList.add('btn-edit');
    this.delete.classList.add('btn-delete');

    this.delete.setAttribute('data-id', id);
    this.edit.setAttribute('data-id', id);

    this.edit.innerHTML = 'Edit';
    this.delete.innerHTML = 'Delete';

    this.brojMobitela.appendChild(this.delete);
    this.brojMobitela.appendChild(this.edit);
  }

  create() {
    const ime = document.querySelector('.ime').value;
    const prezime = document.querySelector('.prezime').value;
    const email = document.querySelector('.email').value;
    const adresa = document.querySelector('.adresa').value;
    const brojMobitela = document.querySelector('.broj-mobitela').value;

    const newItem = {
      id: uniqid(),
      ime,
      prezime,
      email,
      adresa,
      brojMobitela,
    };
    data.push(newItem);
    localStorage.setItem('data', JSON.stringify(data));
    document.querySelector('.items').value = '';
    this.render();
  }

  remove(event) {
    const id = event.target.getAttribute('data-id');

    data = data.filter((item) => {
      if (item.id !== id) {
        return item;
      }
      return 0;
    });
    this.render();
  }

  static renderEditForm(event) {
    const id = event.target.getAttribute('data-id');

    document.querySelector('.edit-popup').classList.remove('hide');
    document.querySelector('.edit-popup').classList.add('show');
    document.querySelector('.btn-update').setAttribute('data-id', id);

    data.forEach((item) => {
      if (item.id === id) {
        document.querySelector('.edit-ime').value = item.ime;
        document.querySelector('.edit-prezime').value = item.prezime;
        document.querySelector('.edit-email').value = item.email;
        document.querySelector('.edit-adresa').value = item.adresa;
        document.querySelector('.edit-broj-mobitela').value = item.brojMobitela;
      }
    });
  }

  update(event) {
    const id = event.target.getAttribute('data-id');
    const editIme = document.querySelector('.edit-ime').value;
    const editPrezime = document.querySelector('.edit-prezime').value;
    const editEmail = document.querySelector('.edit-email').value;
    const editAdresa = document.querySelector('.edit-adresa').value;
    const editBrojMobitela = document.querySelector('.edit-broj-mobitela').value;

    data = data.map((item) => {
      if (item.id === id) {
        item.ime = editIme;
        item.prezime = editPrezime;
        item.email = editEmail;
        item.adresa = editAdresa;
        item.brojMobitela = editBrojMobitela;
      }
      return item;
    });
    document.querySelector('.edit-popup').classList.remove('show');
    document.querySelector('.edit-popup').classList.add('hide');
    localStorage.setItem('data', JSON.stringify(data));
    this.render();
  }
}

export default Employee;
