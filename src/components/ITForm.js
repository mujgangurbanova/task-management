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
          <h1>  Qeyd: {initialValues.rehberQeyd}</h1>
          <h1> Tələbin növü: {initialValues.groupe}</h1>
          <h1> Dəyişiklik və ya xəta: {initialValues.changes}</h1>
          <h1>  Əvvəlki Prioritet: {initialValues.grouped}</h1>
          <h1>  Yeni Prioritet: {initialValues.rehberPrioritet}</h1>
        </div>

        <div className="form-group">
      <h1>IT Departament</h1>
        <form onSubmit={onFormSubmit}>
          <div className="teleb">
            <textarea
              className="text-area"
              placeholder="Qeyd"
              name="qeyd"
              id="qeyd"
              defaultValue={initialValues.qeyd}
              value={initialValues.qeyd}
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
              <InputLabel htmlFor="prioritet">Prioritet</InputLabel>
              <Select
                native
                name="prioritet"
                defaultValue={initialValues.prioritet}
                value={initialValues.prioritet}
                id="prioritet"
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
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel htmlFor="grouped">Proqramin yazılma növü</InputLabel>
              <Select
                native
                name="type"
                defaultValue={initialValues.type}
                value={initialValues.type}
                id="writing-type"
                onChange={(e) =>
                  setInitialValues((oldData) => ({
                    ...oldData,
                    [e.target.name]: e.target.value,
                  }))
                }
              >
                <option aria-label="None" value="" />
                <option value="Proqram təminat şöbəsi tərəfindən yazılacaq">Proqram təminat şöbəsi tərəfindən yazılacaq</option>
                <option value="Hazır paket alınacaq">Hazır paket alınacaq</option>
                <option value="Outsource ediləcək">Outsource ediləcək</option>
              </Select>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel htmlFor="end">Sonlandıra bilər</InputLabel>
              <Select
                native
                name="end"
                defaultValue={initialValues.end}
                value={initialValues.end}
                id="end"
                onChange={(e) =>
                  setInitialValues((oldData) => ({
                    ...oldData,
                    [e.target.name]: e.target.value,
                  }))
                }
              >
                <option aria-label="None" value="" />
                <option value="Biznes tələblərə uyğun deyil">Biznes tələblərə uyğun deyil</option>
                <option value="Texniki olaraq uyğun deyil">Texniki olaraq uyğun deyil</option>
                <option value="Qeyd edilən xəta sistemdə mövcud deyil">Qeyd edilən xəta sistemdə mövcud deyil</option>
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
