import React from 'react'
import RoomsFilter from './RoomsFilter'
import RoomsList from './RoomsList'
import {RoomConsumer, withRoomConsumer} from '../context'
import Loading from './Loading'

function RoomContainer({context}) {
    const {loading, sortedRooms, rooms} = context;
    console.log(sortedRooms)
    if(loading) {
        return <Loading />
    }
    console.log(rooms);
        return (
            <>
                <RoomsFilter rooms={rooms}/>
                <RoomsList rooms={sortedRooms} />
            </>
        )
}

export default withRoomConsumer(RoomContainer) 

// export default class RoomContainer extends Component {

//     render() {
//         return (
//             <RoomConsumer>
                
//                 {value => {
//                     const {loading, sortedRooms, rooms} = value;
                    
//                     if(loading) {
//                         return <Loading />
//                     }
//                     console.log(value);
//                         return (
//                             <>
//                                 <RoomsFilter rooms={rooms}/>
//                                 <RoomsList rooms={sortedRooms} />
//                             </>
//                         )
//                     }
//                 }
//             </RoomConsumer>
            
//         )
//     }
// }
