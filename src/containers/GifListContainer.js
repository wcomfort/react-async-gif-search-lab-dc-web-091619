import React from 'react'
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'

class GifListContainer extends React.Component {

    state = {
        searchTerm: "",
        gifs: []
    }

    search = (event) =>{
        this.setState({
            searchTerm: event.target.value
        })
    }

    getGifs = (event) => {
        event.preventDefault()
        console.log('getting Gifs!')
        fetch(`https://api.giphy.com/v1/gifs/search?q=${this.state.searchTerm}&api_key=dc6zaTOxFJmzC&rating=g`)
        .then(res => res.json())
        .then(g => {
           let gifArr = g.data.map((gif) => {
            return gif.images.original.url
            })
            let displayGifs = gifArr.slice(0, 3)
            this.setState({
                gifs: displayGifs
            })
        }) 
    }

    render(){
        return (
            <div>
                <GifSearch getGifs={this.getGifs} searchTerm={this.state.search} search={this.search}/>
                <GifList gifs={this.state.gifs}/>
            </div>
          
        )
    }
}

export default GifListContainer