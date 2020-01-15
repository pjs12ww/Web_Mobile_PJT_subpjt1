import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import Header from './Header';
import { Container } from '@material-ui/core';

const sections = [
    { title: '정보', url: '#' },
    { title: '상세페이지', url: '#' },
    { title: 'MyReview', url: '#' }
]

export default function MyPage() {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="lg">
                <Header title="MyReview" sections={sections} />
            </Container>
        </React.Fragment>
    );
}