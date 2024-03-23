import "./index.css";
import Event from "components/Event";
import PropTypes from "prop-types";
import React from "react";

Events.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.oneOfType([PropTypes.number]),
      title: PropTypes.string,
      description: PropTypes.string,
    })
  ),
};

function Events(props) {
  const eventList = props.events.map(event => {
    return <li key={event.key}><Event eventName={event.title} eventDescription={event.description} /></li>;
  });
  return (
    <ul className="eventList">
      {eventList}
    </ul>
  );
}

export default Events;