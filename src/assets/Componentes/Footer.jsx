import React from "react";
import Table from "react-bootstrap/Table";

class Footer extends React.Component {
  render() {
    return (
      <div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Universo front-end foi desenvolvido em equipe como exercicio final do Curso Programação Front-end.</th>
            </tr>
          </thead>
        </Table>
      </div>
    );
  }
}

export default Footer;
