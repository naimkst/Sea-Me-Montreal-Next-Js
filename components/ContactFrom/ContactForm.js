import React, { useState } from 'react'
import SimpleReactValidator from 'simple-react-validator';


const ContactForm = () => {

    const [forms, setForms] = useState({
        name: '',
        email: '',
        subject: '',
        phone: '',
        message: ''
    });
    const [validator] = useState(new SimpleReactValidator({
        className: 'errorMessage'
    }));
    const changeHandler = e => {
        setForms({ ...forms, [e.target.name]: e.target.value })
        if (validator.allValid()) {
            validator.hideMessages();
        } else {
            validator.showMessages();
        }
    };

    const submitHandler = e => {
        e.preventDefault();
        if (validator.allValid()) {
            validator.hideMessages();
            setForms({
                name: '',
                email: '',
                subject: '',
                phone: '',
                message: ''
            })
        } else {
            validator.showMessages();
        }
    };

    return (
        <form method="post" className="contact-validation-active" onSubmit={(e) => submitHandler(e)} >
            <div className="row align-items-center">
                <div className="col-md-12 col-md-12 col-12">
                    <div className="form-group">
                        <label>NOM</label>
                        <input
                            value={forms.name}
                            type="text"
                            name="name"
                            onBlur={(e) => changeHandler(e)}
                            onChange={(e) => changeHandler(e)}
                            className="form-control"
                            placeholder="NOM , PRÉNOM" />
                        {validator.message('name', forms.name, 'required|alpha_space')}
                    </div>
                </div>
                <div className="col-md-12 col-md-12 col-12">
                    <div className="form-group">
                        <label>COURRIEL</label>
                        <input
                            value={forms.email}
                            type="email"
                            name="email"
                            onBlur={(e) => changeHandler(e)}
                            onChange={(e) => changeHandler(e)}
                            className="form-control"
                            placeholder="COURRIEL" />
                        {validator.message('email', forms.email, 'required|email')}
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="fullwidth form-group">
                        <label>MESSAGE</label>
                        <textarea
                            onBlur={(e) => changeHandler(e)}
                            onChange={(e) => changeHandler(e)}
                            value={forms.message}
                            type="text"
                            name="message"
                            className="form-control"
                            placeholder="MESSAGE">
                        </textarea>
                        {validator.message('message', forms.message, 'required')}
                    </div>
                </div>
                <div className="col-md-5 order-md-1 order-2 col-12">
                    <div className="submit-area">
                        <button type="submit" className="theme-btn">Submit now</button>
                    </div>
                </div>
            </div>
        </form>

    )
}

export default ContactForm;