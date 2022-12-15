import { useEffect, useReducer } from "react";
import Articles from "./components/Articles";


const initialValue ={articles:null,loading:true,error:null}


const reducer = (state,action) => {
  if(action.type === 'LOADING' ) {
    return {articles:null,loading:true,error:null}
  }
  if(action.type === 'FETCHING' ) {
    console.log(action.payload );

   return {articles:action.payload,loading:false,error:null}
  }
  if(action.type === 'ERROR' ) {
    return {articles:null,loading:false,error:action.payload}

  }
  return state
}

const useFetch =() => {
  
  const [state,dispatch] = useReducer(reducer,initialValue)
  useEffect(() => {
    const url =`    
    https://newsapi.org/v2/everything?domains=wsj.com&apiKey=5f8ce8e05e814e47822d05da4e46adf7

    `
    
    const Fetching =async (urlParams) => {
      try {
        dispatch({
          type:'LOADING'
        }) 
       const res = await fetch(urlParams)
       const result = await res.json()
       dispatch({
        type:'FETCHING',payload:result.articles
      }) 
      } catch (error) {
        dispatch({
          type:'ERROR',payload:error
        }) 
      }
     }
     Fetching(url)
  },[])
  return [state.articles,state.loading,state.error]
}
function App() {
  const [articles,loading,error] = useFetch()
  return (
    <>
    {
       !loading && ! error? (
        <Articles articles={articles} />
      ):null
    }
    </>
  );
}

export default App;
