let UserDb = class UserDb {
  constructor(
    _name,
    _email,
    _phone,
    _type,
    _idList,
    _questions,
    _medicalHistory
  ) {
    this.name = _name;
    this.email = _email;
    this.phone = _phone;
    this.type = _type;
    this.idList = _idList;
    this.questions = _questions;
    this.medicalHistory = _medicalHistory;
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
  set questions(value) {
    this._questions = value;
  }
  get medicalHistory() {
    return this._medicalHistory;
  }
  set medicalHistory(value) {
    this._medicalHistory = value;
  }
};
module.exports.UserDb = UserDb;
