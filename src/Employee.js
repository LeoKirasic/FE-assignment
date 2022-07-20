import uniqid from 'uniqid';
let data = JSON.parse(localStorage.getItem('data')) || [];
class Employee {
  constructor() {
    this.items = document.querySelector('.items');
    this.render();
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

}
