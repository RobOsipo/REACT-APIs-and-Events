import React from 'react';


class SearchBar extends React.Component {

    state = { term: '' }

    // onInputChange(e) {
    //     console.log(e.target.value);
    // }

    render() {
        return (
            <div className='ui segment'>
                <form className='ui form'>
                    <div className='field'>
                        <label>Search for an Image!</label>
                        <input type='text' onChange={ (e) => this.setState({ term: e.target.value }) } />
                    </div>
                 </form>
            </div>
        )
    }
}

export default SearchBar;