import { useState } from 'react';
import DataView from '../DataView';
import FormSearch from '../FormSearch';
import Paginator from '../Paginator';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { resetCurrentCard } from '../../store/slices/currentCardSlice';
import FlyOut from '../FlyOut/FlyOut';

import './main.css';

export default function Main() {
  const [name, setName] = useState<null | string>(null);
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const onSubmitNameApp = (name: string) => {
    setName(name);
  };

  const handleClickOutside = (event: React.MouseEvent<HTMLDivElement>) => {
    const { target } = event;
    if (!(target instanceof HTMLElement)) return;
    if (location.pathname.includes('/details/')) {
      navigate(`/${location.search}`, { replace: true });
    }
    // navigate(`/${location.search}`, { replace: true });
    dispatch(resetCurrentCard());
  };

  return (
    <section className="main-wrap">
      <div className="left-section" onClick={handleClickOutside}>
        <h1>Planets</h1>
        <FormSearch onSubmitName={onSubmitNameApp} />
        <hr />
        <DataView name={name} />
        <Paginator />
        <FlyOut />
      </div>
      <div className="right-section">
        <Outlet />
      </div>
    </section>
  );
}
