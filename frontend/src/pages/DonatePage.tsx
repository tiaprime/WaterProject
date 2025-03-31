import { useNavigate, useParams } from 'react-router-dom';
import Welcome from '../components/Welcome';
import { useCart } from '../context/CartContext';
import { useState } from 'react';
import { CartItem } from '../types/CartItem';

function DonatePage() {
  const navigate = useNavigate();
  const { projectName, projectId } = useParams();
  const { addToCart } = useCart();
  const [donationAmount, setDonationAmount] = useState<number>(0);

  const handleAddToCart = () => {
    const newItem: CartItem = {
      projectId: Number(projectId),
      projectName: projectName || 'No Project Found',
      donationAmount,
    };
    addToCart(newItem);
    navigate('/cart');
  };

  return (
    <>
      <Welcome />
      <h2>Donate to {projectName}</h2>

      <div>
        <input
          type="number"
          placeholder="Enter donation amount"
          value={donationAmount}
          onChange={(x) => setDonationAmount(Number(x.target.value))}
        />
        <button onClick={handleAddToCart}> Add to cart</button>
      </div>

      {/* <button onClick={() => navigate('/projects')}>Go Back</button> */}
      {/* This will send you back to the previous page */}
      <button onClick={() => navigate(-1)}>Go Back</button>
    </>
  );
}

export default DonatePage;
