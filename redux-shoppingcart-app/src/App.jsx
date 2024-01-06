import { useSelector, useDispatch } from 'react-redux';
import './App.css'
import CartContainer from './components/CartContainer';
import Navbar from './components/Navbar';
import { useEffect } from 'react';
import { calculateTotals } from './features/cart/CartSlice';
import Modal from './components/Modal';

function App() {
  const dispatch = useDispatch();
  const {cartItems} = useSelector( store => store.cart);
  const {isOpen} = useSelector( store => store.modal );
  useEffect(()=>{
    dispatch(calculateTotals());
  }, [cartItems])
  return (
    <main>
      {isOpen && <Modal />}
      <Navbar />
      <CartContainer />
    </main>
  );
}

export default App
