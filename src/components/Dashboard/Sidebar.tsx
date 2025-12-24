import type{JSX} from 'react';
import './sidebar.css'

const Sidebar = ():JSX.Element=>{
    return(
        <div className='flex flex-col items-center mt-28 gap-12 '>
        <div className='sidebar-box1 bg-white  w-[250px] shadow shadow-xl'>
            <img src="data:image/jpeg;base64,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" 
            className='h-14 w-14 img'
            />
            <div>
                    <p className='font-bold text-xl'>Hi Reader,</p>
                    <p className='mt-[-3px]'>Here's your News!</p>
            </div>
        </div>
        <div className='sidebar-box2 bg-white h-16 w-[250px] shadow shadow-lg'>
            <h1 className='font-bold text-2xl'> View Toggle</h1>
            <div className='flex flex-row '>
                  <button>

                  </button>
                  <button>

                  </button>
            </div>
        </div>
        <div className='sidebar-box2 bg-white w-[250px]'>
            <h1 className='font-bold text-2xl'> Have a Feedback?</h1>
            <div className='flex flex-row '>
                  <button className='listen1 font-bold text-lg bg-green-300 h-12'>We're Listening</button>
            </div>
        </div>
        
        </div>
       
    )
}

export default Sidebar;