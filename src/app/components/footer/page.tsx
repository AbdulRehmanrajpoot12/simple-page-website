import cssStyle from "./footer.module.css";

const FooterPage = () => {
    return (
        <footer className={cssStyle.footer}>
            <div>
               <h4 className={cssStyle.h4}>Support me</h4>
               <a href="https://www.instagram.com/igx_rehman_" className={cssStyle.link} target="_blank">Instagram</a>
               <br/>

                <a href="https://www.linkedin.com/in/abdul-rehman-rajpoot-a309082b4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className={cssStyle.link} target="_blank">Linkedin</a>
               <br/>

               <a href="https://github.com/Abdulrehmanrajpoot12" className={cssStyle.link} target="_blank">Github</a>
               <br/>

               <p className={cssStyle.p}>&copy; Abdul Rehman - All Rights Reserved.</p>
            </div> 
        </footer>
    )
}

export default FooterPage;