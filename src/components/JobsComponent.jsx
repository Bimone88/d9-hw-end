import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchJobs } from "../features/jobs/jobsThunks"; // Verifica che il percorso sia corretto
import {
  addToFavourite,
  removeFromFavourite,
} from "../features/favourites/favouritesSlice"; // Verifica che il percorso sia corretto

const JobsComponent = () => {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector((state) => state.jobs);
  const [companyName, setCompanyName] = useState("");

  // useEffect per caricare i lavori quando il valore di companyName cambia
  useEffect(() => {
    if (companyName) {
      dispatch(fetchJobs(`company=${companyName}`));
    }
  }, [dispatch, companyName]);

  return (
    <div>
      <h1>Lista Lavori</h1>
      <input
        type="text"
        value={companyName}
        onChange={(e) => setCompanyName(e.target.value)}
        placeholder="Inserisci il nome della compagnia"
      />
      <button onClick={() => dispatch(fetchJobs(`company=${companyName}`))}>
        Cerca Lavori
      </button>
      {loading && <p>Caricamento...</p>}
      {error && <p>Errore: {error}</p>}
      <ul>
        {items.map((job) => (
          <li key={job._id}>
            {job.title} presso {job.company_name}
            <button onClick={() => dispatch(addToFavourite(job.company_name))}>
              Aggiungi ai Preferiti
            </button>
            <button
              onClick={() => dispatch(removeFromFavourite(job.company_name))}
            >
              Rimuovi dai Preferiti
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JobsComponent;
