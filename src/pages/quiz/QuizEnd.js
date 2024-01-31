import React from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default function QuizEnd({ quiz }) {

    const restartQuiz = () => {
        window.location.reload();
    };

    const calculateMark = () => {
        let totalMarks = 0;
        quiz.forEach((question) => {
            totalMarks += question.marks ? question.marks : 0;
        });
        return totalMarks;
    };

    return (
        <Row className="justify-content-center mt-4">
            <Col xs={12} md={8}>
                <Card>
                    <Card.Header className="text-center">
                        Your Score: {calculateMark()}
                    </Card.Header>
                    <Card.Body>
                        <Row>
                            {quiz.map((question, index) => {
                                let variant = 'secondary';
                                if (question.marks > 0) {
                                    variant = 'success';
                                }
                                else if (question.marks < 0) {

                                    variant = 'danger';
                                }
                                return (
                                    <>
                                        <Row className='pt-1'>
                                            <Col key={index} className="pb-2">
                                                <h6>Question {question.no}</h6>
                                            </Col>

                                            <Col className='d-flex justify-content-end'>
                                                <div> <Badge pill bg={variant}>{question.marks ? question.marks : 0}</Badge>
                                                </div>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col className='pb-2'>
                                                {question.question}
                                            </Col>
                                        </Row>
                                        <hr />
                                    </>
                                );
                            })}
                        </Row>
                    </Card.Body>
                    <Card.Footer className="d-flex justify-content-center">
                        <Button className='btn btn-primary px-5 py-3'
                            onClick={restartQuiz}
                            variant="primary">
                            Start Quiz Again
                        </Button>
                    </Card.Footer>
                </Card>
            </Col>
        </Row >
    );
}
