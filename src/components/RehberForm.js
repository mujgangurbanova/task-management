import React from "react";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";

const Form = ({ onSubmit, initialValues, setInitialValues }) => {
  const onFormSubmit = (event) => {
    event.preventDefault();
    onSubmit();
  };

  return (
    <>
        <div className="informations">
          <h1> Tələbin Adı: {initialValues.name}</h1>
          <h1> Açıqlama: {initialValues.description}</h1>
          <h1> Tələbin növü: {initialValues.groupe}</h1>
          <h1> Dəyişiklik və ya xəta: {initialValues.changes}</h1>
          <h1> Prioritet: {initialValues.grouped}</h1>
        </div>

        <div className="form-group">
      <h1>Üst Rəhbər</h1>
        <form onSubmit={onFormSubmit}>
          <div className="teleb">
            <textarea
              className="text-area"
              placeholder="Qeyd"
              name="rehberQeyd"
              id="rehberQeyd"
              defaultValue={initialValues.rehberQeyd}
              value={initialValues.rehberQeyd}
              onChange={(e) =>
                setInitialValues((oldData) => ({
                  ...oldData,
                  [e.target.name]: e.target.value,
                }))
              }
            ></textarea>
          </div>
          <div className="xeta">
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel htmlFor="grouped">Prioritet</InputLabel>
              <Select
                native
                name="rehberPrioritet"
                defaultValue={initialValues.rehberPrioritet}
                value={initialValues.rehberPrioritet}
                id="rehberPrioritet"
                label="Prioritet"
                onChange={(e) =>
                  setInitialValues((oldData) => ({
                    ...oldData,
                    [e.target.name]: e.target.value,
                  }))
                }
              >
                <option aria-label="None" value="" />
                <option value="low">Low</option>
                <option value="normal">Normal</option>
                <option value="high">High</option>
              </Select>
            </FormControl>
            <button className="send" type="submit">
              Send
            </button>
          </div>
        </form>
        </div>
    </>
  );
};

export default Form;
