// @flow
import * as React from 'react';
import {Nav} from "../Nav/Nav";

const navItems = [
    {
        id: 1,
        name:"Обо мне",
        href:"#aboutMe"
    },
    {
        id:2,
        name:"Навыки",
        href:"#skills"
    },
    {
        id:3,
        name:"Проекты",
        href:"#projects"
    },
]

export const Header = () => {
    return (
        <header>
            <Nav
                items={navItems}
            />
        </header>
    );
};