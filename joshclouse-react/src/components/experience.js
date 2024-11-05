import Entry from "./entry.js"
import veevaImg from "../assets/veeva.png"

const Experience = (props) => {
    return(
        <section id="experience" className="subheading">
            <h1>Experience</h1>
            <hr></hr>
            <Entry title={"Veeva"} date={"05/21 - Current"} imgPath={veevaImg} content={VEEVA_EXPERIENCE}></Entry>
        </section>
    );
}

const VEEVA_EXPERIENCE = 'Veeva is a web application that provides document management services for the life science industry. I work as part of the Vault Reporting team where we provide users the ability to sort, filter, and organize their data into simplified "at a glance" views. I work as a full stack engineer where we leverage Java, MySql, and Solr for our backend, as well as Javascript, Jquery, and React for our frotend.'

export default Experience;