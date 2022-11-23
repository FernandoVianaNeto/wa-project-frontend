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
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    api.get(`/movies/list?page=${page}&itemsPerPage=10`).then((response: any) => {
      setMovies(response.data)
    })
  }, []);

  return (
    <Container>
      <Aside>
        <h1 className='logo'>Wa-Project</h1>
        <p>Menu</p>
      </Aside>
      <Section>
        <Header>
          <h1>Todos os filmes</h1>
          <form>
            <div className='input-container'>
              <CiSearch />
              <input placeholder="Pesquisar filme" type="text" onChange={(event) => setSearchText(event.target.value)} value={searchText} />
            </div>

            <button type="submit">Pesquisar</button>
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
