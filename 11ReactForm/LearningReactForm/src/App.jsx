import './App.css'
import { useForm } from "react-hook-form"

function App() {
  const { register, handleSubmit, watch, formState: { errors, isSubmitting } } = useForm();

  async function onSubmit(data) {
    // Simulating the API Call
    await new Promise((resolve) => setTimeout(resolve, 5000))
    console.log("Submitting the Form", data);
  }


  return (
    <form action="" onSubmit={handleSubmit(onSubmit)}>
      <div>
        {errors.firstName && <span className='err-msg'>{errors.firstName.message}<br /></span>}
        <label >First Name</label>
        <input
          type="text"
          defaultValue=""
          className={errors.firstName ? "input-error" : ""}
          {...register("firstName",
            {
              required: true,
              minLength: { value: 3, message: "Minimum length is 3" },
              maxLength: { value: 8, message: "Maximum length is 8" },
            })} />


      </div>
      <br />
      <div>
        <label >Middle Name</label>
        <input type="text" defaultValue="" {...register("middleName")} />

      </div>
      <br />
      <div>
        <label>Last Name</label>
        <input
          className={errors.lastName ? "input-error" : ""}
          {...register("lastName",
            {
              required: true,
              pattern: {
                value: /^[A-Za-z]+$/i,
                message: "Last name is not as per the Rules"
              }
            })
          } />
        {errors.lastName && <p className='err-msg'>{errors.lastName.message}</p>}
        <br />
      </div>
      <input type="submit" 
      disabled={isSubmitting}
      value={isSubmitting?"Submitting":"Submit"}
      />
    </form>
  )
}

export default App
