import React, { useEffect, useState } from 'react';
import { Aside, Container, Header, Section } from './styles';
import api from '../../api/api';
import { MovieCard } from '../../components/MovieCard';
import { IMovie } from '../../interfaces/movies.interface';
import * as _ from 'lodash';
import { CiSearch } from 'react-icons/ci';

export function Home() {
  const [movies, setMovies] = useState({ results: [],  _metadata: {} })
  const [page, setPage] = useState(1);
  const [searchText, setSearchText] = useState('Todos os filmes');

  useEffect(() => {
    api.get(`/movies/list?page=${page}&itemsPerPage=10`).then((response: any) => {
      setMovies(response.data)
    });
  }, []);

  useEffect(() => {
    api.get(`/movies/list?page=${page}&itemsPerPage=10&movieName=${searchText}`).then((response: any) => {
      setMovies(response.data)
    });
  }, [searchText])

  console.log(movies)

  return (
    <Container>
      <Aside>
        <h1 className='logo'>Wa-Project</h1>
        <p>Menu</p>
      </Aside>
      <Section>
        <Header>
          <h1> Buscar por: {searchText} </h1>
          <form>
            <div className='input-container'>
              <CiSearch className='icon'/>
              <input placeholder="Pesquisar filme" type="text" onChange={(event) => setSearchText(event.target.value)} value={searchText} />
            </div>
          </form>
        </Header>

        { !_.isUndefined(movies) && movies.results?.map((movie: IMovie) => {
          return (
            <MovieCard
              key={movie._id}
              banner={movie.banner}
              description={movie.description}
              producer={movie.producer}
              director={movie.director}
              title={movie.title}
            />
          )
        })}
      </Section>
    </Container>
  );
}
