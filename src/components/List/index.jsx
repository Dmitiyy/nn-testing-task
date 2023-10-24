import { useSelector } from "react-redux"
import { Selection } from "./Selection"

export const List = () => {
  const { data } = useSelector(state => state.rates)

  return (
    <div className="list">
      <Selection />
      {
        data && (
          <table border="1">
            <caption>Currencies</caption>
            <tbody>
              {
                Object.entries(data.rates || {}).map((item, idx) => {
                  return (
                    <tr key={item[0] + idx}>
                      <td>{item[0]}</td>
                      <td>{item[1]}</td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        )
      }
    </div>
  )
}