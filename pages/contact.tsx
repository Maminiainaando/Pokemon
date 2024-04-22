import { UNSTABLE_REVALIDATE_RENAME_ERROR } from 'next/dist/lib/constants';
import React ,{useState,ChangeEvent} from 'react'
import { z, ZodError } from 'zod';
const schema = z.object({
  username: z.string().min(3),
  email: z.string().email(),
  num: z.string().min(4),
  message: z.string(),
});

type FormValues = z.infer<typeof schema>;

const Page= ()=>{
     const [inputValues,setInputValues] =useState<FormValues>({
      username: '',
      email: '',
      num: '',
      message: '',
     });
const [formErrors, setFormErrors] = useState<ZodError | null>(null);
       const handleChange = (
        e: React.ChangeEvent<HTMLInputElement>,
        field: keyof FormValues
      ) => {
        setInputValues({ ...inputValues, [field]: e.target.value });
      }; 
      const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log(inputValues);
      };
      
   return (
     <form onSubmit={handleSubmit}>
         <div>
             <label htmlFor="">Name</label>
             <input
             type="text"
             id="username"
             value={inputValues.username}
             onChange={(e) => handleChange(e, 'username')}
           />
         </div>
         <div>
             <label htmlFor="">Email</label>
             <input
             type="text"
             id="email"
             value={inputValues.email}
             onChange={(e) => handleChange(e, 'email')}
           />
         </div>
         <div>
             <label htmlFor="">Numero</label>
             <input
             type="text"
             id="num"
             value={inputValues.num}
             onChange={(e) => handleChange(e, 'num')}
           />
         </div>
         <div>
             <label htmlFor="">Message</label>
             <input
             type="text"
             id="message"
             value={inputValues.message}
             onChange={(e) => handleChange(e, 'message')}
           />
         </div>
         <button type="submit" onClick={handleSubmit}>Send</button>
     </form>
     
   );
};
 export default Page;