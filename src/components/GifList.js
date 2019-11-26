import React from 'react'

class GifList extends React.Component {

    render(){
        console.log(this.props)
        return (
            <ul>
                {
                    this.props.gifs.map(gif => {
                     return   <li>
                            <img src={gif}></img>
                        </li>
                    })
                }
            </ul>
        )
    }
}

export default GifList