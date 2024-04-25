import react, { useState } from 'react';
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from 'reactstrap';

function Example(props) {
  const [open, setOpen] = useState('1');
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };

  return (
    <div>
      <Accordion open={open} toggle={toggle}>
        <AccordionItem>
          <AccordionHeader targetId="1">Linguagens Básicas(HTML e CSS)</AccordionHeader>
          <AccordionBody accordionId="1">
          A página tratará de como é importante a estrutura do HTML e a 
        estilização do CSS no projeto de um site, demonstrando com imagens 
        (salvas no próprio projeto) e vídeos postados via link o desenvolvimento 
        dessas ferramentas, que são a porta de entrada para essa área de conhecimento, 
        além de sites para pesquisa de documentação dos vários recursos disponibilizados, 
        como o site w3school.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="2">JavaScript</AccordionHeader>
          <AccordionBody accordionId="2">
          A página demonstrará que essa linguagem permite a funcionalidade do site, portanto a programação do mesmo. No site serão disponibilizadas imagens (salvas no próprio projeto) e vídeos via link explicando o funcionamento da linguagem, além de sites para pesquisa de documentação dos vários recursos disponibilizados em JavaScript, como o site w3school.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="3">Bootstrap</AccordionHeader>
          <AccordionBody accordionId="3">
          Esta página falará da importância de se construir um site com responsividade, e que esse framework CSS facilita esse trabalho. Imagens e vídeos serão postados na página, assim como site de pesquisa sobre documentação do recurso.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="4">Json Server</AccordionHeader>
          <AccordionBody accordionId="4">
          Nesta página um texto apresentará a importância dessa ferramenta textual, que possibilita a transferência de dados entre servidor e cliente. Imagens e vídeos também serão utilizados para ilustrar seu funcionamento. Pode-se criar o link na página home, ou dentro da página do JavaScript, pois é uma forma de notação dos objetos JavaScript.          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="5">API</AccordionHeader>
          <AccordionBody accordionId="5">
          A página falará desse conjunto de regras e definições que permitem que diferentes sistemas e programas de computador se comuniquem entre si. O recurso será apresentado com a utilização do mesmo para apresentar imagens sobre o tema, ou a utilização de um exemplo de tema para ilustrar sua funcionalidade.          
          </AccordionBody>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default Example;

/*function Conteudo() {
  return (
    <div>
      <h1>Linguagens Básicas(HTML e CSS)</h1>
      <p>A página tratará de como é importante a estrutura do HTML e a 
        estilização do CSS no projeto de um site, demonstrando com imagens 
        (salvas no próprio projeto) e vídeos postados via link o desenvolvimento 
        dessas ferramentas, que são a porta de entrada para essa área de conhecimento, 
        além de sites para pesquisa de documentação dos vários recursos disponibilizados, 
        como o site w3school.</p>
    </div>
  );
}

export default Conteudo;*/
