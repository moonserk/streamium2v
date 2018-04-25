import React from 'react'
import styled, { keyframes } from 'styled-components'
import Video from '../components/Video'
import '../main.scss'

const Loading = styled.div`
    color: white;
`

export default class VideosContainer extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            id: 0,
            preview: true, 
            isLoading: false,
            error: null,
            items: [],
            anim: false,
            trans: true
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e){
        e.preventDefault()
        this.setState({id: this.state.items.length - 1 <= this.state.id ? 0 : this.state.id + 1, preview: true, anim: false, trans: false})
        setTimeout(() => {
            this.setState({ anim: true, trans: true })
          }, 50);
    }

    componentDidMount(){
        setTimeout(() => {
            this.setState({ anim: true })
          }, 50);
    }

    componentWillMount(){
        this.setState({ isLoading: true });

        fetch('fakedata.json')
          .then(response => response.json())
          .then(data => { this.setState({ items: data, isLoading: false })})
          .catch(error => this.setState({ error, isLoading: false }))
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
                <div    
                    style={{
                        width: this.state.anim ? '100%' : '40%',
                        transition: this.state.trans ? 'all 2s' : null,
                    }}
                    onWheel={this.handleChange} 
                    onClick={e => this.setState({preview: false})}> 

                        <Video  src={this.state.preview ? items[this.state.id].src : items[this.state.id].fullSrc} 
                                preview={this.state.preview}/>

                </div>
        );
    }
}