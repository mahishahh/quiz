import React from "react";
import { Link } from "react-router-dom";

export default function QuizStart() {
    return (
        <>
            <div className="row">
                <div className="col text-center py-5">
                    <strong className="display-1 text-primary">Quiz</strong>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col text-center">
                    <h2>Test Your C++ Knowledge!</h2>
                    <p>Are you ready to challenge yourself with some C++ questions?</p>
                    <p>Click the button below to start the quiz!</p>
                </div>
            </div>
            <div className="row">
                <div className="col text-center">
                    <Link to="/quiz/start">
                        <button className="btn btn-primary btn-lg px-5 py-3">
                            Start Quiz
                        </button>
                    </Link>
                </div>
            </div>
        </>
    );
}
