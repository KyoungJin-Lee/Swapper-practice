import { useMediaQuery } from 'react-responsive';
import './Responsive.css';
 
const Example = () => {
  const isMobile = useMediaQuery(
     { minDeviceWidth: 320 },
     { deviceWidth: 767 } // `device` prop
  )
 
  return (
    <div>
      
    </div>
  );
}