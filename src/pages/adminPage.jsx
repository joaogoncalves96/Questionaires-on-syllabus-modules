import AddAllQuestionsForm from "../components/AddAllQuestionsForm/AddAllQuestionsForm";
import Collapse from "../components/Collapse/Collapse";

function adminPage() {
   return (
      <>
         <Collapse title="ADD QUESTIONS" closeButtonTitle="CLOSE">
            <AddAllQuestionsForm />
         </Collapse>
      </>
   );
}
export default adminPage;
