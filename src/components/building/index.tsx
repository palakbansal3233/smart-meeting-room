import './style.css';

const Building = ({ name }: Partial<IBuilding>) => <div className="building">
    <h4>{name}</h4>
</div>


const Buildings = ({buildings}: {buildings: IBuilding[]}) => <div className="buildings">
    <h2>Buildings</h2>
    <h4>Total {buildings.length}</h4>
</div>

export default Buildings;