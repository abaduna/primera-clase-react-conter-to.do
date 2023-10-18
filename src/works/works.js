import {Container,Row,Col,Form,Button} from "react-bootstrap"
import  {useState} from "react"
const Work =()=>{
    //{id:string    , tile:string,description:string}
    const [task, setTask] = useState([])
    const [showTask, setShowTask] = useState(true)


    const createTask =(e)=>{
        //importante poner esto para no envie cosas el server
        e.preventDefault();
        // console.log(e.target)
        let [title, descripcion] = e.target.elements
        title=title.value.trim()
        descripcion=descripcion.value.trim()
        setTask([
            {
                id:1, title,descripcion
            }
        ])
    }

    return(

            <Container>
                <Row>
                    <Col md={6} xs={12}>
                        <h3>taks</h3>
                        <Form onSubmit={createTask}>
                            <Form.Group>
                                <Form.Label>titulo de la tarea</Form.Label>
                                <Form.Control placeholder="Tarea" name="title"></Form.Control>

                                <Form.Label>description de la tarea</Form.Label>
                                <Form.Control placeholder="descripcion" name="descripcion"></Form.Control>
                            </Form.Group>
                            <Button className="btn btn-danger mt-3" type="submit">Crear tarea</Button>
                        </Form>
                    </Col>
                </Row>

            </Container>


    )
}

export default  Work