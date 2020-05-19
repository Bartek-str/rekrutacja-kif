import React, { Component } from "react";

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            first: '',
            second: '',
            third: '',
            fourth: '',
            full: false,
            enter: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.fullChecked = this.fullChecked.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.checkFull = this.checkFull.bind(this);
    }

    handleChange (event) {


        if (event.target.value % 1 === 0) {
            this.setState({
                [event.target.name]: event.target.value
            }, this.checkFull);
        }
        else {
            this.setState({
                [event.target.name]: ''
            });
        }
    }

    handleSubmit (event) {
        if (this.state.full === false) {
            event.preventDefault();
            this.setState({enter: true}, alert('PIN zbyt krótki. Proszę spróbować jeszcze raz'));
        }
    }

    checkFull () {
        if (this.state.first === '' || this.state.second === '' || this.state.third === '' || this.state.fourth === '') {
            this.setState({full: false})
        }
        else {
            this.setState({full: true})
        }
    }

    fullChecked () {
        this.checkFull();
    }

    render() {
        let className1 = 'first PINinput';
        let className2 = 'second PINinput';
        let className3 = 'third PINinput';
        let className4 = 'fourth PINinput';
        if (this.state.enter === true) {
            className1 += ' error';
            className2 += ' error';
            className3 += ' error';
            className4 += ' error'
        }
        return (
            <form className='Form' onChange={this.fullChecked} onSubmit={this.handleSubmit}>
                <div className='PIN'>
                    <input className={className1} name='first' value={this.state.first} onChange={this.handleChange} type='text' maxLength={1}/>
                    <input className={className2} name='second' value={this.state.second} onChange={this.handleChange} type='text' maxLength={1}/>
                    <input className={className3} name='third' value={this.state.third} onChange={this.handleChange} type='text' maxLength={1}/>
                    <input className={className4} name='fourth' value={this.state.fourth} onChange={this.handleChange} type='text' maxLength={1}/>
                </div>
                {this.state.full === true ? <input className='Submit' type='submit' value='Potwierdź' /> : <input className='SubmitDisabled' type='submit' value='Potwierdź' onSubmit={this.handleSubmit} />}
            </form>
        );
    }
}

export default Form;