import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import RehberForm from "./RehberForm"

function Rehber() {
  const [initialValues, setInitialValues] = useState({})
  const navigate = useNavigate()

  useEffect(() => {
    const formData = localStorage.getItem("formData")
    if (formData) {
      setInitialValues(JSON.parse(formData))
    }
  }, [])

  const handleSubmit = () => {
    localStorage.setItem("formData", JSON.stringify(initialValues))
    setInitialValues({})
    navigate("/it")
  }

  return (
    <RehberForm
      onSubmit={handleSubmit}
      initialValues={initialValues}
      setInitialValues={setInitialValues}
    />
  )
}

export default Rehber
