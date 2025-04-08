import React from 'react';
import Input from './Input';
import PropagateLoader from "react-spinners/PropagateLoader";
import { NavLink } from 'react-router-dom';
import Success from './Success';
import './CallForm.css'
function CallForm({ sendHandler, inputHandler, validators_name, validators_phone, isLoading, isValid, form_title, success }) {
    return (
        <div>{!success ?
            <>
                <h2 className="call_form_title">{form_title}</h2>
                <form id="CallForm" name="CallForm" method="post" onSubmit={sendHandler}
                    className='call_form'>
                    <Input className='call_form_input' id="name" element="input" type="name" placeholder={'Adınızı yazınız'} validators={validators_name} onInput={inputHandler} label={"Ad-Soyad"} />
                    <Input className='call_form_input' id="phone" element="input" type="text" placeholder={'Telefon numaranız'} validators={validators_phone} onInput={inputHandler} label={"Telefon"} />
                    <div className={`call_modal_btn_wrapper ${isValid ? "" : "call_modal_btn_wrapper_disabled"}`}>
                        <button type="submit"
                            className="call_form_btn" disabled={!isValid}
                        >
                            {isLoading ? <PropagateLoader color={'white'} loading={true} size={4} /> : "Gönder"}
                        </button>
                    </div>
                </form>
                <div >
                    <p className="call_form_policy">"Gönder" butonuna tıklayarak <NavLink to='/' className="call_form_policy_link"> kişisel verilerinizin</NavLink>  işlenmesine onay vermiş olursunuz.</p>
                </div>
            </>
            :
            <Success />
        }
        </div>
    );
}

export default CallForm;