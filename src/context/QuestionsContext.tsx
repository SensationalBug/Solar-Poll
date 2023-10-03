import React, { createContext, useState } from "react";
import { questionContentQ1 } from "../questions/Question1";
import { questionContentQ2 } from "../questions/Question2";
import { questionContentQ3 } from "../questions/Question3";
import { questionContentQ4 } from "../questions/Question4";

export const QuestionContext = createContext({});

interface props {
    children: JSX.Element;
}

const QuestionProvider = ({ children }: props) => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [zipCode, setZipCode] = useState('');
    const handleNext = () => {
        currentQuestion + 1 === questions.length ?
            setCurrentQuestion((prevQuestion: any) => prevQuestion) :
            setCurrentQuestion((prevQuestion: any) => prevQuestion + 1)
    };
    const handlePrevious = () => {
        !currentQuestion ?
            setCurrentQuestion(0) :
            setCurrentQuestion((prevQuestion: any) => prevQuestion - 1);
    };
    const questions = [
        {
            id: 1,
            title: 'Discover your potential solar savings',
            text: 'And find available incentives and estimates in your area. First: Are you a homeowner?',
            question: questionContentQ1,
        },
        {
            id: 2,
            title: 'Please select your home type',
            text: 'This helps us to determine what type of solar system suits best for your roof.',
            question: questionContentQ2,
        },
        {
            id: 3,
            title: 'Estimate your monthly electric bill',
            text: 'Estimate your monthly electric bill',
            question: questionContentQ3,
        },
        {
            id: 4,
            title: 'What is your zip code?',
            text: 'What is your zip code?',
            question: () => questionContentQ4(zipCode),
        }
    ];

    return (
        <QuestionContext.Provider value={{
            currentQuestion,
            questions,
            handleNext,
            handlePrevious,
            zipCode,
            setZipCode,
        }}>
            {children}
        </QuestionContext.Provider>
    )
}

export default QuestionProvider;