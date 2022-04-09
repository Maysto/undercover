import {
  Button,
  Input,
  InputGroup,
  InputGroupText,
  Row,
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Row className='mb-3'>
          <InputGroup>
            <InputGroupText>
              Nom de compte :
            </InputGroupText>
            <Input
              className='ml-3'
              placeholder='entrez votre mail'
            >
            </Input>
          </InputGroup>
        </Row>
        <Row>
          <InputGroup>
            <InputGroupText>
              Mot de passe :
            </InputGroupText>
            <Input
              className='ml-3'
              placeholder='entrez votre mot de passe'
            >
            </Input>
          </InputGroup>
        </Row>
        <Row className='mt-3'>
          <Button
            color='warning'
          >
            Connexion
          </Button>
          <Button
            className='mt-3'
            color='primary'
            type='link'
          >
            Creer un compte
          </Button>
        </Row>
      </header>
    </div>
  );
}

export default App;
