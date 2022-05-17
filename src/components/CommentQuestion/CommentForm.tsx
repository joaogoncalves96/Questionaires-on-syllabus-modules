import { useContext } from "react";
import { SessionContext } from "../Auth/SessionContext";

function CommentForm() {
    const session = useContext(SessionContext);

    return (
        <form>
            <textarea></textarea>
            <button>Submit as {session.name}</button>
        </form>
    );
}

export { CommentForm };
