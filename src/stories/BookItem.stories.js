import React from 'react';
import BookItem from '../components/BookItem';
import "antd/dist/antd.css";

export default {
    title: 'BookItem',
    component: BookItem,
};

export const BookItemStory = () =>
    <div style={{margin: '10px'}}>
      <BookItem
          item={{
              coverUrl: 'https://i.picsum.photos/id/866/200/200.jpg',
              _id: '1',
              title: 'Book Title',
              description: 'This is description',
          }}
      />
    </div>
;

BookItemStory.story = {
    name: 'default',
};
