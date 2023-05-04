import { FaInfo } from 'react-icons/fa'
import { NotFoundCard } from './styles'

const Empty = () => {
    return (
        <NotFoundCard>
            <div className="icon">
                <FaInfo></FaInfo>
            </div>
            <span>Not found your question, Sorry</span>
        </NotFoundCard>
    )
}

export default Empty