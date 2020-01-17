// MyPageProfile
// Main 내 Grid 중 오른쪽에 위치
// 해상도가 줄어들면 없어지도록 설정 필요
// 가입한 클럽 위에 오도록 설정? => 기능 추가?
// 친구목록


import * as React from 'react';
// 타입 확인하는 라이브러리
import * as PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core'
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles(theme => ({
    friend: {
        padding: theme.spacing(1),
    },
}));

export default function MyPageFriendsList(props) {
    const classes = useStyles(props);
    const { friends } = props;
    return (
        <React.Fragment>
            <div>
                {
                    friends.map(section => (
                        <div
                            color="inherit"
                            key={section.id}
                            className={classes.friend}
                        >
                            {section.name}
                        </div>
                    ))}
            </div>
        </React.Fragment>
    );
}

MyPageFriendsList.propTypes = {
    friends: PropTypes.array,
};