import ExchangeValue from "../components/exchangeValue/ExchangeValue";
import { Helmet } from "react-helmet";


const ExchangeValuePage=()=>{
  return(
    <>
      <Helmet>
          <meta
            name="description"
            content="Currency convert"
            />
          <title>Currency convert</title>
      </Helmet>
     
    <ExchangeValue/>
    </>
    
  )
}
export default ExchangeValuePage;