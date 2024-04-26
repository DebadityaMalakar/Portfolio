import {createEffect,createSignal} from "solid-js";
import { Title } from "@solidjs/meta";
import "./contact.css"

export default function contact(){
    createEffect(()=>{
        document.body.style.background="var(--ctp-mocha-maroon)"
        document.body.style.height="100vh"
        document.body.style.color="#fff"
        //document.body.style.color="var(--ctp-mocha-base)"
    });
    const [currentYear] = createSignal(new Date().getFullYear());
    return (
        <>
        <Title>Contact</Title>
            <nav class="uk-navbar-container bg-mocha-maroon" uk-navbar style={{padding:"6px","margin-top":"0px","padding-top":"0px","margin-left":"8px","margin-bottom":"6px"}}>
                <div class="uk-navbar-left">
                    <ul class="uk-navbar-nav" style={{"font-size":"32px","font-weight":500}}>
                        <li><a  style={{"font-size":"20px","font-weight":500}} href="/" className="uk-navbar-item text-white">Home</a></li>
                        <li><a style={{"font-size":"20px","font-weight":500}} href="/diary" className="uk-navbar-item text-white">Diary</a></li>
                        <li><a  style={{"font-size":"20px","font-weight":500}} className="text-white"  href="/about">About</a></li>
                        <li><a style={{"font-size":"20px","font-weight":500}} className="text-white" href="/contact">Contact</a></li>
                    </ul>
                </div>
            </nav>
            <div className="bg-mocha-maroon text-center text-white" style={{"margin-top":"24px",height:"auto"}}>
                <h1 style={{"font-size":"48px","font-weight":700}}>Contact</h1>
                <h3 style={{"font-size":"24px"}}>Email <i class="fa fa-envelope" aria-hidden="true"></i>: debadityamalakar@outlook.com</h3>
                <h3 style={{"font-size":"24px"}}>INSTAGRAM <i class="fa fa-instagram" aria-hidden="true"></i>: debadityamalakar15</h3>
            </div>
            <div class="bg-mocha-maroon" style={{"font-size":"20px","align-items":"center","text-align":"center"}} uk-sticky="position: bottom">
                © 2023 - {currentYear()} Debaditya . Powered by <a href="https://www.solidjs.com/" target="_blank" rel="noopener">Solidjs</a> and <a href="https://getuikit.com/" target="_blank" rel="noopener">UIkit</a>
            </div>
        </>
    )
};