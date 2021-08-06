import React, { useEffect, useState } from "react";
import "./styles.css";
import {
  InsertAuthor,
  GetAuthor,
  // GetAuhorByID,
  DeleteAuthor,
  UpdateAuthor,
} from "../../services/api";
import {
  Form,
  Button,
  Container,
  Row,
  Card,
  Col,
  Alert,
} from "react-bootstrap";

function Autor() {
  const INITIAL_STATE = {
    id: 0,
    name: "",
    birthdate: "",
    nationality: "",
    biography: "",
  };

  const [author, setAuthor] = useState(INITIAL_STATE);
  const [update, setUpdate] = useState(false);
  const [listAuthor, setListAuthor] = useState([]);
  const [show, setShow] = useState(false);

  async function LoadAuthor() {
    const data = await GetAuthor().then((resposnse) => {
      return resposnse;
    });
    setListAuthor(data);
  }

  useEffect(() => {
    LoadAuthor();
  }, []);

  useEffect(() => {}, [author]);

  async function SaveAuthor() {
    if (!update || (!author.name === "" && !author.biography === "")) {
      const data = author;
      await InsertAuthor(data);
      setShow(true);
    } else {
      await UpdateAuthor(author);
      setUpdate(false);
      setShow(true);
    }

    cleanField();
    LoadAuthor();
  }

  async function delete_author(id) {
    if (window.confirm("Você tem certeza que deseja deletar?")) {
      await DeleteAuthor(id);
      LoadAuthor();
    }
  }

  async function detail_author(id) {
    setUpdate(true);

    const clsAutor = listAuthor.filter((item) => item.id === id);
    if (clsAutor.length > 0) {
      const author = clsAutor[0];
      setAuthor(author);
    }
  }

  function cleanField() {
    setAuthor(INITIAL_STATE);
  }

  return (
    <Container fluid>
      <Row>
        <div style={{ minHeight: 110 }}></div>
        <div className="col-6">
          <div className="container-fluid text-center mb-4">
            Listagem de autor - Quantidade {listAuthor.length}{" "}
          </div>

          {listAuthor.map((item, index) => (
            <Card className="mb-3" key={index}>
              <Card.Body>
                <div className="d-flex justify-content-between">
                  <div id="desc">
                    <div>
                      <strong>Nome: </strong> {item.name}{" "}
                    </div>
                    <div>
                      <strong> Aniversario: </strong> {item.birthdate}{" "}
                    </div>
                    <div>
                      <strong> Nacionalidade: </strong> {item.nationality}
                    </div>
                    <div>
                      <strong> Biografia: </strong> {item.biography}{" "}
                    </div>
                  </div>
                  <div id="button">
                    <Button
                      variant="warning"
                      type="button"
                      onClick={() => {
                        detail_author(item.id);
                      }}
                      size="md"
                    >
                      Detalhe
                    </Button>{" "}
                    <Button
                      variant="danger"
                      type="button"
                      onClick={() => {
                        delete_author(item.id);
                      }}
                      size="md"
                    >
                      Delete
                    </Button>{" "}
                  </div>
                </div>
              </Card.Body>
            </Card>
          ))}
        </div>

        <div className="col-6">
          <div className="container-fluid text-center mb-4">
            Cadastro de autor
          </div>

          <div>
            <Form.Group as={Row} className="mb-3 flex " controlId="name">
              <Form.Label column sm={2}>
                Nome:
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  type="text"
                  placeholder="nome"
                  value={author.name}
                  onChange={(e) =>
                    setAuthor({ ...author, name: e.target.value })
                  }
                  onBlur={() => author.name}
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3 flex " controlId="nationality">
              <Form.Label column sm={2}>
                Nacionalidade:
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  type="text"
                  placeholder="nacionalidade"
                  value={author.nationality}
                  onChange={(e) =>
                    setAuthor({ ...author, nationality: e.target.value })
                  }
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3 flex " controlId="birthdate">
              <Form.Label column sm={2}>
                Aniversario:
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  type="date"
                  placeholder="aniversario"
                  value={author.birthdate}
                  onChange={(e) =>
                    setAuthor({ ...author, birthdate: e.target.value })
                  }
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3 flex " controlId="biography">
              <Form.Label column sm={2}>
                Biografia:
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  type="text"
                  placeholder="biografia"
                  value={author.biography}
                  onChange={(e) =>
                    setAuthor({ ...author, biography: e.target.value })
                  }
                  maxLength="255"
                />
              </Col>
            </Form.Group>
          </div>
          <div className="d-grid gap-2">
            {!update ? (
              <Button
                variant="primary"
                type="button"
                onClick={() => SaveAuthor()}
                size="md"
              >
                Salvar
              </Button>
            ) : (
              <Button
                variant="warning"
                type="button"
                onClick={() => SaveAuthor()}
                size="md"
              >
                Atualizar
              </Button>
            )}
          </div>

          <div className="mt-3">
            <Alert show={show} variant="success">
              <Alert.Heading>Sucesso</Alert.Heading>
              <p>Cadastro realizado !!!</p>
              <hr />
              <div className="d-flex justify-content-end">
                <Button
                  onClick={() => setShow(false)}
                  variant="outline-success"
                >
                  Fechar
                </Button>
              </div>
            </Alert>
          </div>
        </div>
      </Row>
    </Container>
  );
}

export default Autor;
