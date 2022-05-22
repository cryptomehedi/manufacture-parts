import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

function CustomLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
            <Link
                // style={{ color: match ? 'green': 'black', textDecoration: match ? "underline" : "none", fontWeight: match ? 'bold' : 'normal'}}
                className={`${match ? 'font-semibold bg-secondary text-white' : 'font-medium'}`}
                to={to}
                {...props}
            >
                {children}
            </Link>
    );
}

export default CustomLink;