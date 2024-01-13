import React from "react";
import { NavLink } from 'react-router-dom';
import css from './Layout.module.css';


export  const Layout = ({ children }) => {
    return (
        <div>
            <header className={css.header}>
                <nav>
                    <ul className={css.headerList}>
                        <li ><NavLink className={css.headerItem} to="/" end>Home</NavLink></li>
                        <li ><NavLink className={css.headerItem} to="/movies">Movies</NavLink></li>
                        <li ><NavLink className={css.headerItem} to="/movies/:movieId">MovieDetails</NavLink></li>
                    </ul>
                </nav>
            </header>
            <main>
                {children}
            </main>
            <footer>Copyright</footer>
        </div>
    );
}