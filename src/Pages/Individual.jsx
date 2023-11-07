import React, { useEffect } from 'react'
import { Badge, Card, Container, Flex, Title,Chip, Space, Text, Group, List, Spoiler, Stepper } from '@mantine/core';
import { useParams } from 'react-router-dom';
import { Navbar } from '../Components/Navbar/Navbar';
import { useDispatch,useSelector } from 'react-redux';



const Individual=()=>{
    const dispatch=useDispatch()
    const {MainReducer}=useSelector(store=>store)
    // console.log(MainReducer,'redux ind')
    const {id}=useParams()
    const Fetch=async()=>{
        const data=await fetch(`http://localhost:3000/courseModel/${id}`)
        const response=await data.json()
        dispatch({type:"SinglePage",payload:response})
    }
    useEffect(()=>{
        Fetch()
    },[])

    
    return(
        <>
        <Navbar/>
        <Container mt='100px' mb='150px'>
        <Card withBorder>
        <Badge m='auto'
        size={'xl'}
        >{MainReducer?.SinglePage_Data?.name}</Badge>
        <Space h="md"/>
        <Title order={4}>Instructor :{" "}{MainReducer?.SinglePage_Data?.instructor}</Title>
        <Space h="md"/>

        <Group display={{base:"block",sm:"flex"}}
        justify='center'
        gap='20px'
        style={{rowGap:"20px"}}
        >
        <Chip>Mode:{" "} {MainReducer?.SinglePage_Data?.location}</Chip>
        <Chip>Duration:{" "} {MainReducer?.SinglePage_Data?.duration}</Chip>
        <Chip c='red'>Enrollment:{" "}{MainReducer?.SinglePage_Data?.enrollmentStatus}</Chip>
        </Group >
        <Space h="md"/>
        <Text c='dimmed'>Des:{" "}{MainReducer?.SinglePage_Data?.description}</Text>
        <Text fw='600'>Schedule:{" "}{MainReducer?.SinglePage_Data?.schedule}</Text>
        <Group m='auto'>
        <Text fw='600' size='lg'>Prerequisites</Text>
        <List>
        {MainReducer?.SinglePage_Data?.prerequisites?.map((ele,index)=>
            <List.Item key={index}>{ele}</List.Item>)}
        </List>
        </Group>
        <Space h='100px'/>
        <Title order={3} ta='center'>Subjects</Title>
        <Space h='lg'/>
        <Spoiler m='auto' showLabel='Read more' hideLabel='Hide'>
        <Stepper orientation='vertical'>
        {MainReducer?.SinglePage_Data?.syllabus?.map((sub,index)=>
            <Stepper.Step key={index}
            label={sub.topic} description={sub.content}
            ></Stepper.Step>
            )
            }
        </Stepper>
        
        </Spoiler>
        <Space h='xl'/>
        
        </Card>
        </Container>
        </>)
}
export default Individual;