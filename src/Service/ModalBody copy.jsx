import React ,{useState} from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
function ModalBody(props) {
   const [items, setItem] = useState(props.data);
    const [hidden, setHidden] = useState(false);
    return (
        
         <Modal size="lg" show={props.show} onHide={props.handleClose} animation={false}>
        <Modal.Header  >
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row"> 
        <div className="col-md-12">
           {items.map((element) => {
          const { title,desc, image, id, details,rating,reviewcount,price } = element;
          return <>
            <div className="row">
            <div className="col-md-3"><img src={image} alt="" className='round-4' /></div>
            <div className="col-md-9">
              <div className="row">
                <div className="col-md-9">
                  <h5><strong>{title}</strong></h5>
                  <i className="fa fa-star" /> {rating} ({reviewcount})
                  <h4><i className="fa fa-inr" /> {price}</h4>
                  <p>{desc}</p>
                  <div className="row" hidden={hidden}>
                    <div className="col-md-12">
                     
                    </div>
                  </div>
                  <Link onClick={() => setHidden(!hidden)}>View Details</Link>
                </div>
                <div className="col-md-3">
                  <Link to={`${process.env.PUBLIC_URL}/booking`}><button className="btn btn-primary">Book</button></Link>
                </div>
              </div>
            </div>
          </div><hr />
            </>;
        })}
         
        </div>
      </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            Close
          </Button>
         {/*<Button variant="primary" onClick={handleClose}>
            Save Changes
</Button>*/}
        </Modal.Footer>
      </Modal>
      
    )
  }

export default  ModalBody; 