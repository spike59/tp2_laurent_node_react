import {Gender} from '../../models/gender.model';
import { useState,useEffect,useRef } from "react";
import {Link,useParams} from 'react-router-dom';
function GenderScreen() {
    const [genders,setGenders] = useState([])
    const {id} = useParams()
    const genderRef = useRef(null)

    useEffect(()=>{
        const fetchData = async()=>{
            const genders = Gender.from(
                await(await (fetch("/data/gender.json"))).json()
            )
            if (id){
                genderRef.current = genders.find((g)=>g.id === +id);
            }
            setGenders(genders)
        }

        fetchData().catch(e=>console.log("error",e))
    },[id])

    const gender = genderRef.current;


    return (
        <div>
            <h1>gender page</h1>
            {!id && (
                <div className='row'>
                    {genders.map((g,k)=>{
                        return(
                            <div key={k}>
                                <p>{g.title}</p>
                                <Link to={"/gender/" + g.id}>voir {g.title}</Link> 
                            </div>
                        )
                    })}
                </div>
            )}
            {
                gender && (
                    <div className='row'>
                        <h2>{gender.title}</h2>
                    </div>
                )
            }
        </div>
    )
}

export default GenderScreen;