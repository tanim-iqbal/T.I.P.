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
                    <br></br>
                    <div className="i-desc">
                      I am web developer/artist here to make your projects come to life through strong visuals and unique user experiences.
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