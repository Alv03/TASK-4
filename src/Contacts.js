import React, { useReducer,} from 'react'

const Contacts = () => {
    // const [state, setState] = useState({
    //     editor: "",
    //     message: "",
    //     terms: false,
    //     test: ""
    // })
    const initial={
count: 0,
editor: "",
message: "",
terms: false,
test: ""
      }
      const reducer = (state, action) => { 
        switch (action.type) {
          case "increment":
            return {
              ...state,
              count: state.count +1
            }
            break;
          case "decrement":
            return {
              ...state,
              count: state.count -1
            }
            break;
          case "change":
            const target = action.payload;
        const value = target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;
    
        return{
            ...state,
          [name]: value
        };
            break;
        
          default:
            break;
        }
       }
    const [counter, dispatch] = useReducer(reducer, initial)

   function handleChange(e){
     dispatch({type:"change", payload:e.target})
    }
    
     function handleSubmit(event) {
        event.preventDefault();
        console.log(counter);
      }
  return (
    <div> <div className="Contacts">
    <h2><i><center>
    Contacts</center></i>
    </h2>
    <div className="container">
      <div className="columns">
        <div className="column is-9">
          <form className="form" onSubmit={handleSubmit}>
            <div className="field">
              <label className="label">Contact Name</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  name="fullname"
                  value={counter.fullname}
                  onChange={handleChange}
                />
                <button onClick={()=>dispatch({type:"increment"})}>+</button>
                {counter.count}
                <button onClick={()=>dispatch({type:"decrement"})}>-</button>
              </div>
            </div>
            
              <div className="field">
              <label className="label">Any Other Questions?</label>
              <div className="control">
                <textarea
                  className="textarea"
                  name="message"
                  value={counter.message}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="field">
              <div className="control">
                <label className="checkbox">
                  <input
                    name="terms"
                    type="checkbox"
                    checked={counter.terms}
                    onChange={handleChange}
                  />
                  I agree to the{" "}
                  <a href="https://google.com">terms and conditions</a>
                </label>
              </div>
            </div>

            <div className="field">
              <div className="control">
                <label className="label">
                  Did you test before asing Questions?
                </label>
                <label className="radio">
                  <input
                    type="radio"
                    name="test"
                    onChange={handleChange}
                    value="Yes"
                    checked={counter.test === "Yes"}
                  />
                  Yes
                </label>
                <label className="radio">
                  <input
                    type="radio"
                    name="test"
                    onChange={handleChange}
                    value="No"
                    checked={counter.test === "No"}
                  />
                  No
                </label>
              </div>
            </div>

           
          </form>
        </div>
        <div className="column is-3">
          <pre>
            <code>
              <p>Contact Name: {counter.fullname}</p>
              <p>Questions: {counter.message}</p>
             
              <p>Do you test?: {counter.test}</p>
            </code>
          </pre>
        </div>
      </div>
    </div>
  </div></div>
  )
}

export default Contacts