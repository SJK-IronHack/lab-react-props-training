
function Greetings(lang,children){
    switch(lang){
        case "en":
            return <h1>Hello {children}</h1>
        case "de":
            return <h1>Hallo {children}</h1>
        case "es":
            return <h1>Hello {children}</h1>
        case "fr":
            return <h1>Bonjour {children}</h1>
        default:
            return <h1>Hello {children}</h1>
    }
}
export default Greetings;