import { useEffect } from 'react';
import { IPlanet, IPlanetResponse } from '../../interfaces';
import Card from '../Card';
import './dataView.css';
import Loader from '../Loader';
import {
  useLoaderData,
  useLocation,
  useNavigate,
  useNavigation,
} from 'react-router-dom';

export default function DataView({ name }: { name: string | null }) {
  const response = useLoaderData() as IPlanetResponse;
  const planets = response.results;
  const navigate = useNavigate();
  const page = new URLSearchParams(useLocation().search).get('page') ?? 1;

  const { state } = useNavigation();

  useEffect(() => {
    if (name !== null) navigate(`?page=${page}&search=${name}`);
  }, [name]);

  return (
    <section className="section section-list">
      {state === 'loading' ? (
        <Loader />
      ) : planets.length ? (
        <ul className="list">
          {planets.map((planet: IPlanet) => {
            return (
              <li className="list__card" key={planet.name}>
                <Card {...planet} />
              </li>
            );
          })}
        </ul>
      ) : (
        <h3>Not founds</h3>
      )}
    </section>
  );
}
