import { useEffect, useState } from "react";
import SoftwareForm from "./SoftwareForm";

function Software() {
  const [initialValues, setInitialValues] = useState({});

  useEffect(() => {
    const formData = localStorage.getItem("formData");
    if (formData) {
      setInitialValues(JSON.parse(formData));
    }
  }, []);

  const handleSubmit = () => {
    localStorage.setItem("formData", JSON.stringify(initialValues));
    setInitialValues({});
    alert(JSON.stringify(initialValues));
  };

  return (
    <>
      <SoftwareForm
        onSubmit={handleSubmit}
        initialValues={initialValues}
        setInitialValues={setInitialValues}
      />
    </>
  );
}

export default Software;
