import { MetaProvider, Title } from "@solidjs/meta";
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense,createEffect,createSignal } from "solid-js";
import "@catppuccin/palette/css/catppuccin.css"
import "./app.css";
export default function App() {
  createEffect(()=>{
    document.body.style.background="var(--ctp-mocha-maroon)"
    document.body.style.height="100vh"
    document.body.style.color="#fff"
    //document.body.style.color="var(--ctp-mocha-base)"
});
const [currentYear] = createSignal(new Date().getFullYear());
  return (
    <>
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
      <Router
        root={props => (
          <MetaProvider>
            <Title>SolidStart - Basic</Title>
            <Suspense>{props.children}</Suspense>
          </MetaProvider>
        )}
      >
        <FileRoutes />
      </Router>
      <div class="bg-mocha-maroon" style={{padding:"6px","font-size":"20px","align-items":"center","text-align":"center"}} uk-sticky="position: bottom">
        © 2023 - {currentYear()} Debaditya . Powered by <a href="https://www.solidjs.com/" target="_blank" rel="noopener">Solidjs</a> and <a href="https://getuikit.com/" target="_blank" rel="noopener">UIkit</a>
      </div>
    </>
  );
}