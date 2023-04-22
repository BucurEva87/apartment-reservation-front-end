import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../redux/authentication/authenticationThunk';

const RegistrationForm = () => {
  const authentication = useSelector((state) => state.authentication);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'user',
  });
  const [selectedRole, setSelectedRole] = useState('user');
  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRoleChange = (event) => {
    setSelectedRole(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await dispatch(register({ ...formData, role: selectedRole }));
  };

  return <>
    { authentication.error && <h3 className="textError">{ authentication.error.join('/n') }</h3> }
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-10 rounded-lg shadow-xl transform transition-all w-2/3 max-w-md hover:scale-105">
        <h1 className="text-2xl font-bold mb-8 text-center">Register</h1>
        <form className="space-y-5" onSubmit={handleSubmit}>
        <div>
            <label className="block mb-1 font-bold">Name</label>
            <input type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required className="block w-full p-2 border rounded-lg" />
          </div>
          <div>
            <label className="block mb-1 font-bold">Email</label>
            <input type="email" className="block w-full p-2 border rounded-lg" name="email" value={formData.email} onChange={handleInputChange} required />
          </div>

          <div>
            <label className="block mb-1 font-bold">Password</label>
            <input type="password" name="password" value={formData.password} onChange={handleInputChange} required className="block w-full p-2 border rounded-lg" />
          </div>
          <div>
            <label className="block mb-1 font-bold">Confirm Password</label>
            <input type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              required className="block w-full p-2 border rounded-lg" />
          </div>
          <div>
        <label className="block mb-1 font-bold">Select a role</label>
         <select id="role" className="block w-full p-2 border rounded-lg" value={selectedRole} onChange={handleRoleChange}>
             <option value="user">User</option>
             <option value="admin">Admin</option>
           </select>
          </div>
          <div className="text-center">
          <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">Register</button>
        </div>
        </form>
      </div>
    </div>
    </>;
};

export default RegistrationForm;
