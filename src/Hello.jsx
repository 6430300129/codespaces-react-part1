import './Hello.css';

export default function Hello({firstname,lastname="kiki", age=20}){
    return (<><h1>Hello World {firstname}{lastname}{age}</h1></>);
}

