import emailjs from "emailjs-com";
import React from 'react';
import './styles/formulario.css'

export default function ContactUs() {


    function sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm('service_z43g5f8', 'template_seos02q', e.target, 'DHI_IkfKWcJN8q7_K')
        .then((result) => {
            alert("Mensaje enviado con exito! 👍");
    
        }, (error) => {
            alert(error.message)
            
        });
        e.target.reset()


    }
    return(
        <div>
            <div className="containerr44">
                <h2 className="titl">Contacto</h2>
                    <form onSubmit={sendEmail}>
                        <div className="row pt-5 mx-auto">
                            
                            <div className="col-lg-8 col-sm-12 form-group mx-auto ">
                                <label>Nombre</label>
                                <input type="text" autoFocus className="form-control  bg-dark"  required placeholder="nombre" name="name"/>
                            </div>
                            <div className="col-lg-8 col-sm-12 form-group pt-1 mx-auto ">
                            <label>Email</label>
                                <input type="email" className="form-control  bg-dark" required placeholder="Su email" name="email"/>
                            </div>

                            <div className="col-lg-8 col-sm-12 form-group pt-1 mx-auto ">
                            <label >Mensaje</label>
                                <textarea className="form-control  bg-dark" id="" cols="3" rows="8" required placeholder="puede dar una descripcion" name="message"></textarea>
                            </div>
                            <div className="col-lg-8 col-sm-12 pt-3 mx-auto ">
                                <input type="submit" className="btn btn-secondary " value="Enviar mensaje"></input>
                            </div>
                        </div>
                    </form>
            </div>
        </div>
    )
}