import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../Context/UserContext';

const User = () => {
    const {currentWorkspace} = useContext(AuthContext);
    console.log(currentWorkspace);
    return (
        <div className="overflow-x-auto w-full">
        <table className="table w-full">
         
          <thead>
            <tr>
              <th>
                
              </th>
              <th>Name</th>
              <th>Address</th>
              <th>Status</th>
              <th>Delete</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
          
            <tr>
              <th>
                
              </th>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fcavu.co%2Fwp-content%2Fuploads%2Favatars%2F2%2F620419ee726d5-bpthumb.jpg&imgrefurl=https%3A%2F%2Fcavu.co%2Fwriting-better-user-stories-and-why-they-are-so-important%2F&tbnid=np6FFofFRCfZaM&vet=10CAwQxiAoA2oXChMI8IHQoa75_AIVAAAAAB0AAAAAEAc..i&docid=pbzsvyet3KKzDM&w=150&h=150&itg=1&q=user&ved=0CAwQxiAoA2oXChMI8IHQoa75_AIVAAAAAB0AAAAAEAc" alt="Avatar Tailwind CSS Component" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Hart Hagerty</div>
                    <div className="text-sm opacity-50">United States</div>
                  </div>
                </div>
              </td>
              <td>
                Zemlak, Daniel and Leannon
                <br/>
                <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
              </td>
              <th>
                <button className="btn btn-ghost btn-xs">details</button>
              </th>
              <td><button className="bg-red-600 rounded text-white px-2 hover:bg-red-500">Delete</button></td>
            </tr>
           
            <tr>
              <th>
                
              </th>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.freepnglogos.com%2Fuploads%2Fman-png%2Fman-your-company-formations-formation-registrations-10.png&imgrefurl=https%3A%2F%2Fwww.freepnglogos.com%2Fpics%2Fman&tbnid=rfbwN4a-l5pN5M&vet=12ahUKEwj9_vjYsPn8AhXVALcAHaa2AuAQMygFegUIARDRAQ..i&docid=LGeEziETUwrbsM&w=936&h=907&q=men%20png&ved=2ahUKEwj9_vjYsPn8AhXVALcAHaa2AuAQMygFegUIARDRAQ" alt="Avatar Tailwind CSS Component" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Brice Swyre</div>
                    <div className="text-sm opacity-50">China</div>
                  </div>
                </div>
              </td>
              <td>
                Carroll Group
                <br/>
                <span className="badge badge-ghost badge-sm">Tax Accountant</span>
              </td>
              <td>Red</td>
              <td><button className="bg-red-600 rounded text-white px-2 hover:bg-red-500">Delete</button></td>
            </tr>
          
            <tr>
              <th>
                
              </th>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fw7.pngwing.com%2Fpngs%2F315%2F234%2Fpng-transparent-graphy-young-blond-man-men-s-health-male-man.png&imgrefurl=https%3A%2F%2Fwww.pngwing.com%2Fen%2Fsearch%3Fq%3DMale%2BMan&tbnid=SDI1KHRYWAlQSM&vet=12ahUKEwj9_vjYsPn8AhXVALcAHaa2AuAQMygCegUIARDLAQ..i&docid=Ixoi45M9ELiDfM&w=920&h=1200&q=men%20png&ved=2ahUKEwj9_vjYsPn8AhXVALcAHaa2AuAQMygCegUIARDLAQ" alt="Avatar Tailwind CSS Component" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Marjy Ferencz</div>
                    <div className="text-sm opacity-50">Russia</div>
                  </div>
                </div>
              </td>
              <td>
                Rowe-Schoen
                <br/>
                <span className="badge badge-ghost badge-sm">Office Assistant I</span>
              </td>
              <td>Crimson</td>
              <td><button className="bg-red-600 rounded text-white px-2 hover:bg-red-500">Delete</button></td>
            </tr>

            <tr>
              <th>
                
              </th>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.pngplay.com%2Fwp-content%2Fuploads%2F15%2FMen-Background-PNG-Image.png&imgrefurl=https%3A%2F%2Fwww.pngplay.com%2Fimage%2Ftag%2Fmen&tbnid=l1RnuY_sCRJ3EM&vet=12ahUKEwj9_vjYsPn8AhXVALcAHaa2AuAQMygGegUIARDTAQ..i&docid=8bNpS767CfAusM&w=495&h=684&q=men%20png&ved=2ahUKEwj9_vjYsPn8AhXVALcAHaa2AuAQMygGegUIARDTAQ" alt="Ava" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Yancy Tear</div>
                    <div className="text-sm opacity-50">Brazil</div>
                  </div>
                </div>
              </td>
              <td>
                Wyman-Ledner
                <br/>
                <span className="badge badge-ghost badge-sm">Community Outreach Specialist</span>
              </td>
              <td>Indigo</td>
              <td><button className="bg-red-600 rounded text-white px-2 hover:bg-red-500">Delete</button></td>
            </tr>
          </tbody>
       
     
          
        </table>
      </div>
    );
};

export default User;