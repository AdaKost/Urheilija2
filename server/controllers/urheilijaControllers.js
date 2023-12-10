const Urheilija = require("../models/Urheilija");

// Testattu postmanilla: OK
exports.getAllUrheilijat = async (req, res, next) => {
  try {
    const [urheilijat, _] = await Urheilija.findAll();

    res.status(200).json({ count: urheilijat.length, urheilijat });
  } catch (error) {
    next(error);
  }

  //res.send("Get urheilijat route");
};

// Testattu postmanilla: OK
exports.createNewUrheilija = async (req, res, next) => {
  try {
    let { etunimi, sukunimi } = req.body;
    let urheilija = new Urheilija(etunimi, sukunimi);

    urheilija = await urheilija.save();

    res.status(201).json({ message: "Urheilija lisätty" });
    //console.log(post);
  } catch (error) {
    next(error);
  }

  //res.send("Create new urheilija route"); // Tällä testattiin aluksi, etta koodi löytää oikeaan paikkaan
};

// Testattu postmanilla: OK; jos ID löytyy, niin urheilijakin löytyy, muuten tulee tyhjä JSON.
exports.getUrheilijaById = async (req, res, next) => {
  try {
    let urheilijaId = req.params.id;

    let [urheilija, _] = await Urheilija.findById(urheilijaId);

    res.status(200).json({ urheilija: urheilija[0] });
  } catch (error) {
    next(error);
  }

  //res.send("Get Urheilija By Id route");
};

// PUT
// Testattu postmanilla: OK; Eli tälle annetaan kenttä ja arvo ja metodi päivittää kentän arvolla.
exports.putUrheilijaById = async (req, res, next) => {
  //console.log("PUT metodi");

  try {
    let urheilijaId = req.params.id;

    let [urheilija, _] = await Urheilija.findById(urheilijaId);
    let { kentta, arvo } = req.body;

    urheilija = await Urheilija.putUrheilijaById(urheilijaId, kentta, arvo);

    res.status(202).json({ message: "Urheilija päivitetty!" });
  } catch (error) {
    next(error);
  }
  //res.send("Put Urheilija By Id route");
};

// Delete
// Testattu postmanilla: OK; poistaa urheilijan ID:llä. Esim. delete localhost:3000/urheilijat/2 poistaa urheilijan ID:llä 2.
exports.deleteUrheilijaById = async (req, res, next) => {
  // console.log("DELETE metodi");

  try {
    let urheilijaId = req.params.id;

    let [urheilija, _] = await Urheilija.findById(urheilijaId);
    //let { title, body } = req.body;

    urehilija = await Urheilija.deleteUrheilijaById(urheilijaId); // Kutsutaan poistometodia

    res.status(203).json({ message: "Urheilija poistettu!" });
  } catch (error) {
    next(error);
  }
  //res.send("Delete Urheilija By Id route");
};
