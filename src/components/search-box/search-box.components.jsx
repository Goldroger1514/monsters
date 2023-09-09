import { Component } from 'react'
class SearchBox extends Component {
    render() {
        let { onSearchChange, className, placeholder } = this.props
        return (
            <input type='search' onChange={onSearchChange} className={className} placeholder={placeholder} />
        )
    }
}
export default SearchBox