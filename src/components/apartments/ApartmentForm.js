import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { createApartment } from '../../redux/apartments/apartmentsThunk';
import { resetDeletedError } from '../../redux/apartments/apartmentsSlice';

const ApartmentForm = ({ apartmentId }) => {
  const [formData, setFormData] = useState({
    name: '',
    city: '',
    description: '',
    photo: '',
    price: 0,
  });
  const { accessToken } = useSelector((state) => state.authentication.user);

  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const navigate = useNavigate();
  const resetForm = () => {
    setFormData({
      name: '',
      city: '',
      description: '',
      photo: '',
      price: 0,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(createApartment({ apartment: formData, accessToken }));
    resetForm();
    navigate('/apartments');
  };

  return (
    <form className="space-y-3 p-6 h-screen bg-gray-100 mx-40" onSubmit={handleSubmit}>
    <div>
        <label className="block mb-1 font-bold">Name</label>
        <input type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required className="block w-full p-2 border rounded-lg" />
      </div>
      <div>
        <label className="block mb-1 font-bold">Description</label>
        <input className="block w-full p-2 border rounded-lg"
        type="text"
        name="description"
        value={formData.description}
        onChange={handleInputChange}
        required
        />
      </div>

      <div>
        <label className="block mb-1 font-bold">Photo</label>
        <input className="block w-full p-2 border rounded-lg"
        required
        type="text"
        name="photo"
        value={formData.photo}
        onChange={handleInputChange}
        />
      </div>

      <div>
        <label className="block mb-1 font-bold">City</label>
        <input className="block w-full p-2 border rounded-lg"
        type="text"
        name="city"
        value={formData.city}
        onChange={handleInputChange}
        required
        />
      </div>

      <div>
        <label className="block mb-1 font-bold">Price</label>
        <input className="block w-full p-2 border rounded-lg"
        required
        type="number"
        name="price"
        step={0.01}
        value={formData.price}
        onChange={handleInputChange}
        />
      </div>

      <div className="text-center">
      <button type='submit' className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-800">Add a new apartment</button>
     </div>
    </form>
  );
};

export default ApartmentForm;