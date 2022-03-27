import React from 'react';
import axios from 'axios';
// require('dotenv').config();
import SearchBar from './SearchBar';




class App extends React.Component {

    async onSearchSubmit(term) {
      const response = await axios.get('https://api.unsplash.com/search/photos', {
            params: { query: term },
            headers: { 
                Authorization: `Client-ID DdqJHbVaOgtAz5bDx51dKLhW13yf9Llo0ohaun742s4`,
            }
        })

        console.log(response.data.results)
    }
   
    render() {
        return (
            <div className='ui container' style={{ marginTop: '15px' }}>
                <SearchBar onSubmit={this.onSearchSubmit} />
            </div>
        )
    }
}


export default App;