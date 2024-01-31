import React, { useState } from 'react';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import quizData from '../../data/QuizData';
import QuizEnd from './QuizEnd';
import ConfirmModal from '../../components/ConfirmModal';

export default function Quiz() {
    const [quiz, setQuiz] = useState([...quizData]);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [isSubmit, setSubmit] = useState(false);
    const [isShowConfirm, setShowConfirm] = useState(false);


    const positiveMark = 4;
    const negativeMark = -1;

    const onNextQuestion = () => {
        setCurrentQuestion(currentQuestion + 1);
    };

    const onPrevQuestion = () => {
        setCurrentQuestion(currentQuestion - 1);
    };

    const onClearAnswer = () => {
        const updatedQuiz = [...quiz];
        const currentQuestionObj = updatedQuiz[currentQuestion];
        currentQuestionObj.marks = undefined;
        currentQuestionObj.ticked_answer = -1;
        setQuiz(updatedQuiz);
    };


    const onConfirm = () => {
        setSubmit(true);
        setShowConfirm(false);
    };
    const onCancel = () => {
        setShowConfirm(false);
    };


    const onAnswerChange = (index) => {
        const updatedQuiz = [...quiz];
        const currentQuestionObj = updatedQuiz[currentQuestion];
        if (currentQuestionObj.correct_answer === index + 1) {
            currentQuestionObj.marks = positiveMark;
        } else {
            currentQuestionObj.marks = negativeMark;
        };
        currentQuestionObj.ticked_answer = index;
        setQuiz(updatedQuiz);
    };

    const onQuestionClick = (index) => {
        setCurrentQuestion(index);
    };

    const renderQuestion = (question) => {
        return (
            <>
                <Card.Header>
                    <Row>
                        <Col className='h5' md={7}>
                            Question {question.no}
                        </Col>
                        <Col className='small text-success'>Max Marks: {positiveMark}</Col>
                        <Col className='small text-danger'>Negative Marks: {negativeMark}</Col>
                    </Row>
                </Card.Header>
                <Card.Body>
                    <Card.Title>{question.question}</Card.Title>
                </Card.Body>
            </>
        );
    };

    const renderQuestionStat = () => {
        return (
            <Card>
                <Card.Header><h5>Question Status Overview</h5></Card.Header>
                <Card.Body>
                    <Row>
                        {quiz.map((question, index) => (
                            <Col key={index} xs={4} md={4} className='pb-2'>
                                <Badge
                                    role='button'
                                    onClick={() => onQuestionClick(index)}
                                    bg={question.ticked_answer >= 0 ? 'success' : 'secondary'}>
                                    Question {question.no}
                                </Badge>
                            </Col>
                        ))}
                    </Row>
                </Card.Body>
                <Card.Footer className='d-flex justify-content-center'>
                    <Button className='btn w-25'
                        onClick={() => setShowConfirm(true)}
                        variant='primary'>
                        Submit
                    </Button>
                </Card.Footer>
            </Card>
        );
    };

    const renderAnswers = (question) => {
        return (
            <ListGroup variant='flush'>
                {question.answers.map((answer, index) => (
                    <ListGroup.Item key={index}>
                        < Form.Check
                            type='radio'
                            onChange={() => { onAnswerChange(index); }}
                            checked={question.ticked_answer === index}
                            name={`answer-${question.no}`}
                            id={`answer-${index}`}
                            label={answer}
                        />
                    </ListGroup.Item>
                ))
                }
            </ListGroup >
        );
    };

    const renderView = () => {
        return (
            <Row>
                <Col xs={12} md={8} className='pt-2'>
                    <Card>
                        {renderQuestion(quiz[currentQuestion])}
                        {renderAnswers(quiz[currentQuestion])}
                        <Card.Footer>
                            <Row>
                                <Col>
                                    <Button variant='danger' onClick={onClearAnswer}>
                                        Clear
                                    </Button>
                                </Col>
                                <Col className='d-flex justify-content-end'>
                                    <Button
                                        variant='secondary'
                                        onClick={onPrevQuestion}
                                        disabled={currentQuestion === 0}
                                        className='me-2'>
                                        Previous
                                    </Button>
                                    <Button
                                        variant='secondary'
                                        onClick={onNextQuestion}
                                        disabled={currentQuestion === quiz.length - 1}
                                        className='ms-2'>
                                        Next
                                    </Button>
                                </Col>
                            </Row>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col xs={12} md={4} className='pt-2'>
                    {renderQuestionStat()}
                </Col>
                {
                    isShowConfirm ?
                        <ConfirmModal show={isShowConfirm}
                            title='Submit Your Quiz'
                            subTitle='Are you sure you want to submit your quiz?'
                            onConfirm={onConfirm} onCancel={onCancel} />
                        : null
                }
            </Row>

        );
    };

    return (

        <Container>
            {isSubmit ? <QuizEnd quiz={quiz} /> : renderView()}
        </Container>
    );
}
