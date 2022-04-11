import React from 'react'



    
import emailjs from 'emailjs-com';
export default class Formulario extends React.Component {
  render() {
      function enviarEmail(e){
          e.preventDefault();

          emailjs.sendForm('service_sgoyhbs', 'template_hxe2mkl', e.target, 'KI-dunL_Ng_VxiRSm')
          .then(function(response) {

             console.log('SUCCESS!', response.status, response.text);

          }, function(error) {
             console.log('FAILED...', error);
          });
      }

    return (

        <div name='contact' >
        <form id="myForm"  className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8'>
        <p className="text-4xl font-bold text-[#023047]">Contact</p>
        </div>
        <input  name='name'  required/>
        <input  type="email" placeholder='Email' name='email' invalid  required/>
        <textarea  name="message" rows="10" placeholder='Message'required></textarea>
        <button>
        LET'S COLLABORATE
        </button>
        </form>
        </div>
    )
        
        
        
}

