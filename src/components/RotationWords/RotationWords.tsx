// @flow
import * as React from 'react';
import {useEffect, useMemo, useState} from "react";
import classes from "./RotationWords.module.scss"

type TWord = {
    id: number,
    text: string,
}

type Props = {
    words: TWord[]
    // in pixels
    radius:number
    duration: number
}

const getWordItem = (word:TWord) => {
    return (
        <div key={word.id}>
            {word.text}
        </div>
    )
}

let currentWordIndex = 0;
const getNextWords = (words:TWord[]) => {
    currentWordIndex++;
    if (currentWordIndex>= words.length)
        currentWordIndex = 0
    return words[currentWordIndex].text
}

function circlePath(cx:number, cy:number, r:number){
    return 'M '+cx+' '+cy+' m -'+r+', 0 a '+r+','+r+' 0 1,0 '+(r*2)+',0 a '+r+','+r+' 0 1,0 -'+(r*2)+',0';
}

let interval: NodeJS.Timer | null = null
let timout: NodeJS.Timer | null = null
export const RotationWords = (props: Props) => {
    const cx = props.radius;
    const cy = props.radius;
    const r = props.radius;
    const padding = 10;
    const [currentWord, setCurrentWord] = useState(()=>getNextWords(props.words))

    useEffect(()=>{
        if (timout)
            clearTimeout(timout)
        timout = setTimeout(()=>{
            if (interval)
                clearInterval(interval)
            interval = setInterval(()=>{
                setCurrentWord(getNextWords(props.words))
            },props.duration * 1000)
        },props.duration * 1000 / 100 * 30)
    },[])
    return (
        <div className={classes.currentLetters} style={{animationDuration:props.duration+"s"}}>
            <svg width={r*2+padding*2+"px"} height={r*2+padding*2+"px"}>
                <path d={circlePath(cx+padding,cy+padding,r)}
                      fill="transparent" id="tophalf"></path>
                <circle
                    cx={cx+padding +"px"}
                    cy={cy+padding +"px"}
                    r={r/10}
                    fill={"white"}
                />
                <text style={{font: "initial"}} >
                    <textPath xlinkHref="#tophalf" startOffset="0%" style={{animationDuration:props.duration+"s"}}>{currentWord}</textPath>
                </text>
            </svg>
        </div>
    );
};