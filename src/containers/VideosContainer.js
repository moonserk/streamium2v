import React from 'react'
import styled from 'styled-components'
import Video from '../components/Video'

const Loading = styled.div`
    color: white;
`

export default class VideosContainer extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            id: 0,
            isLoading: false,
            error: null,
            items: []
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e){
        e.preventDefault()
        this.setState({id: this.state.items.length - 1 <= this.state.id ? 0 : this.state.id + 1})
    }

    componentWillMount(){
        this.setState({ isLoading: true });

        fetch('fakedata.json')
          .then(response => response.json())
          .then(data => { this.setState({ items: data, isLoading: false })})
          .catch(error => this.setState({ error, isLoading: false }));
    }

    render(){
        const { items, isLoading, error } = this.state;
        if (error) {
            return <Loading>{error.message}</Loading>;
        }
        if (isLoading) {
            return <Loading>Loading ...</Loading>;
        }
        return (
            <div onWheel={this.handleChange} onClick={this.handleChange}>
                <Video src={items[this.state.id].src} />
            </div>
        );
    }
}