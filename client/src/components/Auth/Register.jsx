import { useRef, useState, useEffect } from "react";
import {faCheck, faTimes, faInfoCircle} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import axios from "axios";

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const REGISTER_URL = "/register"

const Register = () => {

    const userRef = useRef();
    const errRef = useRef();

    const [username, setUsername] = useState("");
    const [validName, setValidName] = useState(false);
    const [usernameFocus, setUsernameFocus] = useState(false);

    const [password, setPassword] = useState("");
    const [validPassword, setValidPassword] = useState(false);
    const [passwordFocus, setPasswordFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState("");
    const [validMatch, setvalidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [errMsg, setErrMsg] = useState("");
    const [sucess, setSuccess] = useState(false);

    // useEffect(() => {
    //     userRef.current.focus();
    // }, [])

    useEffect(() => {
        const result = USER_REGEX.test(username);
        console.log(result);
        console.log(username);
        setValidName(result)
    }, [username])

    useEffect(() => {
        const result = PWD_REGEX.test(password);
        console.log(result)
        console.log(password)
        setValidPassword(result);
        const match = password === matchPwd;
        setvalidMatch(match);
    }, [password, matchPwd])

    useEffect(() => {
        setErrMsg("");
    }, [username, password, matchPwd])

    return (
        <section>
            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
            <h1>Register</h1>
            <form>
                <label htmlFor="username">
                    Username:
                    <FontAwesomeIcon icon={faCheck} className={validName ? "valid" : "hide"} />
                    <FontAwesomeIcon icon={faTimes} className={validName || !username ? "hide" : "invalid"} />
                </label>
                <input 
                    type="text" 
                    id="username"
                    ref={userRef}
                    autoComplete="off"
                    onChange={e => setUsername(e.target.value)}
                    value={username}
                    required
                    aria-invalid={validName ? "false" : "true"}
                    aria-describedby="uidnote"
                    onFocus={() => setUsernameFocus(true)}
                    onBlue={() => setUsernameFocus(false)}
                />
            </form>
        </section>
    )
}

export default Register