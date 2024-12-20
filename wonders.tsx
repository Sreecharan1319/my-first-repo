//import React from 'react'

export default function EmpSal() {
  const empData = [
    {
      name: "Taj Mahal",
      location: "Agra",
      country: "India",
      url: "https://upload.wikimedia.org/wikipedia/commons/c/c8/Taj_Mahal_in_March_2004.jpg",
    },

    {
      name: "Great Wall of China",
      location: "China",
      country: "China",
      url: "https://upload.wikimedia.org/wikipedia/commons/6/6f/The_Great_Wall_of_China_at_Jinshanling.jpg",
    },

    {
      name: "Petra",
      location: "Ma'an",
      country: "Jordon",
      url: "https://upload.wikimedia.org/wikipedia/commons/b/b7/The_Monastery%2C_Petra%2C_Jordan8.jpg",
    },

    {
      name: "Colosseum",
      location: "Rome",
      country: "Italy",
      url: "https://upload.wikimedia.org/wikipedia/commons/a/af/Rome_Colosseum_exterior_panorama.jpg",
    },

    {
      name: "Chichén Itzá",
      location: "Yucatán",
      country: "Mexico",
      url: "https://upload.wikimedia.org/wikipedia/commons/7/7a/Chichen-Itza-Castillo-Seen-From-East.JPG",
    },

    {
      name: "Machu Picchu",
      location: "Cuzco Region",
      country: "Peru",
      url: "https://upload.wikimedia.org/wikipedia/commons/e/eb/Machu_Picchu%2C_Peru.jpg",
    },

    {
      name: "Christ the Redeemer",
      location: "Rio de Janeiro",
      country: "Brazil",
      url: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Unique_Moment_with_the_Moon_and_Christ_the_Redeemer_3.jpg",
    },

    {
      name: "Giza Pyramids",
      location: "Giza Necropolis",
      country: "Egypt",
      url: "https://upload.wikimedia.org/wikipedia/commons/9/96/Pyramids_of_the_Giza_Necropolis.jpg",
    }
  ];

  // () => ()

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Location</th>
            <th scope="col">Country</th>
            <th scope="col">Images</th>
          </tr>
        </thead>
        <tbody>
          {empData.map((x) => (
            <tr>
              <td>{x.name}</td>
              <td>{x.location}</td>
              <td>{x.country}</td>
              <td>
                <img src={x.url} style={{height:"100px" , width:"100px" , display:"flex", justifyContent:"center"}}/>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
