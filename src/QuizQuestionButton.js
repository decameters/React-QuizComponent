import React, { Component } from 'react'

class QuestQuestionButton extends Component {
    render() {
        return (
            <li>
                <button>{this.props.button_text}</button>
            </li>
        )
    }
}

export default QuizQuestionButton