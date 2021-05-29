import React, { Component } from 'react';
import uuid from 'uuid';
import { connect } from 'react-redux';
import { addQuote } from '../actions/quotes';

class QuoteForm extends Component {

  state = {
    content: '',
    author: ''
  }

  handleOnChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleOnSubmit = e => {
    e.preventDefault()
    if(this.state.content && this.state.author) {
      this.props.addQuote({id: uuid(), ...this.state})
      this.setState({content: "", author: ""})
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-md-offset-2">
            <div className="panel panel-default">
              <div className="panel-body">
                <form className="form-horizontal" onSubmit={this.handleOnSubmit}>
                  <div className="form-group">
                    <label htmlFor="content" className="col-md-4 control-label">Quote</label>
                    <div className="col-md-12">
                      <textarea
                        style={{width: "100%"}}
                        className="form-control"
                        value={this.state.content}
                        name="content"
                        onChange={this.handleOnChange}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="row">
                      <label htmlFor="author" className="col-md-6 control-label ">Author</label>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <input
                          className="form-control"
                          type="text"
                          value={this.state.author}
                          name="author"
                          onChange={this.handleOnChange}
                        />
                      </div>
                      <br /><br /><br />
                      <div className="col-md-12 col-md-offset-4">
                        <button style={{width: "100%"}} type="submit" className="btn btn-default btn-lg">Add</button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

//add arguments to connect as needed
export default connect(null, {addQuote})(QuoteForm);
