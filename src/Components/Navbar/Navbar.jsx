import React from 'react'
import { Autocomplete, Group, Burger, rem, Image } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconSearch } from '@tabler/icons-react';
import classes from './Navbar.module.css';
import Logo from '../../utils/Images/Logo.png'
import { useNavigate } from 'react-router-dom';

const links = [

{ link: '/dashboard', label: 'Dashboard' },
];

export function Navbar() {
    const navigate=useNavigate()
const [opened, { toggle }] = useDisclosure(false);

const items = links.map((link) => (
    <a
    key={link.label}
    href={link.link}
    className={classes.link}
    onClick={(event) => event.preventDefault()}
    >
    {link.label}
    </a>
));

return (
    <header className={classes.header}>
    <div className={classes.inner}>
        <Group>
        <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
        <Image 
        className={classes.logo}
        onClick={()=>navigate('/')}
        src={Logo} sizes='24'/>
        
        </Group>

        <Group>
        <Group ml={50} gap={5} className={classes.links} visibleFrom="sm">
            {items}
        </Group>
        <Autocomplete
            className={classes.search}
            placeholder="Search"
            leftSection={<IconSearch style={{ width: rem(16), height: rem(16) }} stroke={1.5} />}
            data={['React', 'Angular', 'Vue', 'Next.js', 'Riot.js', 'Svelte', 'Blitz.js']}
            visibleFrom="xs"
        />
        </Group>
    </div>
    </header>
);
}