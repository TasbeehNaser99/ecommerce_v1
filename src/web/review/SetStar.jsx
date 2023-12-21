// import { faStar } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faStar as notsolid } from "@fortawesome/free-regular-svg-icons";
// import React, { useState } from 'react'
// function SetStar({rating,setReview}) {
//     const [key, setKey] = useState(0)
//  const setStar=()=>{
//   }

//   return (
//     <div className="star-review" >
//     {Array.from({ length: 5 }).map((_, index) => (
//       <React.Fragment key={index}>
//         {index < rating ? (
//           <FontAwesomeIcon
//             icon={faStar}
//             className="blue-star"
//             onClick={() => setReview(index)}
//           />
//         ) : (
//           <FontAwesomeIcon
//             icon={notsolid}
//             className="blue-star"
//             onClick={() => setReview(index)}
//           />
//         )}
//       </React.Fragment>
//     ))}
//     <br />
//   </div>
//   )
// }

// export default SetStar