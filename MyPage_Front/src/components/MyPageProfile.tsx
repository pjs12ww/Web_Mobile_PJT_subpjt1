import * as React from 'react';
// 타입 확인하는 라이브러리
import * as PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core'
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles(theme => ({
    content: {
        borderBottom: `1px solid ${theme.palette.divider}`
    },
}));

export default function MyPageProfile(props) {
    const classes = useStyles(props);
    const { sections } = props;
    return (
        <div>
            {// nav 항목들
                sections.map(section => (
                    <div
                        color="inherit"
                        key={section.title}
                        className={classes.content}
                        >
                            {section.title}
                    </div>
                ))}
        </div>
    );
}