import React from 'react';
import { Field, reduxForm } from 'redux-form'

class StreamCreate extends React.Component {
    renderInput({input, label}) {
        return (
            <div className='field'>
                <label>{label}</label>
                 <input {...input} />
            </div>
           
        )
    }
    onSubmit(fromValues){
     console.log(fromValues)
    }
    render(){
        return(
            <form className='ui form' onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <Field name='title' component={this.renderInput} label='Enter Title'/>
                <Field name='description' component={this.renderInput} label='Enter Description'/>
                <button className='ui button primary'>Submit</button>
            </form>
        )
    }
}

export default reduxForm({form: 'streamCreate'}) (StreamCreate);