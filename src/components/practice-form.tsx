"use client"
import { useForm } from "react-hook-form";

const PracticeForm = () => {
const {register} = useForm()    

    return(
    <div>
     <form>
        <label htmlFor="email"
        className="block ">Email</label>
        <input type="email" id="email" placeholder="Enter your email" {...register("email") }/>
      </form>

    </div>
 
    )
}

export default PracticeForm;