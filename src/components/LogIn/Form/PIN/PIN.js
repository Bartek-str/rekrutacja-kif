import React, { Component } from "react";

class PIN extends Component {
    constructor(props) {
        super(props);
        this.state = {
            first: '',
            second: '',
            third: '',
            fourth: ''
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange (event) {
        if (event.target.value % 1 === 0) {
            this.setState({
                [event.target.name]: event.target.value
            });
        }
        else {
            this.setState({
                [event.target.name]: ''
            });
        }
    }

    render() {
        return (
            <>
                <div className='PIN'>
                    <input
                        className='first'
                        name='first'
                        value={this.state.first}
                        onChange={this.handleChange}
                        type='text'
                        maxLength={1}/>
                    <input
                        className='second'
                        name='second'
                        value={this.state.second}
                        onChange={this.handleChange}
                        type='text'
                        maxLength={1}/>
                    <input
                        className='third'
                        name='third'
                        value={this.state.third}
                        onChange={this.handleChange}
                        type='text'
                        maxLength={1}/>
                    <input
                        className='fourth'
                        name='fourth'
                        value={this.state.fourth}
                        onChange={this.handleChange}
                        type='text'
                        maxLength={1}/>
                </div>
                {}
                <input className='SubmitDisabled' type='submit' value='Potwierdź' />
            </>
        );
    }
}

export default PIN;