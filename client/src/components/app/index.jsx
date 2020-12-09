import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './index.css';
import HomePage from '../pages/home-page';
import ChatRoom from '../pages/chat-room';
import VideoRoom from '../pages/video-room';
import CreateChatRoom from '../pages/create-chat-room';
import CreateVideoRoom from '../pages/create-video-room';
import Page404 from '../pages/page404';
// import Spinner from '../spinner';

export default function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <HomePage />
      </Route>
      <Route path="/create/chat-room" exact>
        <CreateChatRoom />
      </Route>
      <Route path="/chat-room/:id" exact>
        <ChatRoom />
      </Route>
      <Route path="/create/video-room" exact>
        <CreateVideoRoom />
      </Route>
      <Route path="/video-room/:id" exact>
        <VideoRoom />
      </Route>
      <Route path="*" exact>
        <Page404 />
      </Route>
    </Switch>
  );
}
