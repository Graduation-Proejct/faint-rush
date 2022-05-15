let UserDb=class UserDb {
  constructor(name, email, phone, type, idList, questions, medicalHistory) {
    this._name = name;
    this._email = email;
    this._phone = phone;
    this._type = type;
    this._idList = idList;
    this._questions=questions;
    this._medicalHistory=medicalHistory;
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
  get idList() {
    return this._idList;
  }

  set idList(value) {
    this._idList = value;
  }

  get questions() {
    return this._questions;
  }

  set medicalHistory(value) {
    this._medicalHistory = value;
  }
}
module.exports.UserDb=UserDb;