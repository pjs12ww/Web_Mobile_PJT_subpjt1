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

// Style 지정해주는 object, className을 통해 연결
const useStyles = makeStyles(theme => ({
    toolbar: {
        borderBottom: `1px solid ${theme.palette.divider}`
    },
    toolbarTitle: {
        // flexible box
        flex: 1,
    },
    toolbarSecondary: {
        // '진행 축' 정렬과 아이템 사이의 간격 제어
        justifyContent: 'end',
        // 오른쪽 왼족 내용이 넘칠 때
        overflowX: 'auto',
    },
    toolbarLink: {
        padding: theme.spacing(1),
        // 주축의 공간이 부족할 때 각 항목의 사이즈를 줄이는 방법
        flexShrink: 0,
    },
}));

export default function Header(props) {
    const classes = useStyles(props);
    const { sections, title } = props;

    return (
        <React.Fragment>
            <Toolbar className={classes.toolbar}>
                <Button size="small">Subscribe</Button>
                <Typography 
                    component="h2"
                    variant="h5"
                    color="inherit"
                    align="center"
                    noWrap
                    className={classes.toolbarTitle}
                >
                    {title}
                </Typography>

                <IconButton>
                    <SearchIcon />
                </IconButton>

                <Button variant="outlined" size="small">
                    Sign up
                </Button>
            </Toolbar>
            <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
                {
                    // nav 항목들
                    sections.map(section => (
                        <Link
                            color="inherit"
                            noWrap
                            key={section.title}
                            variant="body2"
                            href={section.url}
                            className={classes.toolbarLink}
                            >
                                {section.title}
                        </Link>
                    ))
                }
            </Toolbar>

        </React.Fragment>
    );
}

Header.propTypes = {
    sections: PropTypes.array,
    title: PropTypes.string,
};


