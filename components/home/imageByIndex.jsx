import image1 from '../images/slide-1.jpg'
import image2 from '../images/slide-2.png'
import image3 from '../images/slide-3.png'
import image4 from '../images/slide-4.png'
import image5 from '../images/slide-5.png'

export const images = [image1, image2, image3, image4, image5]


const imageByIndex = (index) => images[index % images.length]

export default imageByIndex
