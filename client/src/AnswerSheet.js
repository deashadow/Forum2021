import React, { Component } from "react";

export default class AnswerSheet extends Component {
  render() {
    return (
      <div class="container">
        <div class="table-responsive-sm">
          <table class="table table-striped table-bordered table-hover">
            <thead class="thead-dark">
              <tr>
                <th>qid</th>
                <th>Answer</th>
              </tr>
            </thead>
            <tbody>
              {this.props.answers.map(( answer, index) => {
                return (
                  <tr>
                    <td>{answer.qid}</td>
                    <td>{answer.Answer}</td>
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
