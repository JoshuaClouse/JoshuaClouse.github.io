const AboutMe = (props) => {
    return(
        <div id={"bio"} className={"subheading fade-in aboutMe"}>
            <h1>About Me</h1>
            <hr></hr>
            <div>
                <p>
                    Depending on the context, I like to describe myself as either a software engineer or musician. I have always found myself working
                    in the software realm. From my start at UC Santa Cruz where I got my Bachelors in Game Development, to my current job as a full stack
                    developer at Veeva Systems, I have had a large variety of developing experiences. Each one has given me a different perspective and
                    insight into a multitude of styles and environemnts. It definitely keeps me on my toes and keeps me adaptable.
                    <br></br>
                    <br></br>
                    When I'm not programming, I'm a gigging musician for <a href="https://movingvanband.com/" target="_blank">Moving Van</a> where I play guitar.
                    We play all around the Bay Area and are available for booking. In my free time I try and exercise. I enjoy 
                    houseplants and keep my house pretty green. In the winters I take a couple weekends up at Tahoe to snowboard. I also can appreciate
                    a good video game.
                    <br></br>
                    <br></br>
                    Feel free to contact me through my Linkedin or my email <a 
                    href={`mailto:${"JoshMClouse@Gmail.com"}`}
                    >
                    JoshMClouse@gmail.com
                    </a>. You can find my professional resume below. Thanks for visiting.
                </p>
            </div>
        </div>
    );
}

export default AboutMe;