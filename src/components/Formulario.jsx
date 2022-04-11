import emailjs from "emailjs-com";
import React from 'react';
import './styles/formulario.css'

export default function ContactUs() {


    function sendEmail(e) {
        e.preventDefault();

    emailjs.sendForm('service_z43g5f8', 'template_seos02q', e.target, 'DHI_IkfKWcJN8q7_K')

        .then((result) => {
            alert("Mensagem enviada com sucesso! 👍");
    
        }, (error) => {
            alert(error.message)
            
        });
        e.target.reset()


    }
    return(
        <div className="con">
            <div className="container21">
                <div className="barra2"></div>
                <h2>Contacto</h2>
                <form onSubmit={sendEmail}>
                        <div >
                            
                            <div >
                                <label>Nombre</label>
                                <input type="text" autoFocus className="form-control" required placeholder="Nombre" name="name"/>
                            </div>
                            <div >
                            <label>Email</label>
                                <input type="email" className="form-control" required placeholder="Su email" name="email"/>
                            </div>

                            <div >
                            <label>Mensaje</label>
                                <textarea id="" cols="30" rows="8" required placeholder="Detalle sus requerimientos o consulta" name="message"></textarea>
                            </div>
                            <div >
                                <input type="submit" className="btn btn-info" value="Enviar mensaje"></input>
                            </div>
                        </div>
                    </form>
            </div>
        </div>
    )
}