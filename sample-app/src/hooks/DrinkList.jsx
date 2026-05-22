
const DrinkList = ({drinks}) => {

  return(
    <div>
      <ul>
        {drinks.map((drink, index) => (
          <li key={index}>{drink}</li>
        ))}
      </ul>
    </div>
  )
}

export default DrinkList;