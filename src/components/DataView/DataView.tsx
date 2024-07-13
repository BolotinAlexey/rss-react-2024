import { useEffect } from 'react';
import { IPlanet, IPlanetResponse } from '../../interfaces';
import Card from '../Card';
import './dataView.css';
import Loader from '../Loader';
import { useLoaderData, useNavigate, useNavigation } from 'react-router-dom';

export default function DataView({ name }: { name: string | null }) {
  const response = useLoaderData() as IPlanetResponse;
  const planets = response.results;
  const navigate = useNavigate();

  const navigation = useNavigation();
  const isLoader =
    navigation.location &&
    new URLSearchParams(navigation.location.search).has('search') &&
    !navigation.location.pathname.includes('details');

  useEffect(() => {
    if (name !== null) navigate(`?page=1&search=${name}`);
  }, [name]);

  return (
    <section className="section section-list">
      {isLoader ? (
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
