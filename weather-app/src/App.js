import { Navbar, InputLocation } from "./component/index";
// import { useLocation } from "./hooks/useLocation";

export default function App() {
  // const { location, setLocation } = useLocation();

  return (
    <div>
      <Navbar />
      <InputLocation />
    </div>
  );
}
