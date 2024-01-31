import React from 'react';
import { Container } from 'react-bootstrap';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default function QuizEnd({ quiz, navigation }) {

    const restartQuiz = () => {
        window.location.href = '/quiz/start';
    };

    const calculateMark = () => {
        let totalMarks = 0,
            correctCount = 0,
            unattemptedCount = 0,
            incorrectCount = 0;

        // Iterate through each question in the quiz
        quiz.forEach((question) => {
            // If the question has positive marks, increment correct count and add marks to total
            if (question.marks > 0) {
                correctCount++;
                totalMarks += question.marks;
            }
            // If the question has negative marks, decrement incorrect count and add marks to total
            else if (question.marks < 0) {
                incorrectCount++;
                totalMarks += question.marks;
            }
            // If the question has no marks, increment unattempted count
            else {
                unattemptedCount++;
            }
        });

        // Return an object containing the calculated values
        return {
            totalMarks,
            correctCount,
            unattemptedCount,
            incorrectCount
        };
    };

    // StatCard component definition
    const StatCard = ({ title, value, icon, color }) => {
        const iconName = `fa fa-${icon} fa-4x`;
        const bodyClass = `card-body ${color} text-white`;
        return (
            <Col md={2} className="text-center mb-3">
                <Card>
                    <Card.Body className={bodyClass}>
                        <i style={{
                            color: 'rgba(255, 255, 255, 0.2)',
                            position: 'absolute', right: 0, bottom: 0
                        }} className={iconName}></i>
                        <h6 class="text-uppercase">{title}</h6>
                        <h1 class="display-5">{value}</h1>
                    </Card.Body>
                </Card>
            </Col>
        );
    };


    return (
        (() => {
            const marksInfo = calculateMark(); // Calculate marks information

            return (
                <Container>
                    <Row>
                        <Col></Col>
                        <StatCard icon='check' color='bg-success' title="Correct Count" value={marksInfo.correctCount} />
                        <StatCard icon='list' color='bg-info' title="Unattempted" value={marksInfo.unattemptedCount} />
                        <StatCard icon='times' color='bg-danger' title="Incorrect Count" value={marksInfo.incorrectCount} />
                        <StatCard icon='calculator' color='bg-primary' title="Total Marks" value={marksInfo.totalMarks} />
                        <Col></Col>
                    </Row>
                    <Row>
                        <Col></Col>
                        <Col xs={12} md={8}>
                            <Card>

                                <Card.Body>
                                    <Row>
                                        {quiz.map((question, index) => {
                                            let variant = 'secondary';
                                            if (question.marks > 0) {
                                                variant = 'success';
                                            } else if (question.marks < 0) {
                                                variant = 'danger';
                                            }
                                            return (
                                                <>
                                                    <Row className='pt-1'>
                                                        <Col key={index} className="pb-2">
                                                            <h6>Question {question.no}</h6>
                                                        </Col>

                                                        <Col className='d-flex justify-content-end'>
                                                            <div>
                                                                <Badge pill bg={variant}>{question.marks ? question.marks : 0}</Badge>
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
                        <Col></Col>
                    </Row>
                </Container>
            );
        })()
    );

}
