import "./intro.css"
import Me from "../../img/Doom.gif"

const Intro = () => {
    return (
        <div className="i">
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h2 className="i-intro">Hello, My name is</h2>
                    <h1 className="i-name">Tanim Iqbal</h1>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">Web Developer</div>
                            <div className="i-title-item">UI/UX Designer</div>
                            <div className="i-title-item">Photographer</div>
                        </div>
                    </div>
                    <div className="i-desc">
                        I am an aspiring web developer looking to hone my newly aquired skills by working with a team or company that is in need of a highly motivated and eager to learn individual. 
                    </div>
                </div>
            </div>
            <div className="i-right">
                <img src={Me} alt="" className="i-img" />
            </div>
        </div>
    )
}

export default Intro