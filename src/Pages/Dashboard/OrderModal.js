import React from 'react';
import { toast } from 'react-toastify';

const OrderModal = ({ openModal, setOpenModal }) => {
    const handelDeleteOrder = (id) => {
        fetch(`http://localhost:5000/order/delete/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {

                if (data.acknowledged) {
                    setOpenModal(null);

                    toast("Order delete Successfully");
                }
            });
    }
    return (
        <div>
            <input type="checkbox" id="order-delete-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-xl text-center text-orange-500">Do you want to cancel your order?</h3>

                    <div className='flex justify-end'>
                        <div className="modal-action">
                            <button onClick={() => handelDeleteOrder(openModal._id)} className="btn mr-4 bg-orange-500">Yes</button>
                        </div>
                        <div className="modal-action">
                            <label htmlFor="order-delete-modal" className="btn">Close</label>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default OrderModal;