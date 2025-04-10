export default function Footer(){
    return(
        <div className="footer-container background-white" id="contact">
            <div className="footer-wrapper">
                <div className="footer-content color-orange" data-aos="fade-up" >
                    <h2 className="footer-title">Get In Touch</h2>
                    <p className="footer-description"> Based in Lahore, Pakistan. For inquiries or collaborations, feel free to <a  className="color-orange" href="tel:+923234990862" aria-label="Phone Number">shedule a call</a> or email <a className="color-orange" href="mailto:hassanlatif1620@gmail.com" aria-label="Email">@hassanlatif.com</a>. </p>
                    <p className="social-icons flex align-center gap-1 justify-center">
                        <a href="https://linkedin.com/in/hassan-latif-530968243/" target="blank" aria-label="Linkedin">
                            <img src="/assets/linkedin-custom.svg" alt="Linkedin" />
                        </a>
                        <a href="https://api.whatsapp.com/send?phone=923234990862&text=Hello, Hassan" target="blank" aria-label="Whatsapp">
                            <img src="/assets/whatsapp-custom.svg" alt="Whatsapp" />
                        </a>
                        <a href="mailto:hassanlatif1620@gmail.com" target="blank" aria-label="Gmail">
                            <img src="/assets/gmail icon-3.png" alt="Gmail" />
                        </a>
                    </p>
                </div>
            </div>  
        </div>
    )
}
