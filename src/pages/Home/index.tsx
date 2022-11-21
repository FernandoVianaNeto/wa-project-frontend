import React from 'react';
import { Button } from '../../components/Button';
import { Aside, Container, Section } from './styles';

export function Home() {
  return (
    <Container>
      <Aside>
        <h1 className='logo'>Wa-Project</h1>
        <p>Menu</p>
        {/* <Button>Dashboard</Button> */}
      </Aside>
      <Section>
      </Section>
    </Container>
  );
}
