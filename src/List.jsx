import { list } from "./App"

function List() {
    return (
      <ul>
        {
          list.map((l, index) => <li key={index}>{l}</li>)
        }
      </ul>
    )
}

export default List