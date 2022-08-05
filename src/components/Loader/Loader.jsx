import './Loader.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { ThreeDots } from 'react-loader-spinner';
export default function Loader() {
  return (
    <div className="loader">
      <ThreeDots color="#00BFFF" height={100} width={100} />
    </div>
  );
}
