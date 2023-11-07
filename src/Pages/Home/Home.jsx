import React, { useEffect } from 'react'
import { Badge, Card, Chip, Container, Divider, Flex, Group, SimpleGrid, Space, Title } from "@mantine/core";
import {IconUserCog} from '@tabler/icons-react'
import { useNavigate } from 'react-router-dom';
import { Navbar } from '../../Components/Navbar/Navbar';
import classes from './Home.module.css'
import { useDispatch,useSelector } from 'react-redux';


const Home=()=>{

const dispatch=useDispatch()
const {MainReducer}=useSelector(store=>store)
const navigate=useNavigate()

//by default will fetch the data and will map
    const FetchData=async()=>{
        let search=MainReducer.SearchResult
        let URL=search!==""?`http://localhost:3000/courseModel?q=${search}`:
        'http://localhost:3000/courseModel'
    

        try{
            
        const data=await fetch(URL)
        const response=await data.json()
        dispatch({type:"Home_Data",payload:response})
        }
        catch(error){
        console.log(error)
        }
    }

    

    useEffect(()=>{
        FetchData()
    },[MainReducer.SearchResult])

    
    const MapFetched_Data=MainReducer?.HomeFetched_Data?.map((ele)=>
    <>
    <Card 
    className={classes.card}
    onClick={()=>navigate(`/course/${ele.id}`)}
    key={ele.id} withBorder
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