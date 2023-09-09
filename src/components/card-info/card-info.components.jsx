import { Component } from 'react'
class CardInfo extends Component {
    render() {
        // let { monster } = this.props
        // let { id, name, email } = monster
        let { id, name, email } = this.props
        return (
            <div key={id} className='card-container'>
                <img src={`https://robohash.org/${id}?set=set2&size=180x180`} alt="Monster Image" />
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        )
    }
}
export default CardInfo