import React from "react";
import { useForm } from "../../hooks/useForm";
import "./effects.css";

export const FormWithCustomHook = () => {
  const [formValues, handleInputChange] = useForm({
    name: "",
    email: "",
    password:"",
  });

  const { name, email, password } = formValues;

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formValues)
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>FormWithCustomHook</h1>
      <hr />
      <div className="form-group">
        <input
          type="text"
          name="name"
          placeholder="Tu nombre"
          className="form-control"
          autoComplete="off"
          value={name}
          onChange={handleInputChange}
        />
      </div>

      <div className="form-group">
        <input
          type="text"
          name="email"
          placeholder="Tu Email"
          className="form-control"
          autoComplete="off"
          value={email}
          onChange={handleInputChange}
        />
      </div>

      <div className="form-group">
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="form-control"
          autoComplete="off"
          value={password}
          onChange={handleInputChange}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Guardar
      </button>
      
    </form>
  );
};
