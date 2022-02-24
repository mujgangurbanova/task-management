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
        <h1> Əvvəlki Qeyd: {initialValues.rehberQeyd}</h1>
        <h1> Yeni Qeyd: {initialValues.qeyd}</h1>
        <h1> Tələbin növü: {initialValues.groupe}</h1>
        <h1> Dəyişiklik və ya xəta: {initialValues.changes}</h1>
        <h1> Əvvəlki Prioritet: {initialValues.rehberPrioritet}</h1>
        <h1> Yeni Prioritet: {initialValues.prioritet}</h1>
      </div>

      <div className="form-group">
        <h1>Proqram təminat şöbəsi</h1>
        <form onSubmit={onFormSubmit}>
          <div className="teleb last">
            <input
              type="number"
              className="number-input"
              name="number"
              defaultValue={initialValues.number}
              value={initialValues.number}
              onChange={(e) =>
                setInitialValues((oldData) => ({
                  ...oldData,
                  [e.target.name]: e.target.value,
                }))
              }
            />
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel htmlFor="grouped">Müddəti</InputLabel>
              <Select
                native
                name="time"
                defaultValue={initialValues.time}
                value={initialValues.time}
                id="time"
                label="İcra müddəti"
                onChange={(e) =>
                  setInitialValues((oldData) => ({
                    ...oldData,
                    [e.target.name]: e.target.value,
                  }))
                }
              >
                <option aria-label="None" value="" />
                <option value="gün">Gün</option>
                <option value="ay">Ay</option>
                <option value="saat">Saat</option>
              </Select>
            </FormControl>
          </div>
          <div className="xeta">
            <input
              type="date"
              name="date"
              defaultValue={initialValues.date}
              value={initialValues.date}
              onChange={(e) =>
                setInitialValues((oldData) => ({
                  ...oldData,
                  [e.target.name]: e.target.value,
                }))
              }
            />
            <input
              type="text"
              placeholder="Məsul şəxs"
              name="text"
              defaultValue={initialValues.text}
              value={initialValues.text}
              onChange={(e) =>
                setInitialValues((oldData) => ({
                  ...oldData,
                  [e.target.name]: e.target.value,
                }))
              }
            />
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel htmlFor="end">Task Status</InputLabel>
              <Select
                native
                name="status"
                defaultValue={initialValues.status}
                value={initialValues.status}
                id="status"
                onChange={(e) =>
                  setInitialValues((oldData) => ({
                    ...oldData,
                    [e.target.name]: e.target.value,
                  }))
                }
              >
                <option aria-label="None" value="" />
                <option value="Backlog">Backlog</option>
                <option value="Todo">Todo </option>
                <option value="İnprogress">İnprogress</option>
                <option value="Testing">Testing</option>
                <option value="Done">Done</option>
                <option value="Tələb edən şəxsdən məlumat gözlənilir">
                  Tələb edən şəxsdən məlumat gözlənilir
                </option>
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
