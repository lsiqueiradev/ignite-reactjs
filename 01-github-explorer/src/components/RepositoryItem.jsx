function RepositoryItem ({ repository }) {
  return (
    <li>
      <strong>{repository.name ?? 'No name'}</strong>
      <p>{repository.description}</p>

      <a href={repository.link}>
        Acessar repositório
      </a>
    </li>
  );
}

export { RepositoryItem };

