import './style.css';

const Meetings = ({meetingsMeta}: {meetingsMeta: IMeetingMeta}) => <div className="meetings">
    <h2>Meetings:</h2>
    <h4>{
            `Total ${meetingsMeta.todayMeetingCount} today`}</h4>
            <h4>{
            `Total ${meetingsMeta.onGoingMeetingCount} Going on now`}</h4>
        
</div>

export default Meetings;