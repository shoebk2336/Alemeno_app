import React from 'react'
import { Badge, Card, Chip, Container, Divider, Flex, Group, SimpleGrid, Space, Title } from "@mantine/core";
import { useState } from "react";
import {IconUserCog} from '@tabler/icons-react'
import { useNavigate } from 'react-router-dom';
import { Navbar } from '../../Components/Navbar/Navbar';
import classes from './Home.module.css'



const Home=()=>{

const navigate=useNavigate()
const [Fetched_Data,setFetched_Data]=useState([])
console.log(Fetched_Data,'fetched data')

    const FetchData=async()=>{

        try{
        const data=await fetch('http://localhost:3000/courseModel')
        const response=await data.json()
        setFetched_Data(response)
        }
        catch(error){
        console.log(error)
        }
    }


    useState(()=>{
        FetchData()
    },[])

    
    const MapFetched_Data=Fetched_Data?.map((ele,index)=>
    <>
    <Card 
    className={classes.card}
    onClick={()=>navigate(`/course/${index}`)}
    key={index} withBorder
    p='10px'
    >
    <Badge
    m='auto'
    size={{base:"sm",sm:'md'}}
    >{ele?.name}</Badge>
    <Title order={4}
    leftSection={<IconUserCog/> }
    >{ele?.instructor}</Title>
    <Title order={6}>(Instructor)</Title>
    <Space h='md'/>
    <Divider/>
    <Space h='md'/>
    <Flex justify='space-between'>
    <Chip>{ele?.location}</Chip>
    <Divider orientation='vertical'/>
    <Chip>{ele?.duration}</Chip>
    </Flex>
    <Space h='md'/>
    <Badge fullWidth>Enrollment:{" "} {ele?.enrollmentStatus}</Badge>
    </Card>
    </>
    )


    return(<>
        <Navbar/>
        <Container size='md' mt='100px'>
        <SimpleGrid cols={{base:1,sm:3}}>
        {MapFetched_Data}
        </SimpleGrid >
        </Container>
        </>)
}
export default Home;