import { useState } from 'react'
import './App.css'

const Form: React.FC = () => {
  const [formData, setFormData] = useState({
    nome: '',
    cpf: '',
    telefone: '',
    email: '',
    valorGasto: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você pode enviar os dados do cliente para onde desejar
    console.log('Dados do cliente:', formData);
  };

  return (
    <div >
      <form onSubmit={handleSubmit}>
        <div>
        <h2>Formulário do Cliente</h2>
          <label>Nome:</label>
          <input
            type="text"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>CPF:</label>
          <input
            type="text"
            name="cpf"
            value={formData.cpf}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Número de Telefone:</label>
          <input
            type="text"
            name="telefone"
            value={formData.telefone}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>E-mail:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Valor Gasto na Compra:</label>
          <input
            type="text"
            name="valorGasto"
            value={formData.valorGasto}
            onChange={handleChange}
            required
          />
        </div>
        <button id="btt" type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Form;