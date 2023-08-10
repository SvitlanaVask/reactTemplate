import PropTypes from 'prop-types';
import {Event} from 'components/Event/Event'
import css from './EventsBoard.module.css'

export const EventsBoard = ({events}) => {
    console.log(events);
    return (
    <div className={css.eventsBoard}>
        {events.map(({name, location, speaker, type, time}) => (
        <Event 
        key={name} 
        name={name} 
        location={location} 
        speaker={speaker} 
        type={type}
        start={time.start}
        end={time.end}/>
        ))}
    </div>
)}

EventsBoard.propTypes ={
    events: PropTypes.arrayOf(
        PropTypes.exact({
            name: PropTypes.string.isRequired,
            location: PropTypes.string.isRequired,
            speaker: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            time: {
                start: PropTypes.string.isRequired,
                end: PropTypes.string.isRequired,
            }
        
        })
    )
}