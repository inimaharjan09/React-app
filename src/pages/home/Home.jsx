// import React from 'react'
// import { useRef } from 'react';
// import { useState } from 'react';

// export default function Home() {

//   // const handleClick =()=>{
//   //   const h2Element = document.querySelector('h2');
//   //   h2Element.style.color='blue';
//   // }

//   const [some, setSome]= useState();
//   const ref = useRef(0);
//   console.log(ref);
  
//   const increment =()=>{
//     ref.current++;
//     console.log(ref);

//     setSome((prev)=>{
//       ref.current=prev;
//       return prev+1;
//     });
//     console.log(ref.current);
//   }
//   console.log('render');

//   return (
//     <div>
//       {/* <input type="text" placeholder='focus' />
//       <h2>Hello World</h2>
//       <button onClick={handleClick}>Click to Change</button> */}
      
//       <h1>{ref.current}</h1>
//       <button onClick={increment}>Click to Increment</button>
//     </div>
//   )
// }




// import React, { useRef, useState } from 'react';

// export default function Home() {
//   const [some, setSome] = useState(0);
//   const ref = useRef(0);

//   console.log(ref);

//   const increment = () => {
//     ref.current++; 
//     console.log(ref.current);

//     setSome((prev) => prev + 1); 
//   };

//   console.log('render');

//   return (
//     <div>
//       <h1>{some}</h1>
//       <button onClick={increment}>Click to Increment</button>
//     </div>
//   );
// }



// import React, { useRef } from 'react';

// export default function Home() {
//   const inputRef = useRef();
//   const videoRef = useRef();

//   const handlePlayVideo = () => {
//     if (videoRef.current) {
//       videoRef.current.play();
//     }
//   };

//   return (
//     <div>
//       <input type="text" ref={inputRef} placeholder="hello world" />
//       <button onClick={handlePlayVideo}>Play video</button>
//       <video ref={videoRef} className="h-[200px]" src="https://flutter.github.io/assets-for-api-docs/assets/videos/butterfly.mp4"></video>
//     </div>
//   );
// }


import React from 'react'

export default function Home() {
  
  setTimeout(()=>{
    console.log('hello');
  },1000)
  console.log('hi world');


  return (
    <div>
      
    </div>
  )
}

