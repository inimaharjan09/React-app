// import React from 'react'
// import ButtonCompo from './components/ButtonCompo';

// export default function App() {
//   const greetEvent = (username) => {
//     alert(username);
//   }
//   return (
//     <div className='p-5'>


//       <ButtonCompo greetEvent={greetEvent} />




//     </div>
//   )
// }

import React from 'react'

export default function ButtonCompo() {
  return (
    <div>
      <button onClick={handleUser} className=''></button>
      
    </div>
  )
}