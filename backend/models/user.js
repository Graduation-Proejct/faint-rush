export default class UserDb {
  constructor(name, email, password, idList, phone, type) {
    this._name = name;
    this._email = email;
    this._password = password;
    this._idList = idList;
    this._phone = phone;
    this._type = type;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }

  get email() {
    return this._email;
  }

  set email(value) {
    this._email = value;
  }

  get password() {
    return this._password;
  }

  set password(value) {
    this._password = value;
  }

  get idList() {
    return this._idList;
  }

  set idList(value) {
    this._idList = value;
  }

  get phone() {
    return this._phone;
  }

  set phone(value) {
    this._phone = value;
  }

  get type() {
    return this._type;
  }

  set type(value) {
    this._type = value;
  }
}
