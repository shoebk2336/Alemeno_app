import React, { useEffect ,useState} from 'react'
import { Badge, Card, Container, Flex, Title,Chip, Space, Text, Group, List, Spoiler, Stepper } from '@mantine/core';
import { useParams } from 'react-router-dom';
import { Navbar } from '../Components/Navbar/Navbar';



const Individual=()=>{
    const {id}=useParams()
    const [Fetched_Data,setFetched_Data]=useState([])
    console.log(Fetched_Data,'indi data')
    const Fetch=async()=>{
        const data=await fetch(`http://localhost:3000/courseModel/${id}`)
        const response=await data.json()
        setFetched_Data(response)
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
        >{Fetched_Data?.name}</Badge>
        <Space h="md"/>
        <Title order={4}>Instructor :{" "}{Fetched_Data?.instructor}</Title>
        <Space h="md"/>

        <Group display={{base:"block",sm:"flex"}}
        justify='center'
        gap='20px'
        style={{rowGap:"20px"}}
        >
        <Chip>Mode:{" "} {Fetched_Data?.location}</Chip>
        <Chip>Duration:{" "} {Fetched_Data?.duration}</Chip>
        <Chip c='red'>Enrollment:{" "}{Fetched_Data?.enrollmentStatus}</Chip>
        </Group >
        <Space h="md"/>
        <Text c='dimmed'>Des:{" "}{Fetched_Data?.description}</Text>
        <Text fw='600'>Schedule:{" "}{Fetched_Data?.schedule}</Text>
        <Group m='auto'>
        <Text fw='600' size='lg'>Prerequisites</Text>
        <List>
        {Fetched_Data?.prerequisites?.map((ele,index)=>
            <List.Item key={index}>{ele}</List.Item>)}
        </List>
        </Group>
        <Space h='100px'/>
        <Title order={3} ta='center'>Subjects</Title>
        <Space h='lg'/>
        <Spoiler m='auto' showLabel='Read more' hideLabel='Hide'>
        <Stepper orientation='vertical'>
        {Fetched_Data?.syllabus?.map((sub,index)=>
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