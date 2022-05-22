import Questionaire from "../components/Questionaire/Questionaire";
import Collapse from "../components/Collapse/Collapse";
import CollapseCategory from "../components/CollapseCategory/CollapseCategory";
import Footer from "../components/Footer/Footer";

function Homepage() {
   return (
      <>
         <article>
            <h1>QUESTIONAIRES</h1>
         </article>
         <CollapseCategory photo_icon="https://arquivo.devmedia.com.br/noticias/artigos/artigo_javascript-reduce-reduzindo-uma-colecao-em-um-unico-objeto_37981.jpg">
            <Collapse title="Questionaire 1" closeButtonTitle="Close">
               <Questionaire id={8} />
            </Collapse>
            <Collapse title="Questionaire 2" closeButtonTitle="Close">
               <Questionaire id={9} />
            </Collapse>
            <Collapse title="Questionaire 3" closeButtonTitle="Close">
               <Questionaire id={10} />
            </Collapse>
            <Collapse title="Questionaire 4" closeButtonTitle="Close">
               <Questionaire id={11} />
            </Collapse>
         </CollapseCategory>
         <CollapseCategory photo_icon="https://professor-falken.com/wp-content/uploads/2017/07/Como-detectar-si-Javascript-esta-deshabilitado-en-el-navegador-web-professor-falken.com_.jpg">
            <Collapse title="Questionaire 1" closeButtonTitle="Close">
               <Questionaire id={5} />
            </Collapse>
            <Collapse title="Questionaire 2" closeButtonTitle="Close">
               <Questionaire id={6} />
            </Collapse>
            <Collapse title="Questionaire 3" closeButtonTitle="Close">
               <Questionaire id={7} />
            </Collapse>
         </CollapseCategory>{" "}
         <CollapseCategory photo_icon="https://miro.medium.com/max/800/1*MVaraOOVG-gVUkirc9g2tA.png">
            {" "}
            <Collapse title="Questionaire 1" closeButtonTitle="Close">
               <Questionaire id={1} />
            </Collapse>
            <Collapse title="Questionaire 2" closeButtonTitle="Close">
               <Questionaire id={2} />
            </Collapse>
            <Collapse title="Questionaire 3" closeButtonTitle="Close">
               <Questionaire id={3} />
            </Collapse>
            <Collapse title="Questionaire 4" closeButtonTitle="Close">
               <Questionaire id={4} />
            </Collapse>
         </CollapseCategory>
         <CollapseCategory photo_icon="https://cdn.metring.com.br/categories/10/thumbnail.jpg">
            {" "}
            <Collapse title="Questionaire 1" closeButtonTitle="Close">
               <Questionaire id={12} />
            </Collapse>
            <Collapse title="Questionaire 2" closeButtonTitle="Close">
               <Questionaire id={13} />
            </Collapse>
            <Collapse title="Questionaire 3" closeButtonTitle="Close">
               <Questionaire id={14} />
            </Collapse>
            <Collapse title="Questionaire 4" closeButtonTitle="Close">
               <Questionaire id={15} />
            </Collapse>
         </CollapseCategory>
         <Footer />
      </>
   );
}
export default Homepage;
