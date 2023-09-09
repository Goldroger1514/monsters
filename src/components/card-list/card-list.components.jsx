import { Component } from 'react'
import './card-list.css'
import CardInfo from '../card-info/card-info.components'
class CardList extends Component {
    render() {
        let { filtered } = this.props
        return (
            <div className='monsters-list' >
                {
                    filtered.map(monster => {
                        let { id, name, email } = monster;
                        return (
                            // <CardInfo id={id} name={name} email={email} />
                            <CardInfo monster={monster} />
                        )
                    })
                }
            </div>
        )
    }
}
export default CardList