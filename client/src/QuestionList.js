import React, { Component } from "react";

export default class QuestionList extends Component {
  render() {
    return (
      <div class="container">
        <div class="table-responsive-sm">
          <table class="table table-striped table-bordered table-hover">
            <thead class="thead-dark">
              <tr>
                <th>Category</th>
                <th>Question</th>
                <th>Answer</th>
              </tr>
            </thead>
            <tbody>
              {this.props.questions.map((questions, index) => {
                return (
                  <tr>
                    <td>{questions.cid}</td>
                    <td>{questions.Question}</td>
                    <td>
                      <button
                        class="btn btn-primary sm"
                        onClick={() => {
                          this.props.sendGetA(questions.qid);
                        }}
                      >
                        click
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
