import Marquee from "react-fast-marquee";

export default function ProjectsRfm(){
    const slideImages =[
        {title:"Ethnc", image:"/assets/Ethnc.jpg",alt:"https://ethnc.com/",type:'Shopify Plus'},
        {title:"Images1993", image:"/assets/images1993.jpg",alt:"https://image1993.com/",type:'Shopify Plus'},
        {title:"Nuriyaa", image:"/assets/nuriyaa.jpg",alt:"https://www.nuriyaa.com/",type:'Shopify'},
        {title:"Scrubser", image:"/assets/scrubser.jpg",alt:"https://scrubser-shop.com/",type:'Shopify'},
        {title:"Maryam N Maria UAE", image:"/assets/maryamnmariauae.jpg",alt:"https://maryumnmariauae.com/",type:'Shopify Plus'},
        {title:"Outfitters", image:"/assets/outfitters.jpg",alt:"https://outfitters.com.pk/",type:'Shopify Plus'},
        {title:"Sparx Mobile", image:"/assets/sparx.jpg",alt:"https://sparx.pk/",type:'Shopify'},
        {title:"Vyntage Horology", image:"/assets/vyntage horology.jpg",alt:"https://vyntage.com/",type:'Shopify'},
        {title:"Pathner Tires", image:"/assets/panther tires.jpeg",alt:"https://shop.panthertyres.com/",type:'Shopify'},
        {title:"Flexum CMS", image:"/assets/flexumCms.jpg",alt:"",type:'Vue'},
    ]
    return(
        <div className="projects-rfm-container background-white" id="Projects">
            <div className="projects-rfm-wrapper">
                <div className='project-heading color-orange text-center' data-aos="fade-right">
                    <h5>CASE STUDIES</h5>
                    <h2>Projects</h2>
                </div>
                    <Marquee pauseOnHover={false} speed={60}>
                        {slideImages.map ((slide , index) => (
                        <div className="projects-rfm flex space-between align-center">
                            <div className='project-slide ' >
                                <div className='project-card pos-relative' >
                                    <a className='project-link' href={slide.alt} target="_blank" aria-label={slide.title}>
                                        <img className='project-image' src={slide.image} alt={slide.title} />
                                        <span className='type-badge color-orange'>{slide.type}</span>
                                        <p className='project-title color-orange'>{slide.title}</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                        ))}
                    </Marquee>
                </div>

        </div>
    )
}