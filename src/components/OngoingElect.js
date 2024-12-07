import { Link } from 'react-router-dom';
import Apc from '../Img/apc-logo.png'

const OngoingElect = () => {

const results ={
    totalVotes: 1483032,
    startDate: "26 Feb 2019 09:00 AM",
    endDate: "26 Feb 2019 18:00 PM",
}
const candidates = [
    { percent: 23.3, party: 'APC', },
    { percent: 23.3, party: 'APC', },
  ];
const candidatess = [
    { percent: 23.5, party: 'APC', },
    { percent: 23.6, party: 'APC', },
  ];
    
    return(
        <div className=" max-w-sm xs:mx-3 xm:mx-auto my-3 bg-gradient-to-r  from-yellow-400 to-yellow-200 py-6 px-3 rounded-lg shadow-lg">
            <Link to='/election-card' >
                <div className='flex justify-between'>
                    <h1 className="text-xs font-semibold mb-2">2019 Presidential Election Result</h1>
                    <p className='text-xs'>Ongoing</p>
                </div>
                <div className=''>
                    <p className='text-xxs font-normal'>Total Votes</p>
                    <p className='text-lg font-bold tracking-widest text-left'>{results.totalVotes.toLocaleString()}</p>
                </div>
                <p className='text-xxs mb-2 font-normal'>Party Votes</p>
                <div className='flex text-white justify-between'>
                    {candidates.map((candidate) => (
                    <div key={candidate.percent} className="max-w-32 flex items-center justify-between p-2 bg-gradient-to-r from-blue-500 to-black rounded-lg">
                        <div>
                            <img
                                src={Apc}
                                alt={`${candidate.party} Logo`}
                                className="w-10 h-8 object-contain"
                            />
                            <p className="text-xs font-semibold text-center">{candidate.party}</p>
                        </div>
                        <p className="text-xl text-center ml-1 text-white font-normal">{candidate.percent}%</p>
                    </div>
                    ))}
                </div>
                <div className='flex text-white justify-between mt-3'>
                    {candidatess.map((candidates) => (
                    <div key={candidates.percent} className="max-w-32 flex items-center justify-between p-2 bg-gradient-to-r from-blue-500 to-black rounded-lg">
                        <div>
                            <img
                                src={Apc}
                                alt={`${candidates.party} Logo`}
                                className="w-10 h-8 object-contain"
                            />
                            <p className="text-xs font-semibold text-center">{candidates.party}</p>
                        </div>
                        <p className="text-xl text-center ml-1 font-normal">{candidates.percent}%</p>
                    </div>
                    ))}
                </div>
                <div className='flex flex-row mt-3 justify-between'>
                    <p className='text-xxs font-normal'>Date Started: {results.startDate}</p>
                    <p className='text-xxs font-normal'>Date Ended:   {results.endDate}</p>
                </div>
            </Link>
        </div>
    )
}

export default OngoingElect;