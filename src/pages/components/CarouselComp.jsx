import { Carousel } from "react-bootstrap"

import jsImg from '../../assets/tecIcons/Javascript.jpeg'
import ReactImg from '../../assets/tecIcons/React.jpg'
import TsImg from '../../assets/tecIcons/Typescript.jpeg'
import NodeImg from '../../assets/tecIcons/Node.jpeg'
import DotNetImg from '../../assets/tecIcons/DotNet.jpg'

export const CarouselComp = () => {
    const CarouselImages = [
        {src: jsImg,caption: "JavaScript" },
        {src: ReactImg,caption: "React" },
        {src: NodeImg,caption: "Node" },
        {src: TsImg,caption: "Typescript" },
        {src: DotNetImg, caption: "DotNet" },
    ]

    return (
            <Carousel className="shadowForCards" fade>
                {CarouselImages.map((item, index) =>(
                    <Carousel.Item key={index}>
                        <img className="d-block carouselTecImg" src={item.src} alt={item.caption}/>
                        <Carousel.Caption>
                            <span>{item.caption}</span>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))
                }
            </Carousel>
    )
}