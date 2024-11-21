import { useState } from 'react';
import { Button, Modal } from 'antd';
// import { products } from '../../data';

const AntModal = ({ data }) => {
  // console.log("DATA:", data)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Button onClick={showModal} style={{
        backgroundColor: "grey",
        height: "60px",
        color: "#fc5e5e",
        width: "90%"
        
      }}>
        <span style={{color: "white", fontWeight: "bold"}}>Описание процесса производства</span>
        
      </Button>
      <Modal title={data.itemName} style={{color: "red"}} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>

        <div>
 
        <h2 style={{color: "red", padding: "10px"}}>Описание процесса: </h2>
        {/* <br></br> */}

        {data.detailsProcess?  <p>{data.detailsProcess}</p> : <p>not data yet</p>}

             
   
        {/* <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p> */}

</div>
      </Modal>
    </>
  );
};

export default AntModal
