import './style.css';

export const MeetingRoom = ({ name, floor, isAvailable }: Partial<IMeetingRoom>) => <div className={`meeting-room ${isAvailable === false ? "occupied": ""}`}>
    <h4>
        {name}
    </h4>
    { floor && <div>Floor: {floor}</div>}
</div>


const MeetingRooms = ({ meetingRooms }: { meetingRooms: IMeetingRoom[] }) => <div className="meeting-rooms">
    {/* <h2>Rooms: Total {meetingRooms.length} out of which {"5"} are free</h2> */}
    <h2>Rooms</h2>
    <h4>Total {meetingRooms.length}</h4>
    <h4>Free Now</h4>
    <div className="container">
        {meetingRooms.map((meetingRoom: IMeetingRoom) => <MeetingRoom key={meetingRoom.id} name={meetingRoom.name} isAvailable={meetingRoom.isAvailable} />)}
    </div>
</div>

export default MeetingRooms;