import React, { useEffect, useState } from 'react'
import { Button, Card, Container, Flex, Grid, Image, Progress, Space, Stack, Text, Title } from "@mantine/core"
import  classes from './Dashboard.module.css'
import { useNavigate } from 'react-router-dom'
import { Navbar } from '../../Components/Navbar/Navbar'
import { useDispatch,useSelector } from 'react-redux'


const Dashboard=()=>{
    const dispatch=useDispatch()
    const {MainReducer}=useSelector(store=>store)
    const [isCompleted,setCompleted]=useState([])

    
    const MapStudent=MainReducer?.Dashboard?.map((el,id)=>
    el?.students.map((student)=>
    <Card 
    className={classes.card}
    withBorder key={student.id}>
    <Flex 
    justify='space-between' 
    align='center'
    >
    <Stack>
    <Title order={4}>{student.name}</Title>
    <Text >{student.email}</Text>
    </Stack>
    <Stack>
    <Title order={4}>
    {el.instructor}
    </Title>
    <Text fw='600'>(Instructor)</Text>
    </Stack>
    <Stack>
    <Image src={el.thumbnail} width={70} height={70}/>
    <Progress value={MainReducer.CourseCompleted.includes(student.id)?100:45}/>
    <Text fw='600'>{isCompleted.includes(student.id)?'Completed':"In progress"}</Text>
    
    <Button onClick={()=>dispatch({type:"Course_Completed",payload:student.id})}
    disabled={MainReducer.CourseCompleted.includes(student.id)}
    >Mark as Complete</Button>
    </Stack>
    </Flex>
    </Card>
    )
    
    )
    const Fetch=async()=>{
        try{
            const data=await fetch('http://localhost:3000/courseModel')
            const response=await data.json()
            dispatch({type:"Dashboard",payload:response})
            }
            catch(error){
            console.log(error)
            }
    }
    useEffect(()=>{
        Fetch()
    },[])
    return(
        <>
        <Navbar/>
        <Container size='md'>
        <Title>
        Student Dashboard
        </Title>
        <Space h='xl'/>
        <Stack>
        {MapStudent}
        </Stack>
        </Container>
        </>
        )
}
export default Dashboard

// <Button onClick={()=>MarkCompleted(student.id)}
//     disabled={isCompleted.includes(student.id)}
//     >Mark as Complete</Button>