import React,{useState} from "react";


const EmployeeForm=()=>{
    const [formData,setFormData]=useState({

    })

    const handleChange=(e)=>{
        const inputName= e.target.name
        setFormData({
            ...formData,
            [inputName]: e.target.value
        })
    }

    const handleSubmit=(e)=>{
        console.log(formData);
        EmployesSubmit(formData)
        
    }
    const EmployesSubmit = async(formData)=>{
        try {
            let res = await fetch("http://localhost:3000/EmployeeDetails",{
                method:"POST",
                headers:{"content-type":"application/json"},
                body:JSON.stringify(formData)
            }) 
            let data = await res.json()
            console.log(data)
         //    handleSubmit(data)
        } catch (error) {
            console.log(error);
            
        }

     }


return(
    <>
    <div >
       <form onSubmit={handleSubmit}>
        {/* <div> */}
           <div >
               <label>User_Name</label>
               <input type="text" name="name" onChange={handleChange} />
           </div>
           <div >
               <label>Age</label>
               <input type="Number" name="Age" onChange={handleChange} />
           </div>
           <div >
               <label>Address</label>
              <textarea name="Address" placeholder="Enter_Address_Here"  cols="30" rows="10" onChange={handleChange}/>
           </div>
           <div >
              <label>Department</label>
              <select name="Department"onChange={handleChange} >
                <option >Department</option>
                 <option  >Marketing</option> 
                  <option  >Accounting</option>
                  <option  >Book</option>
              </select>
           </div>
           <div >
               <label htmlFor="">Salary</label>
               <input type="Number" name="Salary" onChange={handleChange} />
           </div>
           <div >
               <label htmlFor="">marital state</label>
               <input type="checkbox"  name="marital_state" id="" onChange={handleChange} />
           </div>
           <div>
           <input  type="submit" value="Submit"/>
           </div>
             

        {/* </div> */}
       </form>
       </div>
    </>
    
    
)

}
export default EmployeeForm