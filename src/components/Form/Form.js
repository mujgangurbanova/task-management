import React from "react";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import "./Form.css";

const Form = ({ onSubmit, initialValues, setInitialValues }) => {
  const onFormSubmit = (event) => {
    event.preventDefault();
    onSubmit();
  };

  return (
    <>
      <div className="form-group">
        <h1>Tələb daxil edən şəxsin daxil edəcəyi məlumatlar</h1>
        <form onSubmit={onFormSubmit}>
          <div className="teleb">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Tələbin adı"
              defaultValue={initialValues.name}
              value={initialValues.name}
              onChange={(e) =>
                setInitialValues((oldData) => ({
                  ...oldData,
                  [e.target.name]: e.target.value,
                }))
              }
            />
            <textarea
              className="text-area"
              placeholder="Açıqlama"
              name="description"
              id="description"
              defaultValue={initialValues.description}
              value={initialValues.description}
              onChange={(e) =>
                setInitialValues((oldData) => ({
                  ...oldData,
                  [e.target.name]: e.target.value,
                }))
              }
            ></textarea>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel htmlFor="groupe">Tələbin növü</InputLabel>
              <Select
                native
                name="groupe"
                defaultValue={initialValues.groupe}
                value={initialValues.groupe}
                id="groupe"
                label="Tələbin növü"
                onChange={(e) =>
                  setInitialValues((oldData) => ({
                    ...oldData,
                    [e.target.name]: e.target.value,
                  }))
                }
              >
                <option aria-label="None" value="" />
                <optgroup label="1">
                  <option value="istek">Istək</option>
                  <option value="yeni istek">Yeni istək</option>
                  <option value="deyisiklik">Dəyişiklik</option>
                </optgroup>
                <optgroup label="2">
                  <option value="xeta">Xəta</option>
                </optgroup>
              </Select>
            </FormControl>
            <input
              type="text"
              name="changes"
              id="changes"
              placeholder="Dəyişiklik və ya xəta olan proqram adları"
              value={initialValues.changes}
              onChange={(e) =>
                setInitialValues((oldData) => ({
                  ...oldData,
                  [e.target.name]: e.target.value,
                }))
              }
            />
          </div>
          <div className="xeta">
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel htmlFor="grouped">Prioritet</InputLabel>
              <Select
                native
                name="grouped"
                defaultValue={initialValues.grouped}
                value={initialValues.grouped}
                id="grouped"
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
