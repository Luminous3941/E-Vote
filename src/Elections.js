import OngoingElect from './OngoingElect'; 
import UpcomingElect from './UpcomingElect';
import LastElectionResult from './LastElectionResult'


const Elections = () =>{
    return(
        <div>
            <UpcomingElect/>
            <OngoingElect/>
            <LastElectionResult/>
        </div>
    )
}

export default Elections;