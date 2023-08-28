
import {useState} from "react";




export default function Employee(){
    const [formData, setFormData] = useState({
        name: '',
        pan: '',
        mobile: '',
        pincode: '',
      });
    
      const [gridData, setGridData] = useState([]);
    
      const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
    
      const handleSave = () => {
        if (
          formData.name.trim() !== '' &&
          formData.pan.trim() !== '' &&
          formData.mobile.trim() !== '' &&
          formData.pincode.trim() !== ''
        ) {
          setGridData([...gridData, formData]);
          setFormData({
            name: '',
            pan: '',
            mobile: '',
            pincode: '',
          });
        }
      };
    
      return (
        <div className="App">
         
          <div >
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Name"
            />
            <input
              type="text"
              name="pan"
              value={formData.pan}
              onChange={handleInputChange}
              placeholder="PAN Number"
            />
            <input
              type="text"
              name="mobile"
              value={formData.mobile}
              onChange={handleInputChange}
              placeholder="Mobile Number"
            />
            <input
              type="text"
              name="pincode"
              value={formData.pincode}
              onChange={handleInputChange}
              placeholder="Pin Code"
            />
            <button onClick={handleSave}>Save</button>
          </div>
          <table >
          <thead>
            <tr>
              <th>Name</th>
              <th>PAN Number</th>
              <th>Mobile Number</th>
              <th>Pin Code</th>
            </tr>
          </thead>
          <tbody>
            {gridData.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.pan}</td>
                <td>{item.mobile}</td>
                <td>{item.pincode}</td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      );
    }
    
    