import React, { FC } from 'react';
import { Props } from './Overdue';
import { Client } from './Tasks/Tasks';
import aibar from './../assets/aibar.jpg';

const TomorrowTasks: FC<Props> = ({ item }) => {
  return (
    <div className='overdue__item'>
      {item.map((client: Client) => {
        return (
          <div className='item-name'>
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

export default TomorrowTasks;
