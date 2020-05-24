import React from "react";
import {Modal} from "react-bootstrap";
import {Button} from "react-bootstrap";
import './StartModal.css';

const StartModal = (props) => {

    const [timeLeft, setTimeLeft] = React.useState(props.data.interval);

    const calculateTimeLeft = () => {
        if (timeLeft > 1) {
        return timeLeft -1
        } else {
            return "Done!"
        };
    };

      React.useEffect(() => {
        setTimeout(() => {
          setTimeLeft(calculateTimeLeft());
        }, 1000);
      });

      const onModalClose = () => {
        props.onHide();
      };

    return (
        <Modal className="startModal" onHide={onModalClose} show={props.show} centered>
            <Modal.Header closeButton>
                <h1>Training gestartet</h1>
            </Modal.Header>
            <Modal.Body>
                <h2>Time: {props.data.interval}, keep going: {timeLeft}</h2>
                <h2>Pause: {props.data.pause}</h2>
            </Modal.Body>
            <Modal.Footer>
                <Button className="modalButton" onClick={onModalClose}>STOP</Button>
            </Modal.Footer>
        </Modal>
    )
};

export default StartModal;


//const calculateTimeLeft = () => {
//      count -1;
//   };
//
//   const [timeLeft, setTimeLeft] = useState(props.data.interval);
//
//   useEffect(() => {
//     setTimeout(() => {
//       setTimeLeft(calculateTimeLeft());
//     }, 1000);
//   });
//
//   return (
//     <div>
//       {time ? timerComponents : <span>Time's up!</span>}
//     </div>
//   );
// }