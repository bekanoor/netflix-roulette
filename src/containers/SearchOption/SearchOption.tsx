interface IProps {
  typeSwitcher: (value: string) => void
}

const SearchOption = (props: IProps) => {
  const switchColor = (event: React.MouseEvent<HTMLElement>) => {
    const eventTarget = event.currentTarget as HTMLElement;
    if (eventTarget.classList.contains('option-list__button--active')) {
      return
    }

    const buttons = document.querySelectorAll('.option-list__button')
    const firstBtn = buttons[0]
    const secondBtn = buttons[1]

    const condition = firstBtn.classList.contains('option-list__button--active')

    if (condition) {
      firstBtn.classList.remove('option-list__button--active')
      secondBtn.classList.add('option-list__button--active')
    } else {
      secondBtn.classList.remove('option-list__button--active')
      firstBtn.classList.add('option-list__button--active')
    }
  }

  const handlerChange = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const eventTarget = event.target as HTMLElement;

    switchColor(event)
    props.typeSwitcher(eventTarget.innerText)
  }

  return (
    <nav>
      <ul className='option-list'>
        <li className='option-list__item'>
          <p>search by</p>
        </li>
        <li className='option-list__item'>
          <button
            onClick={handlerChange}
            className='option-list__button option-list__button--active'
          >
            title
          </button>
        </li>
        <li className='option-list__item'>
          <button onClick={handlerChange} className='option-list__button'>
            genre
          </button>
        </li>
      </ul>
    </nav>
  )
}

export { SearchOption }
