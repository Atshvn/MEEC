
import React, { useState,  useReducer, useContext } from "react";
import {  Alerterror} from "../../Commom";
import TestContext from "../../Context/TestContext";
import TestReducers from "../../Reducers/TestReducers";
import {
    SET_ANSWERS,
    SET_CURRENT_QUESTION,
    SET_CURRENT_ANSWER,
    SET_ERROR,
    SET_SHOW_RESULTS,
    RESET_QUIZ,
} from "../../Reducers/types";

export const RunTest = ({
    questions = [],
    testId = 0,
    show = false
}) => {
    const initialState = {
        questions,
        currentQuestion: 0,
        currentAnswer: '',
        answers: [],
        showResults: false,
        error: '',
    };

    const [state, dispatch] = useReducer(TestReducers, initialState);
    const { currentQuestion, currentAnswer, answers, showResults, error } = state;

    const question = questions[currentQuestion];
    const renderError = () => {
        if (!error) {
            return;
        }
        Alerterror("Hãy chọn đáp án")

        return <div className="error text-danger"> {error} </div>;
    };
    const renderResultMark = (question, answer) => {

        if (question.corectAns === answer.answer) {
            return <span className="correct">Correct</span>;
        }

        return <span className="failed">Failed</span>;
    };
    const [Score, setScore] = useState(0);
    const renderResultsData = () => {
        const arr = [];
        const arrCorrect = []
        answers.map(answer => {
            const question = questions.find(
                question => question.questionId === answer.questionId
            );
            if (question.corectAns === answer.answer) {
                arr.push({ question: question.questionId, answer: answer.answer, OK: true })
                arrCorrect.push({ question: question.questionId, answer: answer.snswer })
            }
            else {
                arr.push({ question: question.questionId, answer: answer.answer, OK: false })

            }

        });
        const x = Math.round(arrCorrect.length / questions.length * 1000) / 100;
        return (
            <div className="text-center mt-2">
                <div className="font-20 f-900">
                    Số lượng câu trả lời đúng: {arrCorrect.length}/{questions.length}
                </div>
                <div  className="font-20 f-900">
                    Điểm: {x}
                </div>
                <div>
                    <button className="btn bg-c btn-lg mt-4" onClick={e => handleSaveResult(x, arr)}>
                        Xác nhận kết quả
                    </button>
                </div>

            </div>
        )
    };
    const handleSaveResult = (score, arr) => {
            show=true;
        setScore(score);
        const obj = {
            accountId: 0,
            testId: testId,
            score: score,
            answers: arr
        }
        console.log(obj);
    }
    const restart = () => {
        dispatch({ type: RESET_QUIZ });
    };

    const next = () => {
        const answer = { questionId: question.questionId, answer: currentAnswer };

        if (!currentAnswer) {
            dispatch({ type: SET_ERROR, error: 'Hãy chọn đáp án' });
            return;
        }

        answers.push(answer);
        dispatch({ type: SET_ANSWERS, answers });
        dispatch({ type: SET_CURRENT_ANSWER, currentAnswer: '' });

        if (currentQuestion + 1 < questions.length) {
            dispatch({
                type: SET_CURRENT_QUESTION,
                currentQuestion: currentQuestion + 1,
            });
            return;
        }

        dispatch({ type: SET_SHOW_RESULTS, showResults: true });
    };

    function Progress(props) {
        return (
            <h2 className="color-text">
                Câu {props.current} trên {props.total}
            </h2>
        );
    }
    function Answer(props) {
        let classes = ['answer', 'btn bg-w w-100 font-18  btn-rounded btn-confirm'];

        const handleClick = e => {
            props.dispatch({
                type: SET_CURRENT_ANSWER,
                currentAnswer: e.target.value,
            });
            props.dispatch({ type: SET_ERROR, error: '' });
        };

        if (props.selected) {
            classes.push('selected');
        }
        return (
            <button
                value={props.answer}
                className={classes.join(' ')}
                onClick={handleClick}>
                <span className="letter">{props.letter}.</span> {props.answer}
            </button>
        );
    }
    function Answers() {
        const { state, dispatch } = useContext(TestContext);
        const { currentAnswer, currentQuestion, questions } = state;
        const question = questions[currentQuestion];
        return (
            <>
                <div className="row">
                    <div className="col-md-6 mb-2">
                        <Answer
                            letter="A"
                            answer={question.answerA}
                            dispatch={dispatch}
                            selected={currentAnswer === question.answerA}
                        />
                    </div>
                    <div className="col-md-6 mb-2">

                        <Answer
                            letter="B"
                            answer={question.answerB}
                            dispatch={dispatch}
                            selected={currentAnswer === question.answerB}
                        />
                    </div>
                    <div className="col-md-6 mb-2">
                        <Answer
                            letter="C"
                            answer={question.answerC}
                            dispatch={dispatch}
                            selected={currentAnswer === question.answerC}
                        />
                    </div>
                    <div className="col-md-6 mb-2">
                        <Answer
                            letter="D"
                            answer={question.answerD}
                            dispatch={dispatch}
                            selected={currentAnswer === question.answerD}
                        />
                    </div>
                </div>
            </>
        );
    }
    const Question = () => {
        const { state } = useContext(TestContext);
        const { currentQuestion, questions } = state;
        const question = questions[currentQuestion];
        return <h2 className="color-text">{question.content}</h2>;
    }
    if (showResults) {
        return (
            <div className="container results">
                <div className="element-center card p-4 bx " style={{ backgroundColor: '#c4e8d9' }}>
                    <div className="text-center color-text"><h1 className="f-900 ">Kết quả</h1></div>
                    <div> {renderResultsData()}</div>
                </div>


                {/* <button className="btn btn-primary" onClick={restart}>
                    Restart
            </button> */}
            </div>
        );
    } else {
        return (
            <TestContext.Provider value={{ state, dispatch }}>
                <div className="container  ">
                    <div className="element-center card p-4 bx bg-t">
                        <div className="text-center">  <Progress
                            total={questions.length}
                            current={currentQuestion + 1}
                        /></div>
                        <div style={{ height: '150px' }}>
                            <Question />
                        </div>
                        <div style={{ height: '150px' }}>
                            <Answers />
                            {renderError()}

                        </div>
                        <div className="text-center">
                            <button className="btn bg-i btn-lg btn-rounded font-20" onClick={next}>

                                Xác nhận và tiếp tục
                                <i class="fas fa-long-arrow-alt-right pl-2"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </TestContext.Provider>
        );
    }
}
