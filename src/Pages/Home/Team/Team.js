import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Title from '../../Shared/Title';
import Teammember from './Teammember';

const Team = () => {
    const [teams,setTeams] = useState([])

    useEffect(()=>{
        fetch('https://genius-car-server-nu-opal.vercel.app/team')
        .then(res=>res.json())
        .then(data=>{
            setTeams(data)
        })
    },[])

    const content = {
        head:"team",
        title:'Meet Our Team',
        des:"the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
    }

    return (
        <div className='py-16'>
            <Title content={content}></Title>
            <div className='grid grid-cols-3 gap-10'>
            {
                teams.map(team=><Teammember key={team._id} team={team}></Teammember>)
            }
            </div>
        </div>
    );
};

export default Team;