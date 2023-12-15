import Tags from "./Tags"
import {
  MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage} from 'mdb-react-ui-kit';


const MyCard = ({nombre, img, descripcion, textButton, bgColor}) => {
  return (
    <>
   
      <MDBCard className="card">
      <MDBCardImage src={img} position='top' alt='...' width={200} height={200}/>
      <MDBCardBody>
        <MDBCardTitle><h2>{nombre}</h2></MDBCardTitle>
        <MDBCardText>
          {descripcion}
        </MDBCardText>
        <Tags textButton={textButton} bgColor={bgColor}/>
      </MDBCardBody>
    </MDBCard>
    
    </>
  )
}

export default MyCard