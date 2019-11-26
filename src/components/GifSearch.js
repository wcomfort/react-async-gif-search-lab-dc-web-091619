import React from 'react'

class GifSearch extends React.Component {

    render(){
        return (
      <form>
          <input type='text' placeholder='Search for GIFs' onChange={this.props.search}></input>
          <input type="submit" value="Search for GIFs" onClick={this.props.getGifs}></input>
      </form>
           
        )
    }
}

export default GifSearch