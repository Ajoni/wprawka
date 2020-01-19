import React from 'react';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Typography from '@material-ui/core/Typography';
import { Link as RouterLink } from 'react-router-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom';

export default function Breadcrumb() {
    return <Route>
        {({ location }) => {
            const pathnames = location.pathname.split('/').filter(x => x);
            return (
                <Breadcrumbs aria-label="Breadcrumb">
                    {pathnames.map((value, index) => {
                        const lastOrFirst = index === pathnames.length - 1 || index === 0;
                        const to = `/${pathnames.slice(0, index + 1).join('/')}`;

                        return lastOrFirst ? (
                            <Typography color="textPrimary" key={to}>
                                {value}
                            </Typography>
                        ) : (
                                <RouterLink color="inherit" to={to} key={to}>
                                    {value}
                                </RouterLink>
                            );
                    })}
                </Breadcrumbs>
            );
        }}
    </Route>

}