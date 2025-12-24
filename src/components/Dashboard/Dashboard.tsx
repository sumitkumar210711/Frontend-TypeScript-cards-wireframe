import type {JSX} from 'react';
import Sidebar from './Sidebar';
import Cards from './Cards/Cards';


const Dashboard = ():JSX.Element =>{

    return(
        <div className='mainbg'>
            <div className='body-container bg-gray-100 '>
                <div className='sidebar bg-gray-100 shadow shadow-xl shadow-gray-400 '>
                    <Sidebar />  
                </div>

                <div className='cards-container '>
                    <Cards />
                    </div>
            </div>
            </div>
        
    )
}

export default Dashboard;
