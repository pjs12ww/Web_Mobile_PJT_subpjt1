// MyPageReview
// 글 작성 버튼 => 누르면 작성 page
// 직성 page => 위치, tag검색 기능, 이모티콘 기능 구현?
// 내가 작성한 Review들 모음
// Review => 맨위 profile 사진 + 작성자, 작성시간 / 작성 내용 / 좋아요 / 댓글 /

import * as React from 'react';
// 타입 확인하는 라이브러리
import * as PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core'
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import ThumbUpAlt from '@material-ui/icons/ThumbUpAlt'

const useStyles = makeStyles(theme => ({
    writing: {
        padding: theme.spacing(1),
    },
    review: {
        padding: theme.spacing(1),
    }
}));

export default function MyPageReview(props) {
    const classes = useStyles(props);
    // props => Review list 포함
    // Review list => {img, writer, date, contents}
    const { reviews, } = props;
    
    return (
        <React.Fragment>
            <div>
                <div className={classes.writing}>
                    <Button variant="contained" size="small">작성하기</Button>
                </div>
                <div>
                    {
                        reviews.map(review => (
                            <div 
                            className={classes.review}
                            key={review.id}>
                                <div>
                                    <img src={review.profileImage} alt=""/>
                                    <Typography 
                                    variant="h6"
                                    color="inherit"
                                    align="center"
                                    noWrap>
                                        {review.name}
                                    </Typography>
                                </div>
                                <div>
                                <Typography 
                                    variant="body1"
                                    color="inherit"
                                    align="center"
                                    noWrap>
                                        {review.content}
                                    </Typography>
                                </div>
                            </div>
                            
                        ))
                    }
                </div>

            </div>
        </React.Fragment>
    );
}

MyPageReview.propTypes = {
    reviews: PropTypes.array,
};