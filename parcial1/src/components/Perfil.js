import React from "react";
import { useNavigate } from "react-router-dom";
import { Alert } from "bootstrap";
import { useEffect, useState } from "react";
import { FormattedMessage } from "react-intl";


function Perfil(){
    const [email, setEmail] = useState({ email: "", valid: false });
    const [password, setPassword] = useState({ password: "", valid: false });
    const [url, setUrl] = useState({ show: false, message: "" });
    const [descripcion, setDescripcion] = useState({ email: "", password: "" });
    let navigate = useNavigate();

    const handleEmailChange = (e) => {
        setEmail({ email: e.target.value, valid: e.target.value.length > 5});
    };

    const handlePasswordChange = (e) => {
        setPassword({ password: e.target.value, valid: e.target.value.length > 5});
    };

    const handUrlChange = (e) => {
        setUrl({ url: e.target.value, message: e.target.value.length > 5 });
    }
    const handleDescripcionChange = (e) => {
        setDescripcion({ descripcion: e.target.value, password: e.target.value.length > 5 });
    }



    const handleSubmit = (e) => {
        e.preventDefault();
        if (email.valid && password.valid && url.valid && descripcion.valid) {
            navigate("/home");
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">UserName</label>
                    <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Enter UserName"
                        value={email.email}
                        onChange={handleEmailChange}
                    />{!email.valid && <div className="text-danger">Invalid password format</div>}
                    
                </div>{!password.valid && <div className="text-danger">Invalid password format</div>}
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Nombre</label>
                    <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="Nombre"
                        value={password.password}
                        onChange={handlePasswordChange}
                    />
                </div>{!password.valid && <div className="text-danger">Invalid password format</div>}
                <div className="form-group">
                    <label htmlFor="exampleInputUrl">Url</label>
                    <input
                        type="url"
                        className="form-control"
                        id="exampleInputUrl"
                        placeholder="Url"
                        value={url.url}
                        onChange={handUrlChange}
                    />
                </div>{!url.valid && <div className="text-danger">Invalid password format</div>}
                <div className="form-group">
                    <label htmlFor="exampleInputDescripcion">Descripcion</label>
                    <input
                        type="text"
                        className="form-control"
                        id="exampleInputDescripcion"
                        placeholder="Descripcion"
                        value={descripcion.descripcion}
                        onChange={handleDescripcionChange}
                    />
                </div>{!descripcion.valid && <div className="text-danger">Invalid password format</div>}
                
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
        </div>
    )
};
export default Perfil;