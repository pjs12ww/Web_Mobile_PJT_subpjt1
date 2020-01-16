// 배경사진 + 배경사진설정버튼, 프로필 사진 + 프로필사진설정버튼,
// navbar(Review, 내정보, 좋아요?, 사진?)

import * as React from 'react';
// 타입 확인하는 라이브러리
import * as PropTypes from 'prop-types';

import { makeStyles, Container } from '@material-ui/core'
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Camera from '@material-ui/icons/Camera';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
    mainFeaturedPost: {
      position: 'relative',
      backgroundColor: theme.palette.grey[800],
      color: theme.palette.common.white,
      marginBottom: theme.spacing(4),
      backgroundImage: 'url(https://source.unsplash.com/random)',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
    },
    overlay: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      right: 0,
      left: 0,
      backgroundColor: 'rgba(0,0,0,.3)',
    },
    mainFeaturedPostContent: {
      position: 'relative',
      padding: theme.spacing(3),
      [theme.breakpoints.up('md')]: {
        padding: theme.spacing(6),
        paddingRight: 0,
      },
    },
  }));

export default function MyPageHead(props) {
    const classes = useStyles(props);
    const { post } = props;
  
    return (
      <React.Fragment>
        <div
        className={classes.mainFeaturedPost} 
        style={{ backgroundImage: `url(${post.image})` }}
        >
            {<img style={{ display: 'none' }} src={post.image} alt={post.imageText} />}
            <div className={classes.overlay} />

            
        </div>
      </React.Fragment>
    );
}