import React from 'react';
import ReviewsProvider from './ReviewsProvider';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { ThemeContext } from "./../../components/ThemeContext/ThemeContext";


const ReviewsBar = (props) => {
    const { score } = props;
    const { toggle } = React.useContext(ThemeContext);


    // function for calculating the color
    const calcColor = (percent, start, end) => {
        let a = percent / 80,
            b = (end - start) * a,
            c = b + start;

        // return an CSS hsl color string
        return 'hsl(' + (c-15) + ', 80%, 60%)';
    };

    const calcColorLight = (percent, start, end) => {
        let a = percent / 70,
            b = (end - start) * a,
            c = b + start;

        // return an CSS hsl color string
        return 'hsl(' + (c-10) + ', 60%, 50%)';
    };

    return (
        <ReviewsProvider valueStart={0} valueEnd={score} minValue={1}>
            {(value) => (
                <CircularProgressbar
                    value={value*10}
                    text={`${value}`}
                    circleRatio={0.52} /* Make the circle only 0.7 of the full diameter */
                    styles={{
                        trail: {
                            transform: 'rotate(-93deg)',
                            transformOrigin: 'center center',
                            stroke: toggle ?'#B9C6DB':'#252D34',
                            strokeWidth: 0.75
                        },
                        path: {
                            transform: 'rotate(-93deg)',
                            transformOrigin: 'center center',
                            stroke: toggle ? calcColorLight(value * 10, 0, 120) :calcColor(value * 10, 0, 120),
                            strokeWidth: 3.5
                        },
                        text: {
                            fill: toggle ? calcColorLight(value * 10, 0, 120) : calcColor(value * 10, 0, 120),
                            fontSize: 32, 
                            transform: 'translate(0px, -8px)',
                            transformOrigin: 'center center'
                        }
                    }}
                    strokeWidth={10}
                />
            )}
        </ReviewsProvider>
    );
};

export default ReviewsBar;
