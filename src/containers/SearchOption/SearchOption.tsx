const SearchOption = () => {
  return (
    <nav>
      <ul className='option-list'>
        <li className="option-list__item">
          <p>search by</p>
        </li>
        <li className="option-list__item">
          <button className="option-list__button option-list__button--active">title</button>
        </li>
        <li className="option-list__item">
          <button className="option-list__button">genre</button>
        </li>
      </ul>
    </nav>
  );
};

export { SearchOption }