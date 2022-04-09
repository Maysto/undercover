import { Input, InputGroup, InputGroupText, Row } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Undercover
        <Row className='mb-3 mt-3'>
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
        <Row className=''>
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
      </header>
    </div>
  );
}

export default App;
