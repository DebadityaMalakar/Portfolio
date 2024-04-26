
import { Title } from "@solidjs/meta";
import "./about.css"
export default function About() {

    return (
    <>
    <Title>About</Title>

    <div className="bg-mocha-maroon text-center text-white" style={{"margin-top":"16px",height:"auto",padding:"16px",margin:"12px"}}>
        <br/>
        <span style={{"font-weight":"500","font-size":"48px"}}>
            <h1>About Me</h1>
        </span>    
        <br />
        <br />
        <span style={{"font-size":"26px"}}>
            <b>Verily, fair maiden, dost thou seeketh to unravel the mysteries that shroud my humble existence? Pray, shall we venture forth into the depths of revelation?</b> 
            <br />
            <br />
            Translation: Well, my dear, it appears you're quite intrigued by the enigma that is yours truly. Now, shall we delve deeper?
        </span>
        <br />
        <br />
        <br />
        <div>
            <span style={{"font-size":"32px",color:"#111","font-weight":700}}>Chapter I: Void Linux</span>
            <br />
            <br />
            <img  src="/void_bg.png" alt="void" />
            <br />
            <br />
            <span style={{"font-size":"24px"}}>
                Lo, the major Linux distro that graces my dual-booted realm alongside Windows 10 is none other than Void Linux.
                <br/> 
                Aye, it doth resonate with my very essence, for it feels right, as if the celestial spheres themselves did align. 
                <br/>
                And hark! Its init system, a paragon of elegance, bears the name of Runit, deserving of a sonnet sung by troubadours.
                <br/>
                Fear no, for Void’s installation path is smoother than the silken robes of a courtly dame, yet it shares kinship with the venerable Arch. 
                <br/>
                A command-line ballet awaits thee, where thou mayst pirouette and flex thy prowess as much as thy heart desires.
                <br/>
                Verily I declare: I use Void, by the way. 
            </span>
            <br/>
            <br />
            <span style={{"font-size":"24px"}}>
                Translation:
                <br/>
                The major linux distro that I use with my dualboot windows 10 is void linux as it just feels right , and has a superior init system (shoutout to runit).
                <br/>
                It is way easier to install than Arch yet has the same kind of command line based installation.So you could flex it as much as you want.
                <br/>
                I use void btw.
            </span>
        </div>
    </div>
    </>
    )
}
