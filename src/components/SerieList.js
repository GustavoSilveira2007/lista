import React, { useState } from 'react';
import './SerieList.css';

const SerieList = () => {
  const [series, setSeries] = useState([
    { title: 'Série 1', description: 'Descrição da Série 1', year: 2020 },
    { title: 'Série 2', description: 'Descrição da Série 2', year: 2021 },
    { title: 'Série 3', description: 'Descrição da Série 3', year: 2022 },
  ]);

  const [newSerie, setNewSerie] = useState({ title: '', description: '', year: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewSerie({ ...newSerie, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSeries([...series, newSerie]);
    setNewSerie({ title: '', description: '', year: '' });
  };

  return (
    <div className="serie-list-container">
      <form onSubmit={handleSubmit} className="serie-form">
        <input
          type="text"
          name="title"
          placeholder="Título"
          value={newSerie.title}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="description"
          placeholder="Descrição"
          value={newSerie.description}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="year"
          placeholder="Ano"
          value={newSerie.year}
          onChange={handleChange}
          required
        />
        <button type="submit">Adicionar Série</button>
      </form>
      <div className="serie-list">
        {series.map((serie, index) => (
          <div key={index} className="serie-item">
            <h3>{serie.title}</h3>
            <p>{serie.description}</p>
            <span>{serie.year}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SerieList;
