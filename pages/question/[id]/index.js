
const question = ({ question }) => {
    return (
        <>
            <h1>{question.title}</h1>
            <p>{question.body}</p>
        </>
    )
}


export const getServerSideProps = async (context) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/1`)
    const question = await res.json()
  
    return {
      props: {
        question,
      },
    };
  };

  export default question