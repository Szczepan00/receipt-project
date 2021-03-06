import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import {Header} from "./Components/Header/Header";


import { collection, getDocs } from 'firebase/firestore/lite';
import {useEffect, useState} from "react";
import db from './firebase'
import {Navigation} from "./Components/Navigation/Navigation";


export function App() {

    const [data, setData] = useState([]);

    async function getData(db) {
        const dataCol = collection(db, 'bills');
        const dataSnapshot = await getDocs(dataCol);
        const dataList = dataSnapshot.docs.map(doc => doc.data());
        return dataList;
    }

    useEffect(() => {
        getData(db).then(value => setData(value));
    }, []);

  return (
    <div className="App">
        <Header />
        <Navigation  data={data}/>
    </div>
  );
}

export default App;
