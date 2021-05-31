
import React, { useState, useReducer, useContext, useEffect } from "react";
import { Alerterror, Alertsuccess } from "../../Commom";
import TestContext from "../../Context/TestContext";
import TestReducers from "../../Reducers/TestReducers";
import { useHistory } from 'react-router'
import {
    SET_ANSWERS,
    SET_CURRENT_QUESTION,
    SET_CURRENT_ANSWER,
    SET_ERROR,
    SET_SHOW_RESULTS,
    RESET_QUIZ,
    SET_RESULT
} from "../../Reducers/types";
import { TestAPI } from "../../Service";
import ProgressBar from "@ramonak/react-progress-bar";

export const RunTest = ({
    questions = [],
    testId = 0,
    show = false,
    time = 0,
    callShow= callShow()
}) => {
    const initialState = {
        questions,
        currentQuestion: 0,
        currentAnswer: '',
        answers: [],
        showResults: false,
        error: '',
        results: []
    };
    const history = useHistory()

    const [state, dispatch] = useReducer(TestReducers, initialState);
    const { currentQuestion, currentAnswer, answers, showResults, error, results } = state;
    const [UserId, setUserId] = useState(0)
        const UserData = JSON.parse(localStorage.getItem("UserInfor"));
    const UserID = (UserData.accountId)
    const question = questions[currentQuestion];
    const [ minutes, setMinutes ] = useState(time);
    const [seconds, setSeconds ] =  useState(0);
    const [Proges, setProges] = useState(100)
    useEffect(() => {
        const h = time*60*1000;
        const oneProgress = h/100;
        const z = setInterval(() => {
            setProges((prev) => {
                if (prev === 0) {
                    clearInterval(z);
                    return 0;
                } else {
                    return prev -1;
                }
            });
        }, oneProgress);
        return ()=> {
            clearInterval(z) ;

        };
    }, [])
    useEffect(()=>{
        let myInterval = setInterval(() => {
                if (seconds > 0) {
                    setSeconds(seconds - 1);
                }
                if (seconds === 0) {
                    if (minutes === 0) {
                        clearInterval(myInterval)
                    } else {
                        setMinutes(minutes - 1);
                        setSeconds(59);
                    }
                } 
            }, 1000)
            return ()=> {
                clearInterval(myInterval);
            };
        },[seconds]);
     
    const renderError = () => {
        if (!error) {
            return;
        }
        Alerterror("Hãy chọn đáp án")
        return <div className="error text-danger"> {error} </div>;
    };
    useEffect(() => {
      AutoSave()
    }, [])
 
   
    const renderResultMark = (question, answer) => {
        if (question.corectAns === answer.answer) {
            return <span className="correct">Correct</span>;
        }
        return <span className="failed">Failed</span>;
    };


    const [Score, setScore] = useState(0);
    const [showBack, setShowBack] = useState(false);

    const Submit = () => {
        const arr = [];
        const arrCorrect = []
        answers.map(answer => {
            const question = questions.find(
                question => question.questionId === answer.questionId
            );
            if (question.corectAns === answer.answer) {
                arr.push({ questionId: question.questionId, answer: answer.answer, ok: true })
                results.push({ questionId: question.questionId, answer: answer.answer, ok: true })
                arrCorrect.push({ questionId: question.questionId, answer: answer.snswer })
            }
            else {
                arr.push({ questionId: question.questionId, answer: answer.answer, ok: false })
                results.push({ questionId: question.questionId, answer: answer.answer, ok: true })
            }
        });

        const x = Math.round(arrCorrect.length / questions.length * 100);
        return (
            <div className="text-center mt-2">
                <div className="font-20 f-900">
                    Chúc mừng bạn đã hoàn thành bài thi của mình!
                 
                </div>
               
                <div>
                    <button className="btn bg-c btn-lg mt-4" id="save" onClick={e => handleSaveResult(x, arr)}>
                        Nạp bài thi
                    </button>
                </div>
            </div>
        )
    };

    const renderResultsData = () => {
        const arr = [];
        const arrCorrect = []
        answers.map(answer => {
            const question = questions.find(
                question => question.questionId === answer.questionId
            );
            if (question.corectAns === answer.answer) {
                arr.push({ questionId: question.questionId, answer: answer.answer, ok: true })
                results.push({ questionId: question.questionId, answer: answer.answer, ok: true })
                arrCorrect.push({ questionId: question.questionId, answer: answer.snswer })
            }
            else {
                arr.push({ questionId: question.questionId, answer: answer.answer, ok: false })
                results.push({ questionId: question.questionId, answer: answer.answer, ok: true })
            }
        });

        const x = Math.round(arrCorrect.length / questions.length * 100);
        return (
            <div className="text-center mt-2">
                <div className="font-20 f-900">
                    Số lượng câu trả lời đúng: {arrCorrect.length}/{questions.length}
                </div>
                <div className="font-20 f-900">
                    Điểm của bạn là: {x} / 100
                </div>
                <div>
                    <button className="btn bg-c btn-lg mt-4" onClick={e => callShow(false)}>
                        Trở về trang chủ
                    </button>
                </div>
            </div>
        )
    };

    const AutoSave = () => {
       const timeTest = (time*60*1000)
        let timerId= setInterval(() => dispatch({ type: SET_SHOW_RESULTS, showResults: true }), timeTest);
        setTimeout(() => { clearInterval(timerId) },timeTest+1000);
        return(
            <> </>
        )

    }
    const handleSaveResult = (score, arr) => {
        show = true;
        setScore(score);
        
        dispatch({ type: SET_RESULT, results });

        const obj = {
            accountId: UserID,
            testId: testId,
            score: score,
            answers: arr || []
        }
    
        MEEC_RESULT_Save(obj)
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
    const MEEC_RESULT_Save = async (obj) => {
        try {
            //const params = { _page: 1, _limit: 10 };
            const response = await TestAPI.submit(obj);
            Alertsuccess("Nạp bài thành công");
            setShowBack(true)
            
        } catch (error) {
            Alerterror("Lỗi")
            console.log('Failed to fetch: ', error);

        }
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
                <div className="element-center2 card p-4 bx " style={{ backgroundColor: '#c4e8d9' }}>
                    <div className="text-center color-text"><h1 className="f-900 ">Kết quả</h1></div>
                    <div> {!showBack ? Submit() : renderResultsData()}</div>
                </div>


                {/* <button className="btn btn-primary" onClick={restart}>
                    Restart
            </button> */}
            </div>
        );
    } else {
        return (
            <TestContext.Provider value={{ state, dispatch }}>
                <div className="container-fluid  ">
                <ProgressBar 
                            completed={Proges}
                            labelColor="#fff"
                            bgColor="#18ce0f"
                            height="12px"
                            labelSize="12px"
                            />
                    <div className="position-relative d-flex flex-column justify-content-end align-items-end">
                    <div className="text-center  btn-lg mt-2">
                        { minutes === 0 && seconds === 0
                            ? null
                            : <button className="btn bg-i"> {minutes}:{seconds < 10 ?  `0${seconds}` : seconds}</button> 
                        }
                        </div>
                        <div className="text-center btn-lg mt-2">
                             <button className="btn bg-i"
                              onClick={() =>answers.length > 0 ? dispatch({ type: SET_SHOW_RESULTS, showResults: true }): Alerterror("Hãy trả lời ít nhất một câu hỏi")}>
                                   Nạp bài sớm</button> 
                        </div>
                    </div>
                    
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
                </div>
            </TestContext.Provider>
        );
    }
}
