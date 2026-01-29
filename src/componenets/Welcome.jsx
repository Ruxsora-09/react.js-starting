function Welcome(props) {
    console.log(props.lang);
    return (
        <>
        <h1>Welcome to {props.lang}</h1>
        <p>I 'love' programming ^_^ </p>
        </>
    )
}

export default Welcome