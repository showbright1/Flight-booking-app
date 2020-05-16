import React from 'react';

const ListItem = (props) => {
    return (<div className="list-item">
        <div>{props.title}</div>
    </div>)
}

const List = (props) => {
    return (
        <div className="list">
        { props.listData.map((el, index) => <ListItem title={el.title} />) }
        </div>
    )
}

export default List;