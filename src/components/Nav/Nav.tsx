// @flow 
import * as React from 'react';
import classes from "./Nav.module.scss"

type TItem = {
    id: number
    name:string;
    href:string;
}

type Props = {
    items?:TItem[]
}

const createNavItem = (item:TItem) =>{
    return (
        <li key={item.id}>
            <a className={classes.nav__item} href={item.href}>
                {item.name}
            </a>
        </li>
    )
}

export const Nav = (props: Props) => {
    return (
        <div className={"container"}>
            <nav className={classes.nav}>
                <ul>
                    {props.items?.map(item =>
                        createNavItem(item))}
                </ul>
            </nav>
        </div>
    );
};