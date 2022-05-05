import React, { DragEventHandler, FC } from 'react';
import { Client, Task } from './Tasks/Tasks';
import './Overdue.css';
import aibar from './../assets/aibar.jpg';

export type Props = {
  item: [];
};

const Overdue: FC<Props> = ({ item }) => {
  function dragStartHandler(e: any) {
    console.log(e);
  }
  function dragEndHandler(e: any) {}
  function dragOverHandler(e: any) {}
  function dropHandler(e: any) {}

  return (
    <div className='overdue__item'>
      {item.map((client: Client) => {
        return (
          <div className='item-name' draggable={true}>
            <div className='item-name__container'>
              <div className='item-name__time'>
                {new Date(client.createTimestamp).toLocaleString()}
              </div>

              <div className='item-name__title'>{client.clientName}</div>
            </div>
            <div className='item-name__image'>
              <img src={aibar} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Overdue;
