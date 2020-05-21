import React from 'react';
import LoginForm from '../components/LoginForm';
import "antd/dist/antd.css";

export default {
    title: 'LoginForm',
    component: LoginForm,
};

export const LoginFormStory = () =>
    <div style={{margin: '10px'}}>
      <LoginForm />
    </div>
;

LoginFormStory.story = {
    name: 'default',
};
