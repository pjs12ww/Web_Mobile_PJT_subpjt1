import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Container } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

import Header from './Header';
import MyPageHead from './MyPageHead';
import MyPageProfile from './MyPageProfile';
import MyPageReview from './MyPageReview';
import MyPageFrinedsList from './MyPageFriendsList';
import MyPageFriendsList from './MyPageFriendsList';

const sections = [
    { title: '정보', url: '#' },
    { title: '상세페이지', url: '#' },
    { title: 'MyReview', url: '#' }
]

// 임시 Profile data
const profile = [
    { title: 'Profile' },
    { title: 'name' },
    { title: 'location' },
    { title: 'prefer_wine_list' }
]

// 임시 Review data
const reviews = [
    {
        profileImg: '',
        name: '카카',
        content: '적셔',

    },
    {
        profileImg: '',
        name: '카카',
        content: '적셔',

    },
    {
        profileImg: '',
        name: '카카',
        content: '적셔',

    }
]

// 임시 친구목록
const friends = [

    {
        name: '김병인',
    },
    {
        name: '김주홍',
    },
    {
        name: '박재성',
    },
    {
        name: '최예슬',
    },
    {
        name: '허대원',
    },
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
                    <Grid container spacing={10} justify="space-between">
                        <MyPageProfile grid-column="1/5" sections={profile} />
                        <MyPageReview grid-column="1/2" reviews={reviews} />
                        <MyPageFriendsList grid-column="1/5" friends={friends} />
                    </Grid>
                </main>
            </Container>
        </React.Fragment>
    );
}