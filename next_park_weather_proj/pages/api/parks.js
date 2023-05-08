// import fetch from 'node-fetch';

// export default async (req, res) => {
//   const {
//     stateCode
//   } = req.query;

//   try {
//     const response = await fetch(
//       `https://developer.nps.gov/api/v1/parks?stateCode=${stateCode}`, {
//         headers: {
//           'X-Api-Key': process.env.NEXT_PUBLIC_NPS_API_KEY || '',
//         },
//       }
//     );

//     if (!response.ok) {
//       const errorText = await response.text();
//       console.error('Error fetching parks data from NPS API:', errorText);
//       return res.status(response.status).json({
//         error: 'Error fetching parks data from NPS API'
//       });
//     }

//     const data = await response.json();

//     res.status(200).json(data);
//   } catch (error) {
//     console.error('Error fetching parks data:', error);
//     res.status(500).json({
//       error: 'Error fetching parks data'
//     });
//   }
// };