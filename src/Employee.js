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
