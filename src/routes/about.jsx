import {createEffect} from "solid-js";
import { Title } from "@solidjs/meta";
import "./about.css"
export default function About() {
    createEffect(()=>{
        document.body.style.background="var(--ctp-mocha-maroon)"
        document.body.style.height="100vh"
        document.body.style.color="#fff"
        //document.body.style.color="var(--ctp-mocha-base)"
    })
    return (
    <>
    <Title>Home</Title>
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

    <div className="bg-mocha-maroon text-center text-white" style={{"margin-top":"16px",height:"100vh"}}>
        <br/>
        <span style={{"font-weight":"500","font-size":"24px"}}>
            <h1>About</h1>
        </span>    
    </div>
    </>
    )
}