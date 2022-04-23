import "./intro.css"

const Intro = () => {
    return (
        <div className="i">
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h2 className="i-intro">Hello, My name is</h2>
                    <h1 className="i-name">Tanim Iqbal</h1>
                    <i className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">Web Developer</div>
                            <div className="i-title-item">Photographer</div>
                            <div className="i-title-item">UI/UX Designer</div>
                        </div>
                    </i>
                </div>
            </div>
            <div className="i-right">right</div>
        </div>
    )
}

export default Intro