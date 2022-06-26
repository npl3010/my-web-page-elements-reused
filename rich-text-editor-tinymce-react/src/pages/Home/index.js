import React from 'react';
import Editor from "src/components/Editor";

function Home(props) {
    return (
        <div className='home-wrapper' style={{ padding: '30px 50px' }}>
            <Editor />
        </div>
    );
}

export default Home;