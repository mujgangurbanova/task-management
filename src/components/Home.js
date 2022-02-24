import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import Form from "./Form/Form"

function Home() {
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
    navigate("/rehber")
  }

  return (
    <Form
      onSubmit={handleSubmit}
      initialValues={initialValues}
      setInitialValues={setInitialValues}
    />
  )
}

export default Home
