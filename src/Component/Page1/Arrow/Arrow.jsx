import up from '../../../images/upload.webp'
import'./Arrow.css'
const Arrow = () => {
  return (
    <div>
        <div className='arrow-up'>
            <a href="#top"><img className='up-arrow' src={up} alt="Scroll to Top" /></a>
        </div>
    </div>
  )
}

export default Arrow