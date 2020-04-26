import { useEffect, useState } from "react"
import Header from "./Header"
import axios from "axios"
import Loading from "./Loading"
import Footer from "./Footer"
import ErrorPage from "../pages/_error"

function MainApp({ countries, rates }) {
  useEffect(() => {
    console.log("hello")
  }, [])
  // const [countries, setCountries] = useState(null)
  // const [rates, setRates] = useState(null)
  // const [loading, setLoading] = useState(false)
  // const [error, setError] = useState(false)

  //   useEffect(() => {
  //     const gettingCountries = async () => {
  //       const endpoint = "latest"
  //       const api_key = "2a7a202c431ecf4169c017ee138d8577"
  //       const base_url = "https://api.currencyscoop.com/v1/"

  //       try {
  //         setLoading(true)
  //         const res = await axios.get(base_url + endpoint + "?api_key=" + api_key)
  //         const countryRes = await axios.get(base_url + "currencies" + "?api_key=" + api_key)
  // setCountries(Object.values(countryRes.data.response.fiats))
  //         setRates(res.data.response.rates)
  //         setLoading(false)
  //       } catch (error) {
  //         setLoading(false)
  //         setError(true)
  //       }
  //     }
  //     gettingCountries()
  //   }, [])

  return (
    <>
      <Header countries={countries} rates={rates} />
      {/* {!loading ? (
        <>
          <Header countries={countries} rates={rates} loading={loading} />
        </>
      ) : (
        <Loading />
      )}

      {error ? <ErrorPage /> : null} */}
    </>
  )
}

export default MainApp
