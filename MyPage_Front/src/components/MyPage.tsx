import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Container } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

import Header from './Header';
import MyPageHead from './MyPageHead';
import MyPageProfile from './MyPageProfile'


const sections = [
    { title: '정보', url: '#' },
    { title: '상세페이지', url: '#' },
    { title: 'MyReview', url: '#' }
]

const profile = [
    { title: 'Profile' },
    { title: 'name' },
    { title: 'location' },
    { title: 'prefer_wine_list'}
]

const mainFeaturedPost = {
    title: 'Title of a longer featured blog post',
    description:
      "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
    image: 'https://source.unsplash.com/random',
    imgText: 'main image description',
    linkText: 'Continue reading…',
};

export default function MyPage() {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="lg">
                <Header title="MyReview" sections={sections} />
                <MyPageHead post={mainFeaturedPost} />
                <main>
                    <Grid container spacing={5}>
                        <MyPageProfile sections={profile}/>
                        {/* <Main />
                        <FriendList /> */}
                    </Grid>
                    <Grid>
                        
                    </Grid>
                    <Grid>
                        
                    </Grid>
                </main>
            </Container>
        </React.Fragment>
    );
}