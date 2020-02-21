import React from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import "./App.css";

const schema = Yup.object().shape({
  firstName: Yup.string().required("O nome e obrigatorio"),
  nacionalidade: Yup.string().required("A idade e obrigatorio")
});

function App() {
  const { register, handleSubmit, errors } = useForm({
    validationSchema: schema
  });

  const onSubmit = data => {
    console.log(data);
  };

  return (
    <>
      <div className="App">
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>
            First Name
            <input type="text" name="firstName" ref={register} />
          </label>
          {errors.firstName && <p>{errors.firstName.message}</p>}

          <label>
            Age
            <input type="text" name="nacionalidade" ref={register} />
          </label>
          {errors.nacionalidade && <p>{errors.nacionalidade.message}</p>}

          <input type="submit" />
        </form>
      </div>
    </>
  );
}

export default App;
