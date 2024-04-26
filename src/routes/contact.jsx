import {createSignal} from "solid-js";
import { Title } from "@solidjs/meta";
import "./contact.css"

export default function contact(){

    const [currentYear] = createSignal(new Date().getFullYear());
    return (
        <>
        <Title>Contact</Title>
            <div className="bg-mocha-maroon text-center text-white" style={{"margin-top":"24px",height:"auto"}}>
                <h1 style={{"font-size":"48px","font-weight":700}}>Contact</h1>
                <h3 style={{"font-size":"24px"}}>Email <i class="fa fa-envelope" aria-hidden="true"></i>: debadityamalakar@outlook.com</h3>
                <h3 style={{"font-size":"24px"}}>INSTAGRAM <i class="fa fa-instagram" aria-hidden="true"></i>: debadityamalakar15</h3>
            </div>
        </>
    )
};