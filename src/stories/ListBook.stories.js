import React from 'react';
import ListBook from '../components/ListBook';
import "antd/dist/antd.css";

export default {
    title: 'ListBook',
    component: ListBook,
};

const items = [
    {
        title: "Harry Potter",
        description: "A story about magic world",
    },
    {
        title: "One Piece",
        description: "A story about pirates",
    },
    {
        title: "Naruto",
        description: "A boy never gives up",
    },
];

export const ListBookStory = () =>
    <div style={{margin: '10px'}}>
      <ListBook
          items={items}
      />
    </div>
;

ListBookStory.story = {
    name: 'default',
};
