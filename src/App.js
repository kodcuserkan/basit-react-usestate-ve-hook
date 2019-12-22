import React, { useState } from 'react';
import './App.css';

const App = () => {

  const [people, setPeople] = useState([
    {
      isim: "George",
      soyisim: "Michael"
    },
    {
      isim: "Micheal",
      soyisim: "Jackson"
    }
  ])

  const [person, setPerson] = useState({ isim: '', soyisim: '' });

  const onChangeFonk = (e) => {
    setPerson({ ...person, [e.target.name]: e.target.value });
  }

  const onSubmitFonk = (e) => {
    e.preventDefault();
    if (person.isim.trim() === '' || person.soyisim.trim() === '') return;

    const newPerson = {
      isim: person.isim.trim(),
      soyisim: person.soyisim.trim()
    }


    setPeople([...people, newPerson]);
    setPerson({ isim: "", soyisim: "" });
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h2>Bir Kullanıcı Ekleyin : </h2>
          <hr />
          <form onSubmit={onSubmitFonk}>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                name="isim"
                placeholder="İsim"
                value={person.isim}
                onChange={onChangeFonk} />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                name="soyisim"
                placeholder="Soyisim"
                value={person.soyisim}
                onChange={onChangeFonk} />
            </div>
            <button className="btn btn-warning" type="submit">Ekle</button>
          </form>
        </div>
        <div className="col">
          <h2>Kullanıcılar : </h2>
          <hr />
          {people.map(p => (
            <div key={Math.random() * 121212121}>
              <p>{p.isim} {p.soyisim}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
