import React, { useState } from 'react';

const NewContact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // A lógica para enviar a mensagem pode ser adicionada aqui
    console.log(formData);
  };

  return (
    <div>
      <h1>Contato</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nome:</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="email">E-mail:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="message">Mensagem:</label>
          <textarea id="message" name="message" value={formData.message} onChange={handleChange} required></textarea>
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default NewContact;
