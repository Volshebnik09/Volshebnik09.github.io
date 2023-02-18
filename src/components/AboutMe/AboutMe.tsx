// @flow
import * as React from 'react';
import {RotationWords} from "../RotationWords/RotationWords";
import classes from "./AboutMe.module.scss"
const words = [
    {
        id: 1,
        text: "Hello world"
    },
    {
        id: 2,
        text: "html, css"
    },
    {
        id: 3,
        text: "React, Redux"
    },
    {
        id: 4,
        text: "Typescript"
    },
    {
        id: 5,
        text: "Pug, scss"
    }
]

export const AboutMe = () => {
    return (
        <section className={classes.section} id={"aboutMe"}>
            <div className={"container"}>
                <h1 className={classes.section__title}>
                    Привет, меня зовут Григорий<br/>
                    Я <span>«frontend» </span>разработчик
                </h1>

                <div className={classes.section__aboutMe}>
                    <p className={classes.section__text}>
                        В основном веду разработку веб интерфейсов,
                        бывает ситуации в которых приходится делать backend для различных приложений.
                        За спиной имею коммерчиский опыт написания сайтов под ключ.
                        Кроме того что я люблю писать код я так же люблю помогать людям и играть на музыкальных инструментах.
                    </p>
                    <div className={classes.section__aboutMe__rotationWords}>
                        <RotationWords
                            words={words}
                            radius={50}
                            duration={4}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};