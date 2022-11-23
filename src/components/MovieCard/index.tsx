import React from 'react';
import { Container, Footer } from './styles';

export interface IMovies {
  title: string,
  banner: string,
  description: string,
  director: string,
  producer: string
}


export function MovieCard({ banner, title, description, director, producer }: IMovies) {
  return (
    <Container>
      <img src={banner} alt={`${title} banner`} />
      <p className='title'>{title}</p>
      <p className='description'>{description}</p>
      <Footer>
        <p>
          Director: <span>{director}</span>
        </p>
        <p>
          Producer: <span>{producer}</span>
        </p>
      </Footer>
    </Container>
  );
}
