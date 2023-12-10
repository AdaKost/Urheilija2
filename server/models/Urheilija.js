const db = require("../config/db");

class Urheilija {
  constructor(etunimi, sukunimi) {
    this.etunimi = etunimi;
    this.sukunimi = sukunimi;
  }

  save() {
    let sql = `
        INSERT INTO urheilijat(
            etunimi,
            sukunimi
        )
        VALUES(
            '${this.etunimi}',
            '${this.sukunimi}'
        )
        `;

    //const [newPost, _] = db.execute(sql);
    return db.execute(sql);

    //return newPost;
  }

  static findAll() {
    let sql = "SELECT * FROM urheilijat;";

    return db.execute(sql);
  }

  // Haku ID:llä
  static findById(id) {
    let sql = `SELECT * FROM urheilijat WHERE id = ${id};`;

    return db.execute(sql);
  }

  // Haku nimellä
  static findByName(etunimi, sukunimi) {
    let sql = `SELECT * FROM urheilijat WHERE etunimi = ${etunimi} AND sukunimi = ${sukunimi};`;
  }

  // OMA metodi kentän arvojen päivittämiseen
  static putUrheilijaById(id, kentta, arvo) {
    let sql = `UPDATE urheilijat
    SET ${kentta}= ${arvo}
    WHERE id = ${id};`;

    return db.execute(sql);
  }

  // OMA metodi delete-toiminnon toteutukseen
  static deleteUrheilijaById(id) {
    let sql = `DELETE FROM urheilijat
    WHERE id = ${id};`;

    return db.execute(sql);
  }
}

module.exports = Urheilija;
