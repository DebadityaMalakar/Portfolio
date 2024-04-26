import {createEffect,createSignal} from "solid-js";
import { Title } from "@solidjs/meta";
import "./index.css"
export default function Index() {
    createEffect(()=>{
        document.body.style.background="var(--ctp-mocha-maroon)"
        document.body.style.height="100vh"
        document.body.style.color="#fff"
        //document.body.style.color="var(--ctp-mocha-base)"
    });
    const [currentYear] = createSignal(new Date().getFullYear());
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

    <div className="bg-mocha-maroon text-center text-white" style={{"margin-top":"24px",height:"auto"}}>
    <img style="height:auto;" alt="DebadityaMalakar's full-sized avatar" src="https://avatars.githubusercontent.com/u/123065261?v=4" width="260" height="260" class="circle-avatar"/>
        <br/>
        <span style={{"font-weight":500 , "font-size":"32px"}}>Debaditya</span>
        <br/>
        <br/>
        <span style={{"font-weight":"500","font-size":"24px"}}>
            sudo sv start coding! 
        </span>
        <br/>
        <br/>
        <span id="socials" style={{"font-size":"48px"}}>
        <a href="https://github.com/DebadityaMalakar" style={{"text-decoration":"none",color:"#000"}}><i style={{"text-decoration":"none"}} class="fa fa-github" aria-hidden="true"></i></a>
        <a href="https://www.instagram.com/debadityamalakar15/" style={{"text-decoration":"none",color:"#000"}}><i class="fa fa-instagram" aria-hidden="true"></i></a>
        </span>
    </div>
    <div class="bg-mocha-maroon" style={{"font-size":"20px","align-items":"center","text-align":"center"}} uk-sticky="position: bottom">
        © 2023 - {currentYear()} Debaditya . Powered by <a href="https://www.solidjs.com/" target="_blank" rel="noopener">Solidjs</a> and <a href="https://getuikit.com/" target="_blank" rel="noopener">UIkit</a>
    </div>
    </>
    )
}