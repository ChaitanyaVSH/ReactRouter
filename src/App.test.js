import renderer from "react-test-renderer";
import App from './components/App/App';

describe("App component rendering", ()=>{
  it("",()=>{
    expect(()=>{
      renderer.create(<App />)
    }).not.toThrow();
  });
})
