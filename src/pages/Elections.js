import OngoingElect from '../components/OngoingElect'; 
import UpcomingElect from '../components/UpcomingElect';
import LastElectionResult from '../components/LastElectionResult'


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