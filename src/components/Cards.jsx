import React from 'react';
import Card from "./Card";
import { Fragment } from 'react';

export default function Cards(props) {
  const cardsInfo = props.cards;
  return (
    <>
      <div className="row">
        {cardsInfo.map((cardInfo, index) => {
          return (
            <Fragment key={index}>
              <div className="col-sm-4">
                <Card
                  title={cardInfo.title}
                  imgUrl={cardInfo.imgUrl}
                  content={cardInfo.content}
                />
              </div>
            </Fragment>
          );
        })}
      </div>
    </>
  );
}