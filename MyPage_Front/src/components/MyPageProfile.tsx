// MyPageProfile
// Main 내 Grid 중 왼쪽에 위치
// 해상도가 줄어들면 없어지도록 설정 필요
// 내용은 Profile 이라는 맨 윗단 + { 이름, 활동지역, 선호 주류, 선호 안주?... etc }
// border 를 통해 내용 구분 

import * as React from 'react';
// 타입 확인하는 라이브러리
import * as PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core'
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
        <React.Fragment>
            <div>
                {
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
        </React.Fragment>
    );
}