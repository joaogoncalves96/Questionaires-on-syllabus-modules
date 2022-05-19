import Link from 'next/link';

function AddAllQuestionsForm() {

    return (
        <>
        <Link href="/addQuestionMultiple">
        <button type="submit">Add Multiple Question</button>
        </Link>
        <Link href="/addQuestionSingle">
        <button type="submit">Add Single Question</button>
        </Link>
        <Link href="/addQuestionTrueOrFalse">
        <button type="submit">Add True or false Question</button>
        </Link>
        </>
    );

}

export default AddAllQuestionsForm;