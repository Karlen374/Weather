import GraphValue from "../components/graphValue/GraphValue";
import {Helmet} from 'react-helmet'

const GraphPage=()=>{
  return(
    <>
        <Helmet>
          <meta
            name="description"
            content="Currency Charts"
            />
          <title>Currency Charts</title>
      </Helmet>

      <GraphValue/>
    </>
  )
}
export default GraphPage;